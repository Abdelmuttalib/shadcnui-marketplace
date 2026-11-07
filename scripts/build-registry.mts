import { spawn } from "child_process";
import { createHash } from "crypto";
import { promises as fs } from "fs";
import { createRequire } from "module";
import { availableParallelism } from "os";
import path from "path";
import { fileURLToPath } from "url";
import { parseArgs } from "util";
import prettier from "prettier";
import { rimraf } from "rimraf";
import {
  registryItemSchema,
  registrySchema,
  type RegistryItem,
} from "shadcn/schema";

import {
  createStyleMap,
  transformDirection,
  transformIcons,
  transformStyle,
} from "shadcn/utils";
import { Project, ScriptKind } from "ts-morph";

import { legacyStyles } from "../registry/_legacy-styles";
import { BASE_COLORS } from "../registry/base-colors";
import { BASES, type Base } from "../registry/bases";
import { PRESETS } from "../registry/config";
import { fonts } from "../registry/fonts";
import { Style, STYLES } from "../registry/styles.ts";

import { getSiteRegistryUrl } from "../lib/url.ts";

/*
 * build-registry.mts is the single v4 registry pipeline.
 *
 * Source of truth:
 * - Authored raw component/registry source lives in registry/bases/base and
 *   registry/bases/radix.
 * - Authored demo source lives in examples/base and examples/radix.
 * - Style tokens live in registry/styles/style-*.css.
 *
 * Persistent outputs:
 * - registry/bases/__index__.tsx
 * - registry/__index__.tsx
 * - examples/__index__.tsx
 * - styles/<base-style>/ui/*
 * - styles/<base-style>/ui-rtl/* for base-nova and radix-nova only
 * - public/r/*
 *
 * Temporary outputs:
 * - registry/<base-style>/*
 * - registry-<style>.json
 *
 * Execution order:
 * 1. Build registry/bases/__index__.tsx from the authored base registries.
 * 2. Build temporary styled registries under registry/<base-style>.
 * 3. Build registry/__index__.tsx for runtime lookup across legacy styles and
 *    generated base-style combinations.
 * 4. Build examples/__index__.tsx from authored demos.
 * 5. Export public/r/* for every style through the shadcn CLI.
 * 6. Copy compiled ui/* from the temporary registries into styles/<style>/ui.
 * 7. Build styles/<style>/ui-rtl for base-nova and radix-nova only.
 * 8. Format the generated persistent outputs.
 * 9. Clean up the temporary registry/<base-style> trees and registry-*.json.
 *
 * Targeted modes (see parseBuildOptions):
 * - --examples rebuilds examples/__index__.tsx only.
 * - --indexes rebuilds the runtime registry indexes only.
 * - --style <style|all> rebuilds local styles/<style>/ui (+ ui-rtl).
 * - --registry <style|all> rebuilds installable public/r/styles/<style>.
 * Running with no options performs the full build described above.
 */

const STYLE_COMBINATIONS = Array.from(BASES).flatMap((base) =>
  STYLES.map((style) => ({
    base,
    style,
    name: `${base.name}-${style.name}`,
    title: `${base.title} ${style.title}`,
  }))
);

const CPU_COUNT = availableParallelism();
const STYLE_BUILD_CONCURRENCY = Math.max(1, Math.min(CPU_COUNT, 4));
const FILE_BUILD_CONCURRENCY = Math.max(4, Math.min(CPU_COUNT, 8));
const COPY_CONCURRENCY = Math.max(4, Math.min(CPU_COUNT, 8));
const CLI_BUILD_CONCURRENCY = Math.max(
  1,
  Math.min(Math.floor(CPU_COUNT / 2), 4)
);
const TRANSFORM_CACHE_VERSION = "3";
const CACHE_ROOT = path.join(
  process.cwd(),
  "node_modules/.cache/build-registry"
);
const TRANSFORM_CACHE_ROOT = path.join(CACHE_ROOT, "transforms");
const TRANSFORM_CACHE_MANIFEST_PATH = path.join(
  CACHE_ROOT,
  "transform-manifest.json"
);
const GENERATED_REGISTRY_CACHE_PATHS = new Set([
  "registry/__blocks__.json",
  "registry/__index__.tsx",
  "registry/bases/__index__.tsx",
]);

// Sharded component maps live in directories (one shard per style plus an
// index.tsx dispatcher), so exclusion is by prefix rather than exact path.
const GENERATED_REGISTRY_CACHE_PREFIXES = [
  "registry/__components__/",
  "registry/bases/__components__/",
];

type TransformCacheManifestEntry = {
  inputHash: string;
  outputHash: string;
};

const transformCacheManifest = new Map<string, TransformCacheManifestEntry>();
let transformCacheDirty = false;
let prettierConfigPromise: Promise<prettier.Options | null> | null = null;

// Generated output is prettier-formatted in the full (prod) build. Targeted dev
// builds skip formatting for speed; the next full build re-canonicalizes
// everything. The transform cache always stores formatted content (see
// getCachedStyledContent), so a full build never reads an unformatted entry.
let shouldFormatOutput = true;
const resolveFromScript = createRequire(import.meta.url).resolve;

const iconProject = new Project({
  compilerOptions: {},
});

function getRegistryRoot(styleName: string): string {
  const styleCombination = getStyleCombination(styleName);

  if (styleCombination) {
    const { base, style } = styleCombination;

    return `registry/bases/${base.name}/styles/${style.name}`;
  }

  return `registry/${styleName}`;
}

// function normalizeRegistryFilePath(
//   filePath: string,
//   registryRoot: string
// ): string {
//   const normalizedPath = path.posix.normalize(filePath.replaceAll("\\", "/"));

//   const normalizedRoot = path.posix.normalize(
//     registryRoot.replaceAll("\\", "/")
//   );

//   if (
//     normalizedPath === normalizedRoot ||
//     normalizedPath.startsWith(`${normalizedRoot}/`)
//   ) {
//     return normalizedPath;
//   }

//   return path.posix.join(normalizedRoot, normalizedPath);
// }

function normalizeRegistryFilePath(
  filePath: string,
  registryRoot: string
): string {
  const normalizedPath = path.posix.normalize(filePath.replaceAll("\\", "/"));

  const normalizedRoot = path.posix.normalize(
    registryRoot.replaceAll("\\", "/")
  );

  if (
    normalizedPath === normalizedRoot ||
    normalizedPath.startsWith(`${normalizedRoot}/`)
  ) {
    return normalizedPath;
  }

  return path.posix.join(normalizedRoot, normalizedPath);
}

const SITE_REGISTRY_URL = (
  process.env.SITE_REGISTRY_URL ?? "https://shadcnmarketplace.com"
).replace(/\/$/, "");

const PUBLIC_REGISTRY_TYPES = new Set([
  "registry:ui",
  "registry:component",
  "registry:example",
  "registry:block",
  "registry:hook",
  "registry:lib",
  "registry:font",
]);

function getPublicStyleOutputDir(styleName: string) {
  return path.join(process.cwd(), "public", "r", "styles", styleName);
}

function normalizePublicFilePath(filePath: string, registryRoot: string) {
  const prefix = `${registryRoot}/`;

  return filePath.startsWith(prefix) ? filePath.slice(prefix.length) : filePath;
}

function normalizePublicFileContent(
  content: string,
  baseName: string,
  styleName: string
) {
  // Convert imports pointing at the registry's internal UI files
  // into imports that make sense in the consuming application.
  const internalUIPath = `@/registry/bases/${baseName}/styles/${styleName}/ui`;

  return content.split(internalUIPath).join("@/components/ui");
}

export function getStyleVariablesPrefix(style: Style["name"]) {
  switch (style) {
    case "default":
      return "dft";
    case "carbon":
      return "cb";
    case "linear":
      return "linear";
    case "material":
      return "material";
    case "catalyst":
      return "catalyst";
    case "spectrum":
      return "spctm";
    case "wedges":
      return "wedges";
    case "moon":
      return "moon";
    case "lucid":
      return "lucid";
    case "snow":
      return "snow";
    case "neon":
      return "neon";
    case "libelle":
      return "libelle";
    default:
      return "dft";
  }
}

function transformRegistryContent(
  content: string,
  stylePrefix: string
): string {
  let transformed = content;

  // Remove the style-specific prefix from Tailwind utilities and
  // custom radius utilities, such as bg-cb-primary and rounded-cb-lg.
  //
  // Only remove the configured prefix. Do not remove arbitrary
  // suffixes from unrelated utilities.
  const escapedPrefix = stylePrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const stylePrefixPattern = new RegExp(`-${escapedPrefix}(?=-|/|\\b)`, "g");

  transformed = transformed.replace(stylePrefixPattern, "");

  // Rewrite internal UI imports to consumer-facing component imports.
  transformed = transformed.replace(
    /@\/registry\/(?:bases\/[^/]+\/styles\/[^/]+|(?:default-v4|default|carbon|catalyst|linear|material|spectrum|wedges|moon|lucid|snow|neon|libelle))\/ui(?=\/)/g,
    "@/components/ui"
  );

  return transformed;
}

function getStylesToBuild() {
  const stylesToBuild = new Map<string, { name: string; title: string }>();

  for (const style of legacyStyles) {
    stylesToBuild.set(style.name, style);
  }

  for (const style of STYLE_COMBINATIONS) {
    stylesToBuild.set(style.name, {
      name: style.name,
      title: style.title,
    });
  }

  return Array.from(stylesToBuild.values());
}

function getStyleCombination(styleName: string) {
  return STYLE_COMBINATIONS.find((style) => style.name === styleName) ?? null;
}

type BuildOptions = {
  examples: boolean;
  indexes: boolean;
  style: "all" | string | null;
  registry: "all" | string | null;
};

const USAGE = `Usage: registry:build [options]

Run with no options for a full registry build, or target a single artifact:

  --examples              Rebuild examples/__index__.tsx only.
  --indexes               Rebuild the runtime registry indexes only.
  --style <style|all>     Rebuild local generated style files under styles/<style>/ui.
  --registry <style|all>  Rebuild installable registry JSON under public/r/styles/<style>.

<style> must be "all" or a known final style id (e.g. base-nova, radix-nova, base-sera, new-york-v4).
Flags can be combined, e.g. --style base-nova --registry base-nova.`;

function getKnownStyleNames() {
  return new Set(getStylesToBuild().map((style) => style.name));
}

function assertKnownTarget(flag: "--style" | "--registry", target: string) {
  if (target === "all") {
    return;
  }

  const knownStyleNames = getKnownStyleNames();
  if (!knownStyleNames.has(target)) {
    const valid = ["all", ...Array.from(knownStyleNames)].join(", ");
    throw new Error(
      `Unknown ${flag} target "${target}". Valid targets: ${valid}.\n\n${USAGE}`
    );
  }
}

function parseBuildOptions(argv: string[]): BuildOptions {
  let values: {
    examples?: boolean;
    indexes?: boolean;
    style?: string;
    registry?: string;
  };

  try {
    ({ values } = parseArgs({
      args: argv,
      options: {
        examples: { type: "boolean" },
        indexes: { type: "boolean" },
        style: { type: "string" },
        registry: { type: "string" },
      },
      allowPositionals: false,
      strict: true,
    }));
  } catch (error) {
    throw new Error(`${(error as Error).message}\n\n${USAGE}`);
  }

  if (values.style !== undefined) {
    assertKnownTarget("--style", values.style);
  }
  if (values.registry !== undefined) {
    assertKnownTarget("--registry", values.registry);
  }

  return {
    examples: values.examples ?? false,
    indexes: values.indexes ?? false,
    style: values.style ?? null,
    registry: values.registry ?? null,
  };
}

function isFullBuild(options: BuildOptions) {
  return (
    !options.examples &&
    !options.indexes &&
    options.style === null &&
    options.registry === null
  );
}

function getTargetStyles(target: "all" | string | null) {
  const stylesToBuild = getStylesToBuild();

  if (target === "all") {
    return stylesToBuild;
  }

  return stylesToBuild.filter((style) => style.name === target);
}

function stripFileExtension(filePath: string) {
  return filePath.replace(/\.(tsx|ts|json|mdx)$/, "");
}

// Emits the React.lazy() expression used in the generated __components__ files.
// Components live in their own index, separate from registry metadata, so that
// metadata-only consumers (docs, registry JSON, llm/md routes) don't pull all
// component dynamic imports into their module graph — which previously inflated
// dev-server memory.
function lazyComponentExpression(componentPath: string, name: string) {
  return `React.lazy(async () => {
        const mod = await import("${componentPath}")
        const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || "${name}"
        return { default: mod.default || mod[exportName] }
      })`;
}

type ComponentShard = {
  key: string;
  entries: string;
  names: string[];
};

// Writes a sharded component map: one <key>.tsx per style/base holding that
// style's React.lazy entries, plus an index.tsx dispatcher that loads shards
// on demand. A single flat map put every style's dynamic-import edges into
// every consumer's module graph (~3,800 edges on a docs page), which made the
// dev server compile the whole registry universe per route.
async function writeComponentShards(
  outputDir: string,
  shards: ComponentShard[]
) {
  const header = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.mts
// Do not edit this file directly.
import "server-only"

import * as React from "react"
`;

  // Remove the legacy single-file map so the "@/…/__components__" specifier
  // resolves to the directory's index.tsx.
  await fs.rm(`${outputDir}.tsx`, { force: true });
  await fs.mkdir(outputDir, { recursive: true });

  for (const shard of shards) {
    const source = `${header}
export const Components: Record<string, any> = {${shard.entries}
}
`;
    const shardPath = path.join(outputDir, `${shard.key}.tsx`);
    await writeIfChanged(
      shardPath,
      await formatGeneratedSource(source, shardPath)
    );
  }

  let dispatcher = `${header}
const shards: Record<
  string,
  { load: () => Promise<{ Components: Record<string, any> }>; names: Set<string> }
> = {`;

  for (const shard of shards) {
    dispatcher += `
  "${shard.key}": {
    load: () => import("./${shard.key}"),
    names: new Set(${JSON.stringify(shard.names)}),
  },`;
  }

  dispatcher += `
}

const cache = new Map<string, any>()

// Sync existence check via the names set; the shard module (and with it the
// component's dynamic-import subtree) only loads when the component renders.
export function getComponent(styleName: string, name: string) {
  const shard = shards[styleName]
  if (!shard?.names.has(name)) {
    return undefined
  }

  const cacheKey = \`\${styleName}:\${name}\`
  let component = cache.get(cacheKey)
  if (!component) {
    component = React.lazy(async () => {
      const { Components } = await shard.load()
      return { default: Components[name] }
    })
    cache.set(cacheKey, component)
  }

  return component
}
`;

  const indexPath = path.join(outputDir, "index.tsx");
  await writeIfChanged(
    indexPath,
    await formatGeneratedSource(dispatcher, indexPath)
  );

  // Drop shards for styles that no longer exist.
  const expectedFiles = new Set([
    ...shards.map((shard) => `${shard.key}.tsx`),
    "index.tsx",
  ]);

  for (const entry of await fs.readdir(outputDir, {
    withFileTypes: true,
  })) {
    // Only remove stale files generated by this function.
    // Preserve directories such as "base/".
    if (entry.isFile() && !expectedFiles.has(entry.name)) {
      await fs.rm(path.join(outputDir, entry.name), { force: true });
    }
  }

  // for (const entry of await fs.readdir(outputDir)) {
  //   if (!expectedFiles.has(entry)) {
  //     await fs.rm(path.join(outputDir, entry), { force: true });
  //   }
  // }
}

function normalizeRegistryFiles(item: RegistryItem): Array<{
  path: string;
  type: string;
  target?: string;
}> {
  return (
    item.files?.map((file) => ({
      path: typeof file === "string" ? file : file.path,
      type: typeof file === "string" ? item.type : file.type,
      target: typeof file === "string" ? undefined : file.target,
    })) ?? []
  );
}

function shouldGenerateRtlStyles(styleName: string) {
  return (
    styleName === "base-nova" ||
    styleName === "radix-nova" ||
    styleName === "aria-nova"
  );
}

function isStyledOutputFile(filePath: string) {
  return filePath.startsWith("ui/");
}

function shouldIncludeStyledRegistryItem(item: RegistryItem) {
  return item.type === "registry:ui";
}

function getTemporaryRegistryRoot(styleName: string) {
  return path.join(process.cwd(), `registry/${styleName}`);
}

function getPersistentStyleRoot(styleName: string) {
  return path.join(process.cwd(), "styles", styleName);
}

function hashContent(...parts: string[]) {
  const hash = createHash("sha256");

  for (const part of parts) {
    hash.update(part);
    hash.update("\0");
  }

  return hash.digest("hex");
}

async function getTransformCacheHash() {
  const [implementationHash, registryHash] = await Promise.all([
    getTransformImplementationHash(),
    getAuthoredRegistryHash(),
  ]);

  return hashContent(implementationHash, registryHash);
}

async function getTransformImplementationHash() {
  const dependencyFiles = [
    fileURLToPath(import.meta.url),
    resolveFromScript("shadcn/utils"),
    path.resolve(process.cwd(), "../../pnpm-lock.yaml"),
  ];
  const dependencyContent = await Promise.all(
    dependencyFiles.map(async (filePath) => {
      const content = await readFileIfExists(filePath);
      const relativePath = toPosixPath(path.relative(process.cwd(), filePath));

      return `${relativePath}\0${content ?? "missing"}`;
    })
  );

  return hashContent(...dependencyContent);
}

async function getAuthoredRegistryHash() {
  const registryRoot = path.join(process.cwd(), "registry");
  const filePaths = await getCacheableRegistryFiles(registryRoot);
  const fileContent = await Promise.all(
    filePaths.map(async (filePath) => {
      const relativePath = toPosixPath(path.relative(process.cwd(), filePath));
      const content = await fs.readFile(filePath, "utf8");

      return `${relativePath}\0${content}`;
    })
  );

  return hashContent(...fileContent);
}

async function getCacheableRegistryFiles(dirPath: string): Promise<string[]> {
  const entries = await readDirectoryEntries(dirPath);
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dirPath, entry.name);
      const relativePath = toPosixPath(path.relative(process.cwd(), entryPath));

      if (shouldSkipRegistryCachePath(relativePath)) {
        return [];
      }

      if (entry.isDirectory()) {
        return getCacheableRegistryFiles(entryPath);
      }

      if (!entry.isFile()) {
        return [];
      }

      return [entryPath];
    })
  );

  return files.flat().sort((a, b) => a.localeCompare(b));
}

function shouldSkipRegistryCachePath(relativePath: string) {
  if (GENERATED_REGISTRY_CACHE_PATHS.has(relativePath)) {
    return true;
  }

  if (
    GENERATED_REGISTRY_CACHE_PREFIXES.some((prefix) =>
      relativePath.startsWith(prefix)
    )
  ) {
    return true;
  }

  return STYLE_COMBINATIONS.some((style) =>
    relativePath.startsWith(`registry/${style.name}/`)
  );
}

function toPosixPath(filePath: string) {
  return filePath.split(path.sep).join("/");
}

async function readFileIfExists(filePath: string) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function writeIfChanged(filePath: string, content: string) {
  const existingContent = await readFileIfExists(filePath);
  if (existingContent === content) {
    return false;
  }

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);

  return true;
}

async function formatSource(content: string, filePath: string) {
  prettierConfigPromise ??= prettier.resolveConfig(
    path.join(process.cwd(), "package.json")
  );

  const prettierConfig = (await prettierConfigPromise) ?? {};

  return prettier.format(content, {
    ...prettierConfig,
    filepath: filePath,
  });
}

async function formatGeneratedSource(content: string, filePath: string) {
  if (!shouldFormatOutput) {
    return content;
  }

  return formatSource(content, filePath);
}

async function formatGeneratedJson(value: unknown, filePath: string) {
  return formatGeneratedSource(JSON.stringify(value, null, 2), filePath);
}

async function loadTransformCache() {
  const existingManifest = await readFileIfExists(
    TRANSFORM_CACHE_MANIFEST_PATH
  );
  if (!existingManifest) {
    return;
  }

  const payload = JSON.parse(existingManifest) as Record<string, unknown>;

  for (const [key, value] of Object.entries(payload)) {
    if (isTransformCacheManifestEntry(value)) {
      transformCacheManifest.set(key, value);
    }
  }
}

function isTransformCacheManifestEntry(
  value: unknown
): value is TransformCacheManifestEntry {
  return (
    typeof value === "object" &&
    value !== null &&
    "inputHash" in value &&
    "outputHash" in value &&
    typeof value.inputHash === "string" &&
    typeof value.outputHash === "string"
  );
}

async function saveTransformCache() {
  if (!transformCacheDirty) {
    return;
  }

  await fs.mkdir(CACHE_ROOT, { recursive: true });

  const payload = Object.fromEntries(
    Array.from(transformCacheManifest.entries()).sort(([a], [b]) =>
      a.localeCompare(b)
    )
  );

  await fs.writeFile(
    TRANSFORM_CACHE_MANIFEST_PATH,
    JSON.stringify(payload, null, 2)
  );

  transformCacheDirty = false;
}

async function getCachedStyledContent({
  styleName,
  baseName,
  filePath,
  source,
  styleHash,
  transformCacheHash,
  styleMap,
}: {
  styleName: string;
  baseName: string;
  filePath: string;
  source: string;
  styleHash: string;
  transformCacheHash: string;
  styleMap: Record<string, string>;
}) {
  const cacheKey = `${styleName}:${filePath}`;
  const cachePath = path.join(TRANSFORM_CACHE_ROOT, styleName, filePath);
  const inputHash = hashContent(
    TRANSFORM_CACHE_VERSION,
    styleName,
    baseName,
    filePath,
    transformCacheHash,
    styleHash,
    source
  );

  const cachedEntry = transformCacheManifest.get(cacheKey);
  if (cachedEntry?.inputHash === inputHash) {
    const cachedContent = await readFileIfExists(cachePath);
    if (
      cachedContent !== null &&
      hashContent(cachedContent) === cachedEntry.outputHash
    ) {
      return cachedContent;
    }
  }

  let transformedContent = await transformStyle(source, { styleMap });
  transformedContent = transformedContent.replace(
    new RegExp(`@/registry/bases/${baseName}/`, "g"),
    `@/registry/${styleName}/`
  );
  // Always format cached content so a later full build never reads an
  // unformatted entry produced by a targeted dev build.
  transformedContent = await formatSource(
    transformedContent,
    path.join(getTemporaryRegistryRoot(styleName), filePath)
  );

  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(cachePath, transformedContent);

  const outputHash = hashContent(transformedContent);
  const nextEntry = { inputHash, outputHash };
  if (
    cachedEntry?.inputHash !== nextEntry.inputHash ||
    cachedEntry?.outputHash !== nextEntry.outputHash
  ) {
    transformCacheManifest.set(cacheKey, nextEntry);
    transformCacheDirty = true;
  }

  return transformedContent;
}

async function runWithConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>
) {
  const results = new Array<R>(items.length);
  let currentIndex = 0;

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (true) {
        const index = currentIndex++;
        if (index >= items.length) {
          return;
        }

        results[index] = await worker(items[index], index);
      }
    })
  );

  return results;
}

// ----------------------------------------------------------------------------
// Build public/r/styles/index.json.
// ----------------------------------------------------------------------------
// async function buildStylesCatalog() {
//   const outputPath = path.join(
//     process.cwd(),
//     "public",
//     "r",
//     "styles",
//     "index.json"
//   );

//   await fs.mkdir(path.dirname(outputPath), {
//     recursive: true,
//   });

//   await writeIfChanged(
//     outputPath,
//     await formatGeneratedJson(STYLES, outputPath)
//   );
// }

async function buildStylePublicIndex(
  styleName: string,
  siteRegistryUrl: string
) {
  const registryRoot = getRegistryRoot(styleName);

  const { registry: importedRegistry } = await import(
    `../${registryRoot}/registry.ts`
  );

  const parseResult = registrySchema.safeParse(importedRegistry);

  if (!parseResult.success) {
    console.error(`❌ Registry validation failed for ${styleName}:`);

    console.error(parseResult.error.format());

    throw new Error(`Invalid registry schema for ${styleName}`);
  }

  const registry = parseResult.data;

  // The source registry defines both "index" and "style"
  // using the same base style metadata.
  const styleItem = registry.items.find((item) => item.name === "style");

  if (!styleItem) {
    throw new Error(`Missing "style" item in registry "${styleName}".`);
  }

  // Include actual UI components, not examples, internal items,
  // hooks, or implementation details.
  const componentItems = registry.items.filter(
    (item) =>
      item.type === "registry:ui" &&
      item.name !== "index" &&
      item.name !== "style" &&
      normalizeRegistryFiles(item).length > 0
  );

  console.log("siteRegistryUrl", siteRegistryUrl, process.env.NODE_ENV);

  const dependencies = Array.from(
    new Set([
      ...(styleItem.registryDependencies ?? []).filter(
        (dependency) =>
          !dependency.startsWith("http://") &&
          !dependency.startsWith("https://")
      ),

      ...componentItems.map(
        (item) =>
          `${siteRegistryUrl.replace(/\/+$/, "")}` +
          `/r/styles/${styleName}/${item.name}.json`
      ),
    ])
  );

  const payload = {
    ...styleItem,

    name: styleName,

    registryDependencies: dependencies,

    files: [],
  };

  const outputPath = path.join(
    process.cwd(),
    "public",
    "r",
    "styles",
    styleName,
    "index.json"
  );

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(payload, outputPath)
  );
}

async function buildStylesCatalog() {
  const outputPath = path.join(
    process.cwd(),
    "public",
    "r",
    "styles",
    "index.json"
  );

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(STYLES, outputPath)
  );
}

async function getImplementedStyleNames(
  bases: Base[],
  styles: Style[]
): Promise<string[]> {
  const combinations = bases.flatMap((base) =>
    styles.map((style) => ({
      base,
      style,
      styleName: `${base.name}-${style.name}`,
    }))
  );

  const results = await Promise.all(
    combinations.map(async ({ base, style, styleName }) => {
      const registryPath = path.join(
        process.cwd(),
        "registry",
        "bases",
        base.name,
        "styles",
        style.name,
        "registry.ts"
      );

      try {
        await fs.access(registryPath);
        return styleName;
      } catch {
        return null;
      }
    })
  );

  return results.filter((styleName): styleName is string => styleName !== null);
}

const styleNames = await getImplementedStyleNames(BASES, STYLES);

// async function buildRegistry2() {
//   console.log("🚀 Building registry...");

//   await buildBases(BASES);

//   await buildBasesStylesIndex(BASES, STYLES);

//   const styleNames = BASES.flatMap((base) =>
//     STYLES.map((style) => `${base.name}-${style.name}`)
//   );

//   await Promise.all(
//     styleNames.map(async (styleName) => {
//       await buildRegistryJsonFile(styleName);
//       await buildStyleComponentJsonFiles(styleName);
//     })
//   );

//   console.log("✅ Registry build complete!");
// }

async function buildRegistry2() {
  console.log("🚀 Building registry...");

  // 1. Build each implemented base/style combination.
  await buildBases(BASES);

  // 2. Generate the application-side index and lazy component shards.
  await buildBasesStylesIndex(BASES, STYLES);

  // 3. Build public registry JSON for implemented combinations.
  const styleNames = await getImplementedStyleNames(BASES, STYLES);

  // process.env.NEXT_PUBLIC_SITE_URL ?? "https://shadcnmarketplace.com"
  const siteRegistryUrl2 = (
    process.env.NODE_ENV === "production"
      ? "https://shadcnmarketplace.com"
      : "http://localhost:3000"
  ).replace(/\/+$/, "");

  const siteRegistryUrl = getSiteRegistryUrl();

  await runWithConcurrency(
    styleNames,
    STYLE_BUILD_CONCURRENCY,
    async (styleName) => {
      console.log(`   📦 Public registry: ${styleName}`);

      // Preserve the complete registry JSON.
      await buildRegistryJsonFile(styleName);

      // Generate individual component JSON files.
      await buildStyleComponentJsonFiles(styleName);

      // Generate the style installation manifest.
      await buildStylePublicIndex(styleName, siteRegistryUrl);
    }
  );

  // 4. Generate the style catalog.
  await buildStylesCatalog();

  console.log("\n📋 Copying compiled ui to styles...");
  await copyUIToStyles();

  console.log("✅ Registry build complete!");
}

// async function buildRegistry2() {
//   console.log("🚀 Building registry...");

//   // 1. Prepare temporary registries and copy source files.
//   await buildBases(BASES);

//   // 2. Generate the application-side registry index and component shards.
//   await buildBasesStylesIndex(BASES, STYLES);

//   // 3. Resolve the public registry origin.
//   const siteRegistryUrl =
//     process.env.NEXT_PUBLIC_SITE_URL ?? "https://shadcnmarketplace.com";

//   // 4. Find combinations that actually have a source registry.
//   const styleNames = await getImplementedStyleNames(BASES, STYLES);

//   // 5. Generate the complete public registry for each combination.
//   await runWithConcurrency(
//     styleNames,
//     STYLE_BUILD_CONCURRENCY,
//     async (styleName) => {
//       // Preserve the existing registry format.
//       await buildRegistryJsonFile(styleName);

//       // Generate individual component JSON files and the style manifest.
//       await buildStylePublicRegistry(styleName, siteRegistryUrl);
//     }
//   );

//   // 6. Generate the style catalog.
//   await buildStylesCatalog();

//   // 7. Generate the general registry index if required.
//   // await buildIndex();

//   console.log("✅ Registry build complete!");
// }

// async function buildRegistry2() {
//   console.log("🚀 Building registry...");

//   // 1. Build each implemented base/style combination.
//   await buildBases(BASES);

//   // 2. Generate the application-side base/style registry index
//   //    and component shards.
//   await buildBasesStylesIndex(BASES, STYLES);

//   // 3. Determine the public registry URL.
//   const siteRegistryUrl =
//     process.env.NEXT_PUBLIC_SITE_URL ?? "https://shadcnmarketplace.com";

//   // 4. Build the complete public registry for each base/style.
//   const styleNames = BASES.flatMap((base) =>
//     STYLES.map((style) => `${base.name}-${style.name}`)
//   );

//   await runWithConcurrency(
//     styleNames,
//     STYLE_BUILD_CONCURRENCY,
//     async (styleName) => {
//       await buildRegistryJsonFile(styleName);

//       await buildStylePublicRegistry(styleName, siteRegistryUrl);
//     }
//   );

//   await buildStylesCatalog();

//   // await runWithConcurrency(
//   //   styleNames,
//   //   STYLE_BUILD_CONCURRENCY,
//   //   async (styleName) => {
//   //     // Generate the existing registry.json first.
//   //     await buildRegistryJsonFile(styleName);

//   //     // Then generate index.json and individual item JSON files.
//   //     await buildStylePublicRegistry(styleName, siteRegistryUrl);
//   //   }
//   // );

//   console.log("✅ Registry build complete!");
// }

// async function buildRegistry2() {
//   console.log("🚀 Building registry...");

//   // 1. Build each base/style combination.
//   await buildBases(BASES);

//   // 2. Generate the base/style registry index.
//   await buildBasesStylesIndex(BASES, STYLES);

//   // 3. Generate registry JSON files for each base/style combination.
//   const styleNames = BASES.flatMap((base) =>
//     STYLES.map((style) => `${base.name}-${style.name}`)
//   );

//   await Promise.all(
//     styleNames.map((styleName) => buildRegistryJsonFile(styleName))
//   );

//   console.log("✅ Registry build complete!");
// }

try {
  const totalStart = performance.now();
  const options = parseBuildOptions(process.argv.slice(2));

  buildRegistry2();

  //  await buildBasesStylesIndex(Array.from(BASES), Array.from(STYLES));

  // if (isFullBuild(options)) {
  //   await runFullBuild();
  // } else {
  //   await runTargetedBuild(options);
  // }

  const elapsed = ((performance.now() - totalStart) / 1000).toFixed(2);
  console.log(`\n✅ Build complete in ${elapsed}s!`);
} catch (error) {
  await saveTransformCache().catch(console.error);
  console.error(error);
  process.exit(1);
}

async function runFullBuild() {
  await loadTransformCache();

  console.log("\n🏗️ Building bases...");
  await buildBasesIndex(Array.from(BASES));
  await buildBases(Array.from(BASES));

  const stylesToBuild = getStylesToBuild();

  console.log("\n📦 Building registry/__index__.tsx...");
  await buildRegistryIndex(stylesToBuild);

  console.log("\n📋 Building examples/__index__.tsx...");
  await buildExamplesIndex();

  console.log("\n💅 Building styles...");
  await runWithConcurrency(
    stylesToBuild,
    CLI_BUILD_CONCURRENCY,
    async (style) => {
      await buildRegistryJsonFile(style.name);
      // await buildRegistry(style.name);

      console.log(`   ✅ ${style.name}`);
    }
  );

  console.log("\n🗂️ Building registry/__blocks__.json...");
  await buildBlocksIndex();

  console.log("\n⚙️ Building public/r/config.json...");
  await buildConfig();

  console.log("\n📦 Building public/r/index.json...");
  await buildIndex();

  console.log("\n🎨 Building public/r/colors...");
  await buildColors();

  console.log("\n📋 Copying compiled ui to styles...");
  await copyUIToStyles();

  console.log("\n🔄 Building RTL styles...");
  await buildRtlStyles();

  console.log("\n🧹 Cleaning up...");
  await cleanUpTemporaryFiles(stylesToBuild.map((style) => style.name));
  await saveTransformCache();
}

async function runTargetedBuild(options: BuildOptions) {
  // Targeted builds are for quick dev iteration: skip prettier on generated
  // output. The full (prod) build re-formats everything to its canonical state.
  shouldFormatOutput = false;

  await loadTransformCache();

  // Phases run in dependency-safe order: indexes and examples write the runtime
  // lookup files first, the targeted style build copies compiled ui into
  // styles/<style>, and the targeted registry build exports public/r last.
  if (options.indexes) {
    await runIndexesBuild();
  }

  if (options.examples) {
    await runExamplesBuild();
  }

  if (options.style !== null) {
    await runTargetedStyleBuild(options.style);
  }

  if (options.registry !== null) {
    await runTargetedRegistryBuild(options.registry);
  }

  await saveTransformCache();
}

async function runIndexesBuild() {
  console.log("🏗️ Building registry/bases/__index__.tsx...");
  await buildBasesIndex(Array.from(BASES));

  console.log("\n📦 Building registry/__index__.tsx...");
  await buildRegistryIndex(getStylesToBuild());

  console.log("\n🗂️ Building registry/__blocks__.json...");
  await buildBlocksIndex();

  console.log("\n📦 Building public/r/index.json...");
  await buildIndex();
}

async function runExamplesBuild() {
  console.log("📋 Building examples/__index__.tsx...");
  await buildExamplesIndex();
}

async function runTargetedStyleBuild(target: "all" | string) {
  if (target !== "all" && !getStyleCombination(target)) {
    throw new Error(
      `--style ${target} is not supported because it is a legacy source registry. Use --registry ${target}.`
    );
  }

  // styles/<style>/ui only exists for generated base/style combinations, so we
  // skip legacy source styles (e.g. new-york-v4) when targeting "all".
  const targetStyles = getTargetStyles(target).filter((style) =>
    getStyleCombination(style.name)
  );
  const targetStyleNames = new Set(targetStyles.map((style) => style.name));

  if (targetStyleNames.size === 0) {
    console.log("   No generated styles to build.");
    return;
  }

  console.log("💅 Building styles...");
  await buildBases(Array.from(BASES), targetStyleNames);

  console.log("\n📋 Copying compiled ui to styles...");
  await copyUIToStyles(targetStyleNames);

  console.log("\n🔄 Building RTL styles...");
  await buildRtlStyles(targetStyleNames);

  console.log("\n🧹 Cleaning up...");
  await cleanUpTemporaryFiles(Array.from(targetStyleNames));
}

async function runTargetedRegistryBuild(target: "all" | string) {
  const targetStyles = getTargetStyles(target);
  const comboStyleNames = new Set(
    targetStyles
      .filter((style) => getStyleCombination(style.name))
      .map((style) => style.name)
  );

  // Only generated base/style combinations need a temporary registry/<style>
  // tree. Legacy source styles (e.g. new-york-v4) already ship registry.ts.
  if (comboStyleNames.size > 0) {
    console.log("🏗️ Building bases...");
    await buildBases(Array.from(BASES), comboStyleNames);
  }

  console.log("\n💅 Building registry...");
  await runWithConcurrency(
    targetStyles,
    CLI_BUILD_CONCURRENCY,
    async (style) => {
      await buildRegistryJsonFile(style.name);
      // await buildRegistry(style.name);
      console.log(`   ✅ ${style.name}`);
    }
  );

  console.log("\n🧹 Cleaning up...");
  await cleanUpTemporaryFiles(targetStyles.map((style) => style.name));
}

async function buildBasesIndex(bases: Base[]) {
  const registryImports = await Promise.all(
    bases.map(async (base) => {
      const { registry: importedRegistry } = await import(
        `../registry/bases/${base.name}/registry.ts`
      );
      return { base, importedRegistry };
    })
  );

  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import "server-only"

export const Index: Record<string, Record<string, any>> = {`;

  const componentShards: ComponentShard[] = [];

  for (const { base, importedRegistry } of registryImports) {
    const parseResult = registrySchema.safeParse(importedRegistry);
    if (!parseResult.success) {
      console.error(`❌ Registry validation failed for ${base.name}:`);
      console.error(parseResult.error.format());
      throw new Error(`Invalid registry schema for ${base.name}`);
    }

    const registry = parseResult.data;

    index += `
  "${base.name}": {`;
    const shard: ComponentShard = { key: base.name, entries: "", names: [] };

    for (const item of registry.items) {
      if (item.type === "registry:internal") {
        continue;
      }

      const files = normalizeRegistryFiles(item);

      if (files.length === 0) {
        continue;
      }

      const componentPath = files[0]?.path
        ? `@/registry/bases/${base.name}/${stripFileExtension(files[0].path)}`
        : "";

      index += `
    "${item.name}": {
      name: "${item.name}",
      title: "${item.title}",
      description: "${item.description ?? ""}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      files: [${files.map((file) => {
        const filePath = `registry/bases/${base.name}/${file.path}`;
        return `{
        path: "${filePath}",
        type: "${file.type}",
        target: "${file.target ?? ""}"
      }`;
      })}],
      categories: ${JSON.stringify(item.categories)},
      meta: ${JSON.stringify(item.meta)},
    },`;

      if (componentPath) {
        shard.entries += `
  "${item.name}": ${lazyComponentExpression(componentPath, item.name)},`;
        shard.names.push(item.name);
      }
    }

    index += `
  },`;
    componentShards.push(shard);
  }

  index += `
}`;

  const outputPath = path.join(process.cwd(), "registry/bases/__index__.tsx");
  await writeIfChanged(
    outputPath,
    await formatGeneratedSource(index, outputPath)
  );

  await writeComponentShards(
    path.join(process.cwd(), "registry/bases/__components__"),
    componentShards
  );
}

async function buildBasesStylesIndex(bases: Base[], styles: Style[]) {
  const index = `
    // @ts-nocheck
    // This file is autogenerated by scripts/build-registry.ts
    // Do not edit this file directly.
    import "server-only";

    export const Index: Record<
      string,
      Record<string, Record<string, any>>
    > = {
  `;

  const componentShards: ComponentShard[] = [];

  const baseEntries: string[] = [];

  for (const base of bases) {
    const styleEntries: string[] = [];
    console.log("styles", styles);

    for (const style of styles) {
      const registryPath = `../registry/bases/${base.name}/styles/${style.name}/registry.ts`;

      let importedRegistry: unknown;

      try {
        const { registry: registryIndex } = await import(registryPath);

        importedRegistry = registryIndex;
      } catch (error) {
        // A style might not be implemented for every base.
        // Skip missing registries, but surface other import errors.
        if (
          error instanceof Error &&
          (error.message.includes("Cannot find module") ||
            error.message.includes("Failed to resolve"))
        ) {
          continue;
        }

        throw error;
      }

      const parseResult = registrySchema.safeParse(importedRegistry);

      if (!parseResult.success) {
        console.error(
          `❌ Registry validation failed for ${base.name}/${style.name}:`
        );
        console.error(parseResult.error.format());

        throw new Error(
          `Invalid registry schema for ${base.name}/${style.name}`
        );
      }

      const registry = parseResult.data;
      const entries: string[] = [];

      const shard: ComponentShard = {
        key: `${base.name}/${style.name}`,
        entries: "",
        names: [],
      };

      for (const item of registry.items) {
        if (item.type === "registry:internal") {
          continue;
        }

        const files = normalizeRegistryFiles(item);

        if (files.length === 0) {
          continue;
        }

        const componentPath = files[0]?.path
          ? `@/registry/bases/${base.name}/styles/${
              style.name
            }/${stripFileExtension(
              files[0].path.replace(
                `registry/bases/${base.name}/styles/${style.name}/`,
                ""
              )
            )}`
          : "";

        const entry = `
          "${item.name}": {
            name: ${JSON.stringify(item.name)},
            title: ${JSON.stringify(item.title ?? "")},
            description: ${JSON.stringify(item.description ?? "")},
            type: ${JSON.stringify(item.type)},
            registryDependencies: ${JSON.stringify(item.registryDependencies)},
            files: ${JSON.stringify(
              files.map((file) => ({
                path: `registry/bases/${base.name}/styles/${
                  style.name
                }/${file.path.replace(
                  `registry/bases/${base.name}/styles/${style.name}/`,
                  ""
                )}`,
                type: file.type,
                target: file.target ?? "",
              }))
            )},
            categories: ${JSON.stringify(item.categories)},
            meta: ${JSON.stringify(item.meta)},
          },
        `;

        entries.push(entry);

        if (componentPath) {
          shard.entries += `
            "${item.name}": ${lazyComponentExpression(
              componentPath,
              item.name
            )},
          `;

          shard.names.push(item.name);
        }
      }

      styleEntries.push(`
        ${JSON.stringify(style.name)}: {
          ${entries.join("\n")}
        },
      `);

      componentShards.push(shard);
    }

    baseEntries.push(`
      ${JSON.stringify(base.name)}: {
        ${styleEntries.join("\n")}
      },
    `);
  }

  const output = `
    // @ts-nocheck
    // This file is autogenerated by scripts/build-registry.ts
    // Do not edit this file directly.
    import "server-only";

    export const Index: Record<
      string,
      Record<string, Record<string, any>>
    > = {
      ${baseEntries.join("\n")}
    };
  `;

  const outputPath = path.join(process.cwd(), "registry/bases/__index__.tsx");

  await writeIfChanged(
    outputPath,
    await formatGeneratedSource(output, outputPath)
  );

  await writeComponentShards(
    path.join(process.cwd(), "registry/bases/__components__"),
    componentShards
  );
}

// async function buildBasesStylesIndex(bases: Base[], styles: Style[]) {
//   const registryImports = await Promise.all(
//     bases.map(async (base) => {
//       const { registry: importedRegistry } = await import(
//         `../registry/bases/${base.name}/registry.ts`
//       );
//       return { base, importedRegistry };
//     })
//   );

//   let index = `// @ts-nocheck
// // This file is autogenerated by scripts/build-registry.ts
// // Do not edit this file directly.
// import "server-only"

// export const Index: Record<string, Record<string, any>> = {`;

//   const componentShards: ComponentShard[] = [];

//   for (const { base, importedRegistry } of registryImports) {
//     const parseResult = registrySchema.safeParse(importedRegistry);
//     if (!parseResult.success) {
//       console.error(`❌ Registry validation failed for ${base.name}:`);
//       console.error(parseResult.error.format());
//       throw new Error(`Invalid registry schema for ${base.name}`);
//     }

//     const registry = parseResult.data;

//     index += `
//   "${base.name}": {`;
//     const shard: ComponentShard = { key: base.name, entries: "", names: [] };

//     for (const item of registry.items) {
//       if (item.type === "registry:internal") {
//         continue;
//       }

//       const files = normalizeRegistryFiles(item);

//       if (files.length === 0) {
//         continue;
//       }

//       const componentPath = files[0]?.path
//         ? `@/registry/bases/${base.name}/${stripFileExtension(files[0].path)}`
//         : "";

//       index += `
//     "${item.name}": {
//       name: "${item.name}",
//       title: "${item.title}",
//       description: "${item.description ?? ""}",
//       type: "${item.type}",
//       registryDependencies: ${JSON.stringify(item.registryDependencies)},
//       files: [${files.map((file) => {
//         const filePath = `registry/bases/${base.name}/${file.path}`;
//         return `{
//         path: "${filePath}",
//         type: "${file.type}",
//         target: "${file.target ?? ""}"
//       }`;
//       })}],
//       categories: ${JSON.stringify(item.categories)},
//       meta: ${JSON.stringify(item.meta)},
//     },`;

//       if (componentPath) {
//         shard.entries += `
//   "${item.name}": ${lazyComponentExpression(componentPath, item.name)},`;
//         shard.names.push(item.name);
//       }
//     }

//     index += `
//   },`;
//     componentShards.push(shard);
//   }

//   index += `
// }`;

//   const outputPath = path.join(process.cwd(), "registry/bases/__index__.tsx");
//   await writeIfChanged(
//     outputPath,
//     await formatGeneratedSource(index, outputPath)
//   );

//   await writeComponentShards(
//     path.join(process.cwd(), "registry/bases/__components__"),
//     componentShards
//   );
// }

/*
async function buildBases(bases: Base[], targetStyleNames?: Set<string>) {
  // For targeted builds, only load bases that contribute a requested
  // combination. Otherwise a single-base target (e.g. --style base-nova) would
  // still import and read every source file for the other base.
  const basesToBuild = targetStyleNames
    ? bases.filter((base) =>
        STYLES.some((style) =>
          targetStyleNames.has(`${base.name}-${style.name}`)
        )
      )
    : bases;

  const [baseImports, styleMaps, transformCacheHash] = await Promise.all([
    Promise.all(
      basesToBuild.map(async (base) => {
        const { registry: baseRegistry } = await import(
          `../registry/bases/${base.name}/registry.ts`
        );
        const result = registrySchema.safeParse(baseRegistry);
        if (!result.success) {
          console.error(`❌ Registry validation failed for ${base.name}:`);
          console.error(result.error.format());
          throw new Error(`Invalid registry schema for ${base.name}`);
        }

        const registryItems = result.data.items.filter(
          (item) => item.type !== "registry:internal"
        );

        const sourceFilePaths = Array.from(
          new Set(
            registryItems.flatMap((item) =>
              normalizeRegistryFiles(item).map((file) => file.path)
            )
          )
        );

        const sourceFiles = new Map(
          await Promise.all(
            sourceFilePaths.map(
              async (filePath): Promise<readonly [string, string]> =>
                [
                  filePath,
                  await fs.readFile(
                    path.join(
                      process.cwd(),
                      `registry/bases/${base.name}/${filePath}`
                    ),
                    "utf8"
                  ),
                ] as const
            )
          )
        );

        return { base, baseRegistry, registryItems, sourceFiles };
      })
    ),
    Promise.all(
      STYLES.map(async (style) => {
        const styleContent = await fs.readFile(
          path.join(process.cwd(), `registry/styles/style-${style.name}.css`),
          "utf8"
        );
        return {
          style,
          styleHash: hashContent(styleContent),
          styleMap: createStyleMap(styleContent),
        };
      })
    ),
    getTransformCacheHash(),
  ]);

  const combinations: Array<{
    base: Base;
    style: (typeof STYLES)[number];
    baseRegistry: (typeof baseImports)[number]["baseRegistry"];
    registryItems: (typeof baseImports)[number]["registryItems"];
    sourceFiles: (typeof baseImports)[number]["sourceFiles"];
    styleHash: string;
    transformCacheHash: string;
    styleMap: Record<string, string>;
  }> = [];

  for (const {
    base,
    baseRegistry,
    registryItems,
    sourceFiles,
  } of baseImports) {
    for (const { style, styleHash, styleMap } of styleMaps) {
      const styleName = `${base.name}-${style.name}`;
      if (targetStyleNames && !targetStyleNames.has(styleName)) {
        continue;
      }

      combinations.push({
        base,
        style,
        baseRegistry,
        registryItems,
        sourceFiles,
        styleHash,
        transformCacheHash,
        styleMap,
      });
    }
  }

  await runWithConcurrency(
    combinations,
    STYLE_BUILD_CONCURRENCY,
    async ({
      base,
      style,
      baseRegistry,
      registryItems,
      sourceFiles,
      styleHash,
      transformCacheHash,
      styleMap,
    }) => {
      const styleName = `${base.name}-${style.name}`;
      const styleOutputDir = getTemporaryRegistryRoot(styleName);

      console.log(`   ✅ ${styleName}...`);

      await rimraf(styleOutputDir);
      await fs.mkdir(styleOutputDir, { recursive: true });

      const styleRegistry = { ...baseRegistry, items: registryItems };
      const registryTs = `export const registry = ${JSON.stringify(
        styleRegistry,
        null,
        2
      )}\n`;
      await fs.writeFile(path.join(styleOutputDir, "registry.ts"), registryTs);

      const filesToBuild = registryItems.flatMap((registryItem) =>
        normalizeRegistryFiles(registryItem)
      );

      await runWithConcurrency(
        filesToBuild,
        FILE_BUILD_CONCURRENCY,
        async (file) => {
          const source = sourceFiles.get(file.path);
          if (typeof source !== "string") {
            throw new Error(
              `Missing cached source for ${base.name}/${file.path}`
            );
          }

          const fileExtension = path.extname(file.path);
          const shouldTransform =
            fileExtension === ".tsx" || fileExtension === ".ts";

          const transformedContent = shouldTransform
            ? await getCachedStyledContent({
                styleName,
                baseName: base.name,
                filePath: file.path,
                source,
                styleHash,
                transformCacheHash,
                styleMap,
              })
            : source;

          const outputPath = path.join(styleOutputDir, file.path);
          await fs.mkdir(path.dirname(outputPath), { recursive: true });
          await fs.writeFile(outputPath, transformedContent);
        }
      );
    }
  );
}

*/

async function buildBases(bases: Base[], targetStyleNames?: Set<string>) {
  // Only process base/style combinations explicitly requested.
  const combinations = bases.flatMap((base) =>
    STYLES.filter((style) => {
      const styleName = `${base.name}-${style.name}`;
      return !targetStyleNames || targetStyleNames.has(styleName);
    }).map((style) => ({
      base,
      style,
      styleName: `${base.name}-${style.name}`,
    }))
  );

  await runWithConcurrency(
    combinations,
    STYLE_BUILD_CONCURRENCY,
    async ({ base, style, styleName }) => {
      const styleRegistryPath = `registry/bases/${base.name}/styles/${style.name}/registry.ts`;

      let importedRegistry: unknown;

      try {
        const { registry } = await import(`../${styleRegistryPath}`);

        importedRegistry = registry;
      } catch (error) {
        // This base/style combination may not be implemented.
        if (
          error instanceof Error &&
          (error.message.includes("Cannot find module") ||
            error.message.includes("Failed to resolve") ||
            error.message.includes("ERR_MODULE_NOT_FOUND"))
        ) {
          console.log(`   ⏭️  ${styleName} (no style registry)`);
          return;
        }

        throw error;
      }

      const parseResult = registrySchema.safeParse(importedRegistry);

      if (!parseResult.success) {
        console.error(
          `❌ Registry validation failed for ${base.name}/${style.name}:`
        );
        console.error(parseResult.error.format());

        throw new Error(
          `Invalid registry schema for ${base.name}/${style.name}`
        );
      }

      const registry = parseResult.data;

      const registryItems = registry.items.filter(
        (item) => item.type !== "registry:internal"
      );

      // Read files from the style-specific directory. The paths in the
      // registry should be relative to registry/bases/<base>/styles/<style>.
      const styleSourceRoot = path.join(
        process.cwd(),
        "registry",
        "bases",
        base.name,
        "styles",
        style.name
      );

      const filesToBuild = registryItems.flatMap((item) =>
        normalizeRegistryFiles(item)
      );

      const sourceFilePaths = Array.from(
        new Set(filesToBuild.map((file) => file.path))
      );

      const sourceFiles = new Map(
        await Promise.all(
          sourceFilePaths.map(
            async (filePath): Promise<readonly [string, string]> => {
              const normalizedPath = filePath.replace(
                `registry/bases/${base.name}/styles/${style.name}/`,
                ""
              );

              const absolutePath = path.join(styleSourceRoot, normalizedPath);

              return [
                filePath,
                await fs.readFile(absolutePath, "utf8"),
              ] as const;
            }
          )
        )
      );

      const styleOutputDir = getTemporaryRegistryRoot(styleName);

      console.log(`   ✅ ${styleName}...`);

      await rimraf(styleOutputDir);
      await fs.mkdir(styleOutputDir, { recursive: true });

      // Preserve the metadata from the style-specific registry.
      const styleRegistry = {
        ...registry,
        items: registryItems,
      };

      await fs.writeFile(
        path.join(styleOutputDir, "registry.ts"),
        `export const registry = ${JSON.stringify(styleRegistry, null, 2)}\n`
      );

      // Copy the already-implemented style-specific component files.
      // No CSS transformation is needed.
      await runWithConcurrency(
        filesToBuild,
        FILE_BUILD_CONCURRENCY,
        async (file) => {
          const source = sourceFiles.get(file.path);

          if (typeof source !== "string") {
            throw new Error(
              `Missing cached source for ${base.name}/${style.name}/${file.path}`
            );
          }

          const normalizedPath = file.path.replace(
            `registry/bases/${base.name}/styles/${style.name}/`,
            ""
          );

          const outputPath = path.join(styleOutputDir, normalizedPath);

          await fs.mkdir(path.dirname(outputPath), {
            recursive: true,
          });

          await fs.writeFile(outputPath, source);
        }
      );
    }
  );
}

async function buildExamplesIndex() {
  const examplesDir = path.join(process.cwd(), "examples");

  const baseResults = await Promise.all(
    Array.from(BASES).map(async (base) => {
      const baseDir = path.join(examplesDir, base.name);

      try {
        await fs.access(baseDir);
      } catch {
        console.log(`   Skipping ${base.name} - directory does not exist`);
        return null;
      }

      const files = await collectExampleFiles(baseDir);

      console.log(`   Found ${files.length} demos for ${base.name}`);

      return { baseName: base.name, files };
    })
  );

  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.mts
// Do not edit this file directly.
import "server-only"

export const ExamplesIndex: Record<string, Record<string, any>> = {`;

  const componentShards: ComponentShard[] = [];

  for (const result of baseResults) {
    if (!result) continue;

    const { baseName, files } = result;

    index += `
  "${baseName}": {`;
    const shard: ComponentShard = { key: baseName, entries: "", names: [] };

    for (const file of files) {
      const name = file.replace(/\.tsx$/, "");

      index += `
    "${name}": {
      name: "${name}",
      filePath: "examples/${baseName}/${file}",
    },`;

      shard.entries += `
  "${name}": ${lazyComponentExpression(
    `@/examples/${baseName}/${stripFileExtension(file)}`,
    name
  )},`;
      shard.names.push(name);
    }

    index += `
  },`;
    componentShards.push(shard);
  }

  index += `
}
`;

  const outputPath = path.join(examplesDir, "__index__.tsx");
  await writeIfChanged(
    outputPath,
    await formatGeneratedSource(index, outputPath)
  );

  await writeComponentShards(
    path.join(examplesDir, "__components__"),
    componentShards
  );
}

async function collectExampleFiles(
  dirPath: string,
  rootDir = dirPath
): Promise<string[]> {
  const entries = await readDirectoryEntries(dirPath);
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        return collectExampleFiles(entryPath, rootDir);
      }

      if (!entry.isFile() || !entry.name.endsWith(".tsx")) {
        return [];
      }

      return [toPosixPath(path.relative(rootDir, entryPath))];
    })
  );

  return files.flat().sort((a, b) => a.localeCompare(b));
}

async function buildRegistryIndex(styles: { name: string; title: string }[]) {
  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import "server-only"

export const Index: Record<string, Record<string, any>> = {`;

  const componentShards: ComponentShard[] = [];

  for (const style of styles) {
    const styleCombination = getStyleCombination(style.name);
    const { registry: importedRegistry } = styleCombination
      ? await import(
          `../registry/bases/${styleCombination.base.name}/registry.ts`
        )
      : await import(`../registry/${style.name}/registry.ts`);

    const parseResult = registrySchema.safeParse(importedRegistry);
    if (!parseResult.success) {
      console.error(`❌ Registry validation failed for ${style.name}:`);
      console.error(parseResult.error.format());
      throw new Error(`Invalid registry schema for ${style.name}`);
    }

    const registry = parseResult.data;

    index += `
  "${style.name}": {`;
    const shard: ComponentShard = { key: style.name, entries: "", names: [] };

    for (const item of registry.items) {
      if (item.type === "registry:internal") {
        continue;
      }

      if (styleCombination && !shouldIncludeStyledRegistryItem(item)) {
        continue;
      }

      const files = normalizeRegistryFiles(item);

      if (files.length === 0) {
        continue;
      }

      const resolvedFiles = styleCombination
        ? files.map((file) => ({
            ...file,
            path: isStyledOutputFile(file.path)
              ? `styles/${style.name}/${file.path}`
              : `registry/bases/${styleCombination.base.name}/${file.path}`,
          }))
        : files.map((file) => ({
            ...file,
            path: `registry/${style.name}/${file.path}`,
          }));

      const componentPath = files[0]?.path
        ? styleCombination
          ? isStyledOutputFile(files[0].path)
            ? `@/styles/${style.name}/${stripFileExtension(files[0].path)}`
            : `@/registry/bases/${
                styleCombination.base.name
              }/${stripFileExtension(files[0].path)}`
          : `@/registry/${style.name}/${stripFileExtension(files[0].path)}`
        : "";

      index += `
    "${item.name}": {
      name: "${item.name}",
      title: "${item.title}",
      description: "${item.description ?? ""}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      files: [${resolvedFiles.map((file) => {
        return `{
        path: "${file.path}",
        type: "${file.type}",
        target: "${file.target ?? ""}"
      }`;
      })}],
      categories: ${JSON.stringify(item.categories)},
      meta: ${JSON.stringify(item.meta)},
    },`;

      if (componentPath) {
        shard.entries += `
  "${item.name}": ${lazyComponentExpression(componentPath, item.name)},`;
        shard.names.push(item.name);
      }
    }

    index += `
  },`;
    componentShards.push(shard);
  }

  index += `
}`;

  const outputPath = path.join(process.cwd(), "registry/__index__.tsx");
  await writeIfChanged(
    outputPath,
    await formatGeneratedSource(index, outputPath)
  );

  await writeComponentShards(
    path.join(process.cwd(), "registry/__components__"),
    componentShards
  );
}

/*
async function buildRegistryJsonFile(styleName: string) {
  const { registry: importedRegistry } = await import(
    `../registry/${styleName}/registry.ts`
  );

  const parseResult = registrySchema.safeParse(importedRegistry);
  if (!parseResult.success) {
    console.error(`❌ Registry validation failed for ${styleName}:`);
    console.error(parseResult.error.format());
    throw new Error(`Invalid registry schema for ${styleName}`);
  }

  const registry = parseResult.data;

  // Legacy source styles (e.g. new-york-v4) don't author font items. Inject
  // the shared registry fonts so the shadcn CLI emits font-*.json for them,
  // matching the generated base/style combinations (which spread the same
  // fonts in their base registries). Font items have no files, so they pass
  // through every transform stage untouched.
  const registryItems = getStyleCombination(styleName)
    ? registry.items
    : [
        ...registry.items,
        ...fonts.filter(
          (font) => !registry.items.some((item) => item.name === font.name)
        ),
      ];

  const fixedRegistry = {
    ...registry,
    items: await Promise.all(
      registryItems.map(async (item) => {
        const files = normalizeRegistryFiles(item).map((file) => ({
          ...file,
          path: `registry/${styleName}/${file.path}`,
        }));
        if (files.length === 0) {
          return item;
        }
        const dependencies = await getItemDependencies(item, files);
        return { ...item, files, ...(dependencies && { dependencies }) };
      })
    ),
  };

  const outputDir = path.join(process.cwd(), `public/r/styles/${styleName}`);
  await rimraf(outputDir);
  await fs.mkdir(outputDir, { recursive: true });

  const registryJsonPath = path.join(outputDir, "registry.json");
  const fixedRegistryJson = await formatGeneratedJson(
    fixedRegistry,
    registryJsonPath
  );
  await writeIfChanged(registryJsonPath, fixedRegistryJson);

  const tempRegistryPath = path.join(
    process.cwd(),
    `registry-${styleName}.json`
  );
  await fs.writeFile(tempRegistryPath, fixedRegistryJson);
}
*/

// async function buildRegistryJsonFile(styleName: string) {
//   const styleCombination = getStyleCombination(styleName);

//   let importedRegistry: unknown;
//   // let registryRoot: string;
//   const registryRoot = getRegistryRoot(styleName);

//   if (styleCombination) {
//     const { base, style } = styleCombination;

//     // registryRoot = `registry/bases/${base.name}/styles/${style.name}`;

//     const { registry } = await import(`../${registryRoot}/registry.ts`);

//     importedRegistry = registry;
//   } else {
//     // registryRoot = `registry/${styleName}`;

//     const { registry } = await import(`../${registryRoot}/registry.ts`);

//     importedRegistry = registry;
//   }

//   const parseResult = registrySchema.safeParse(importedRegistry);

//   if (!parseResult.success) {
//     console.error(`❌ Registry validation failed for ${styleName}:`);
//     console.error(parseResult.error.format());

//     throw new Error(`Invalid registry schema for ${styleName}`);
//   }

//   const registry = parseResult.data;

//   // Legacy registries don't author font items. Inject shared fonts so
//   // the shadcn CLI generates font-*.json for those registries as well.
//   const registryItems = styleCombination
//     ? registry.items
//     : [
//         ...registry.items,
//         ...fonts.filter(
//           (font) => !registry.items.some((item) => item.name === font.name)
//         ),
//       ];

//   const fixedRegistry = {
//     ...registry,
//     items: await Promise.all(
//       registryItems.map(async (item) => {
//         const files = normalizeRegistryFiles(item).map((file) => {
//           const relativePath = file.path.replace(`${registryRoot}/`, "");

//           return {
//             ...file,
//             path: `${registryRoot}/${relativePath}`,
//           };
//         });

//         if (files.length === 0) {
//           return item;
//         }

//         const dependencies = await getItemDependencies(item, files);

//         return {
//           ...item,
//           files,
//           ...(dependencies && { dependencies }),
//         };
//       })
//     ),
//   };

//   const outputDir = path.join(process.cwd(), `public/r/styles/${styleName}`);

//   await rimraf(outputDir);
//   await fs.mkdir(outputDir, { recursive: true });

//   const registryJsonPath = path.join(outputDir, "registry.json");

//   const fixedRegistryJson = await formatGeneratedJson(
//     fixedRegistry,
//     registryJsonPath
//   );

//   await writeIfChanged(registryJsonPath, fixedRegistryJson);

//   const tempRegistryPath = path.join(
//     process.cwd(),
//     `registry-${styleName}.json`
//   );

//   await fs.writeFile(tempRegistryPath, fixedRegistryJson);
// }

async function buildRegistryJsonFile(styleName: string) {
  const registryRoot = getRegistryRoot(styleName);
  const styleCombination = getStyleCombination(styleName);
  const registryBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://shadcnmarketplace.com"
      : "http://localhost:3000";

  const { registry: importedRegistry } = await import(
    `../${registryRoot}/registry.ts`
  );

  const parseResult = registrySchema.safeParse(importedRegistry);

  if (!parseResult.success) {
    console.error(`❌ Registry validation failed for ${styleName}:`);

    console.error(parseResult.error.format());

    throw new Error(`Invalid registry schema for ${styleName}`);
  }

  const registry = parseResult.data;

  // Legacy registries don't author font items. Inject shared fonts
  // so those registries continue to expose font items.
  const registryItems = getStyleCombination(styleName)
    ? registry.items
    : [
        ...registry.items,
        ...fonts.filter(
          (font) => !registry.items.some((item) => item.name === font.name)
        ),
      ];

  const styleNameForPrefix = styleCombination
    ? styleCombination.style.name
    : styleName;

  // const stylePrefix = getStyleVariablesPrefix(styleNameForPrefix as Style);

  // const stylePrefix = getStyleVariablesPrefix(
  //   styleCombination ? styleCombination.style.name : styleName
  // );

  const stylePrefix = styleCombination
    ? getStyleVariablesPrefix(styleCombination.style.name)
    : getStyleVariablesPrefix(styleName);

  const fixedRegistry = {
    ...registry,

    items: await Promise.all(
      registryItems.map(async (item) => {
        const normalizedFiles = normalizeRegistryFiles(item).map((file) => ({
          ...file,
          path: normalizeRegistryFilePath(file.path, registryRoot),
        }));

        if (normalizedFiles.length === 0) {
          return item;
        }

        const dependencies = await getItemDependencies(item, normalizedFiles);

        const files = await Promise.all(
          normalizedFiles.map(async (file) => {
            const sourcePath = path.join(process.cwd(), file.path);

            let content: string;

            try {
              content = await fs.readFile(sourcePath, "utf8");
            } catch (error) {
              throw new Error(
                `Failed to read registry source file "${file.path}" ` +
                  `for item "${item.name}" in "${styleName}".`,
                { cause: error }
              );
            }

            return {
              ...file,
              content: transformRegistryContent(content, stylePrefix),
            };
          })
        );

        return {
          ...item,
          files,
          ...(dependencies && { dependencies }),
        };
      })
    ),
  };

  // const fixedRegistry = {
  //   ...registry,

  //   items: await Promise.all(
  //     registryItems.map(async (item) => {
  //       // const files = normalizeRegistryFiles(item).map((file) => {
  //       //   const normalizedPath = normalizeRegistryFilePath(
  //       //     file.path,
  //       //     registryRoot
  //       //   );

  //       //   return {
  //       //     ...file,

  //       //     // Preserve the source registry path so the CLI can locate
  //       //     // the file when it installs the component.
  //       //     path: normalizedPath,

  //       //     // Transform only the content included in the public registry.
  //       //     content:
  //       //       typeof file.content === "string"
  //       //         ? transformRegistryContent(file.content, stylePrefix)
  //       //         : file.content,
  //       //   };
  //       // });

  //       const files = normalizeRegistryFiles(item).map((file) => ({
  //         ...file,
  //         path: normalizeRegistryFilePath(file.path, registryRoot),
  //       }));

  //       if (files.length === 0) {
  //         return item;
  //       }

  //       const dependencies = await getItemDependencies(item, files);

  //       return {
  //         ...item,
  //         files,
  //         ...(dependencies && { dependencies }),
  //       };
  //     })
  //   ),
  // };

  // const fixedRegistry = {
  //   ...registry,

  //   items: await Promise.all(
  //     registryItems.map(async (item) => {
  //       const files = normalizeRegistryFiles(item).map((file) => ({
  //         ...file,

  //         path: normalizeRegistryFilePath(file.path, registryRoot),
  //       }));

  //       if (files.length === 0) {
  //         return item;
  //       }

  //       const dependencies = await getItemDependencies(item, files);

  //       return {
  //         ...item,
  //         files,
  //         ...(dependencies && { dependencies }),
  //       };
  //     })
  //   ),
  // };

  const outputDir = path.join(
    process.cwd(),
    "public",
    "r",
    "styles",
    styleName
  );

  await fs.mkdir(outputDir, {
    recursive: true,
  });

  const registryJsonPath = path.join(outputDir, "registry.json");

  const fixedRegistryJson = await formatGeneratedJson(
    fixedRegistry,
    registryJsonPath
  );

  await writeIfChanged(registryJsonPath, fixedRegistryJson);

  const tempRegistryPath = path.join(
    process.cwd(),
    `registry-${styleName}.json`
  );

  await fs.writeFile(tempRegistryPath, fixedRegistryJson);
}

// ----------------------------------------------------------------------------
// Build public/r/styles/[styleName]/[itemName].json.
// ----------------------------------------------------------------------------
// async function buildStyleComponentJsonFiles(
//   styleName: string,
//   registryRoot: string,
//   registry: Awaited<ReturnType<typeof registrySchema.parse>>
// ) {
//   const outputDir = path.join(
//     process.cwd(),
//     "public",
//     "r",
//     "styles",
//     styleName
//   );

//   await fs.mkdir(outputDir, { recursive: true });

//   const registryItems = registry.items.filter(
//     (item) =>
//       item.type !== "registry:internal" &&
//       item.name !== "index" &&
//       item.name !== "style"
//   );

//   await runWithConcurrency(
//     registryItems,
//     FILE_BUILD_CONCURRENCY,
//     async (item) => {
//       const normalizedFiles = normalizeRegistryFiles(item);

//       const files = await Promise.all(
//         normalizedFiles.map(async (file) => {
//           const normalizedPath = normalizeRegistryFilePath(
//             file.path,
//             registryRoot
//           );

//           const absolutePath = path.resolve(process.cwd(), normalizedPath);

//           const sourceRoot = path.resolve(process.cwd(), registryRoot);

//           // Prevent registry paths from escaping their source directory.
//           if (
//             absolutePath !== sourceRoot &&
//             !absolutePath.startsWith(`${sourceRoot}${path.sep}`)
//           ) {
//             throw new Error(
//               `Registry file escapes source directory: ${file.path}`
//             );
//           }

//           let content: string;

//           try {
//             content = await fs.readFile(absolutePath, "utf8");
//           } catch (error) {
//             throw new Error(
//               `Failed to read source file for ${styleName}/${item.name}: ${normalizedPath}`,
//               { cause: error }
//             );
//           }

//           // Keep paths relative to the base/style registry root.
//           const publicPath = path.relative(registryRoot, normalizedPath);

//           return {
//             path: publicPath.split(path.sep).join("/"),
//             type: file.type,
//             content,
//             target: file.target ?? "",
//           };
//         })
//       );

//       const filesWithDependencies = files.length
//         ? await getItemDependencies(
//             item,
//             files.map((file) => ({
//               ...file,
//               path: normalizeRegistryFilePath(file.path, registryRoot),
//             }))
//           )
//         : undefined;

//       const payload = {
//         $schema: "https://ui.shadcn.com/schema/registry-item.json",
//         author: "shadcn marketplace (https://shadcnmarketplace.com)",
//         ...item,
//         files,
//         ...(filesWithDependencies && {
//           dependencies: filesWithDependencies,
//         }),
//       };

//       const result = registryItemSchema.safeParse(payload);

//       if (!result.success) {
//         console.error(`❌ Invalid registry item ${styleName}/${item.name}:`);
//         console.error(result.error.format());

//         throw new Error(
//           `Registry item validation failed: ${styleName}/${item.name}`
//         );
//       }

//       const outputPath = path.join(outputDir, `${item.name}.json`);

//       await writeIfChanged(
//         outputPath,
//         await formatGeneratedJson(result.data, outputPath)
//       );
//     }
//   );
// }

// async function buildStyleComponentJsonFiles(styleName: string) {
//   const registryRoot = getRegistryRoot(styleName);

//   const { registry: importedRegistry } = await import(
//     `../${registryRoot}/registry.ts`
//   );

//   const parseResult = registrySchema.safeParse(importedRegistry);

//   if (!parseResult.success) {
//     console.error(`❌ Registry validation failed for ${styleName}:`);

//     console.error(parseResult.error.format());

//     throw new Error(`Invalid registry schema for ${styleName}`);
//   }

//   const registry = parseResult.data;

//   const outputDir = path.join(
//     process.cwd(),
//     "public",
//     "r",
//     "styles",
//     styleName
//   );

//   await fs.mkdir(outputDir, {
//     recursive: true,
//   });

//   // Skip the style metadata items because index.json is generated
//   // separately and registry.json already contains the full registry.
//   const items = registry.items.filter(
//     (item) =>
//       item.type !== "registry:internal" &&
//       item.type !== "registry:theme" &&
//       item.type !== "registry:style" &&
//       item.name !== "index" &&
//       item.name !== "style"
//   );

//   await runWithConcurrency(items, FILE_BUILD_CONCURRENCY, async (item) => {
//     const normalizedFiles = normalizeRegistryFiles(item).map((file) => ({
//       ...file,

//       path: normalizeRegistryFilePath(file.path, registryRoot),
//     }));

//     const dependencies = await getItemDependencies(item, normalizedFiles);

//     const files = await Promise.all(
//       normalizedFiles.map(async (file) => {
//         const sourcePath = path.join(process.cwd(), file.path);

//         let content: string;

//         try {
//           content = await fs.readFile(sourcePath, "utf8");
//         } catch (error) {
//           throw new Error(
//             `Failed to read registry source file "${file.path}" ` +
//               `for item "${item.name}" in "${styleName}".`,
//             { cause: error }
//           );
//         }

//         // Keep public paths relative to the registry root.
//         const relativePath = path.posix.relative(registryRoot, file.path);

//         return {
//           path: relativePath,
//           content,
//           type: file.type,
//           target: file.target ?? "",
//         };
//       })
//     );

//     const payload = {
//       $schema: "https://ui.shadcn.com/schema/registry-item.json",

//       author: "shadcn marketplace (https://shadcnmarketplace.com)",

//       ...item,

//       ...(dependencies && { dependencies }),

//       files,
//     };

//     const outputPath = path.join(outputDir, `${item.name}.json`);

//     const formatted = await formatGeneratedJson(payload, outputPath);

//     await writeIfChanged(outputPath, formatted);
//   });
// }

async function buildStyleComponentJsonFiles(styleName: string) {
  const registryRoot = getRegistryRoot(styleName);
  const styleCombination = getStyleCombination(styleName);

  const { registry: importedRegistry } = await import(
    `../${registryRoot}/registry.ts`
  );

  const parseResult = registrySchema.safeParse(importedRegistry);

  if (!parseResult.success) {
    console.error(`❌ Registry validation failed for ${styleName}:`);
    console.error(parseResult.error.format());

    throw new Error(`Invalid registry schema for ${styleName}`);
  }

  const registry = parseResult.data;

  const stylePrefix = getStyleVariablesPrefix(
    (styleCombination?.style.name ?? styleName) as Style["name"]
  );

  const outputDir = path.join(
    process.cwd(),
    "public",
    "r",
    "styles",
    styleName
  );

  await fs.mkdir(outputDir, {
    recursive: true,
  });

  // These items are represented by index.json or registry.json.
  // They should not be generated as individual component files.
  const items = registry.items.filter(
    (item) =>
      item.type !== "registry:internal" &&
      item.type !== "registry:theme" &&
      item.type !== "registry:style" &&
      item.name !== "index" &&
      item.name !== "style"
  );

  await runWithConcurrency(items, FILE_BUILD_CONCURRENCY, async (item) => {
    const normalizedFiles = normalizeRegistryFiles(item).map((file) => ({
      ...file,
      path: normalizeRegistryFilePath(file.path, registryRoot),
    }));

    const dependencies = await getItemDependencies(item, normalizedFiles);

    const files = await Promise.all(
      normalizedFiles.map(async (file) => {
        const sourcePath = path.join(process.cwd(), file.path);

        let content: string;

        try {
          content = await fs.readFile(sourcePath, "utf8");
        } catch (error) {
          throw new Error(
            `Failed to read registry source file "${file.path}" ` +
              `for item "${item.name}" in "${styleName}".`,
            { cause: error }
          );
        }

        // Transform only the content exposed by the public registry.
        // The original registry source remains unchanged.
        content = transformRegistryContent(content, stylePrefix);

        // Keep paths relative to the registry root.
        const relativePath = path.posix.relative(
          registryRoot.replaceAll("\\", "/"),
          file.path.replaceAll("\\", "/")
        );

        return {
          path: relativePath,
          content,
          type: file.type,
          target: file.target ?? "",
        };
      })
    );

    const payload = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      author: "shadcn marketplace (https://shadcnmarketplace.com)",
      ...item,
      ...(dependencies && { dependencies }),
      files,
    };

    const outputPath = path.join(outputDir, `${item.name}.json`);

    const formatted = await formatGeneratedJson(payload, outputPath);

    await writeIfChanged(outputPath, formatted);
  });
}

// ----------------------------------------------------------------------------
// Build public/r/styles/[styleName]/index.json.
// ----------------------------------------------------------------------------
async function buildStyleIndexJson(
  styleName: string,
  registry: Awaited<ReturnType<typeof registrySchema.parse>>,
  siteRegistryUrl: string
) {
  const outputDir = path.join(
    process.cwd(),
    "public",
    "r",
    "styles",
    styleName
  );

  await fs.mkdir(outputDir, { recursive: true });

  // The "style" item contains the common CSS, dependencies,
  // devDependencies, and other style installation metadata.
  const styleItem = registry.items.find((item) => item.name === "style");

  if (!styleItem) {
    throw new Error(`Missing "style" item in registry: ${styleName}`);
  }

  // Match the old behavior: the style index depends on its UI
  // components, not every example, hook, or internal registry item.
  const uiItems = registry.items.filter(
    (item) =>
      item.type === "registry:ui" &&
      item.name !== "index" &&
      item.name !== "style"
  );

  const registryDependencies = [
    ...(styleItem.registryDependencies ?? []),
    ...uiItems.map(
      (item) =>
        `${siteRegistryUrl.replace(/\/$/, "")}/r/styles/${styleName}/${item.name}.json`
    ),
  ];

  const payload = {
    ...styleItem,
    name: styleName,
    type: "registry:style" as const,
    registryDependencies: [...new Set(registryDependencies)],
    files: [],
  };

  const result = registryItemSchema.safeParse(payload);

  if (!result.success) {
    console.error(`❌ Invalid style index for ${styleName}:`);
    console.error(result.error.format());

    throw new Error(`Style index validation failed: ${styleName}`);
  }

  const outputPath = path.join(outputDir, "index.json");

  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(result.data, outputPath)
  );
}

// ----------------------------------------------------------------------------
// Build the legacy-compatible public files for a base/style combination.
// Keeps registry.json and additionally generates index.json and item JSONs.
// ----------------------------------------------------------------------------
async function buildStylePublicRegistry(
  styleName: string,
  siteRegistryUrl: string
) {
  const registryRoot = getRegistryRoot(styleName);

  const { registry: importedRegistry } = await import(
    `../${registryRoot}/registry.ts`
  );

  const parseResult = registrySchema.safeParse(importedRegistry);

  if (!parseResult.success) {
    console.error(`❌ Registry validation failed for ${styleName}:`);
    console.error(parseResult.error.format());

    throw new Error(`Invalid registry schema for ${styleName}`);
  }

  const registry = parseResult.data;

  await buildStyleComponentJsonFiles(styleName);

  await buildStyleIndexJson(styleName, registry, siteRegistryUrl);
}

// // Components import cn directly, so every item that uses it declares the
// // package. Projects initialized before cn existed rely on this to install it.
// async function getItemDependencies(
//   item: RegistryItem,
//   files: Array<{ path: string }>
// ) {
//   const dependencies = item.dependencies ?? [];
//   if (dependencies.includes("cn")) {
//     return dependencies;
//   }

//   for (const file of files) {
//     const content = await readFileIfExists(path.join(process.cwd(), file.path));
//     if (content && /from ["']cn["']/.test(content)) {
//       return ["cn", ...dependencies];
//     }
//   }

//   return item.dependencies;
// }

async function buildRegistry(styleName: string) {
  const outputPath = `public/r/styles/${styleName}`;
  const registryPath = `registry-${styleName}.json`;

  await new Promise<void>((resolve, reject) => {
    const proc = spawn(
      "node",
      [
        "../../packages/shadcn/dist/index.js",
        "build",
        registryPath,
        "--output",
        outputPath,
      ],
      { cwd: process.cwd(), stdio: "pipe" }
    );
    let stderr = "";
    proc.stderr?.on("data", (data) => (stderr += data));
    proc.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Process exited with code ${code}: ${stderr}`));
      } else {
        resolve();
      }
    });
    proc.on("error", reject);
  });
}

// Components that import cn directly must declare it as a dependency.
// Older projects may rely on this declaration to install cn.
// async function getItemDependencies(
//   item: RegistryItem,
//   files: Array<{ path: string }>
// ) {
//   const dependencies = item.dependencies ?? [];

//   if (dependencies.includes("cn")) {
//     return dependencies;
//   }

//   for (const file of files) {
//     const content = await readFileIfExists(path.join(process.cwd(), file.path));

//     if (content && /\bfrom\s+["']cn["']/.test(content)) {
//       return ["cn", ...dependencies];
//     }
//   }

//   return item.dependencies;
// }

async function getItemDependencies(
  item: RegistryItem,
  files: Array<{
    path: string;
    content?: string;
  }>
) {
  const dependencies = item.dependencies ?? [];

  if (dependencies.includes("cn")) {
    return dependencies;
  }

  for (const file of files) {
    const content =
      typeof file.content === "string"
        ? file.content
        : await readFileIfExists(path.join(process.cwd(), file.path));

    if (content && /from ["']cn["']/.test(content)) {
      return ["cn", ...dependencies];
    }
  }

  return item.dependencies;
}

async function buildBlocksIndex() {
  // Read blocks straight from the authored base registries. Blocks
  // (registry:block) only live there; the generated registry/__index__ adds
  // nothing but registry:ui items, and importing it would pull in its
  // `import "server-only"` guard, which throws outside an RSC graph.
  const blocks = new Map<
    string,
    { name: string; description?: string; categories?: string[] }
  >();

  for (const base of BASES) {
    const { registry: baseRegistry } = await import(
      `../registry/bases/${base.name}/registry.ts`
    );

    const parseResult = registrySchema.safeParse(baseRegistry);
    if (!parseResult.success) {
      console.error(`❌ Registry validation failed for ${base.name}:`);
      console.error(parseResult.error.format());
      throw new Error(`Invalid registry schema for ${base.name}`);
    }

    for (const item of parseResult.data.items) {
      if (item.type !== "registry:block" || item.name.startsWith("chart-")) {
        continue;
      }

      blocks.set(item.name, {
        name: item.name,
        description: item.description,
        categories: item.categories,
      });
    }
  }

  const payload = Array.from(blocks.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const blocksJsonPath = path.join(process.cwd(), "registry/__blocks__.json");
  await writeIfChanged(
    blocksJsonPath,
    await formatGeneratedJson(payload, blocksJsonPath)
  );
}

async function cleanUpTemporaryFiles(styleNames: string[]) {
  const cleanupTasks: Promise<boolean>[] = [];

  for (const styleName of styleNames) {
    cleanupTasks.push(
      rimraf(path.join(process.cwd(), `registry-${styleName}.json`))
    );

    // Only generated combinations have a temporary registry/<style> tree.
    // Legacy source styles (e.g. new-york-v4) own registry/<style> and must
    // never be removed.
    if (getStyleCombination(styleName)) {
      console.log(`   🗑️ registry/${styleName}`);
      cleanupTasks.push(rimraf(getTemporaryRegistryRoot(styleName)));
    }
  }

  await Promise.all(cleanupTasks);
}

async function buildConfig() {
  const config = { presets: PRESETS };
  const outputPath = path.join(process.cwd(), "public/r/config.json");
  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(config, outputPath)
  );
}

async function applyIconTransform(content: string, filename: string) {
  if (!content.includes("IconPlaceholder")) {
    return content;
  }

  const sourceFile = iconProject.createSourceFile(filename, content, {
    scriptKind: ScriptKind.TSX,
    overwrite: true,
  });

  type TransformIconsConfig = Parameters<typeof transformIcons>[0]["config"];
  type IconTransformInput = {
    filename: string;
    raw: string;
    sourceFile: typeof sourceFile;
    config: TransformIconsConfig;
  };
  const config = { iconLibrary: "lucide" } as TransformIconsConfig;

  await (transformIcons as (opts: IconTransformInput) => Promise<unknown>)({
    filename,
    raw: content,
    sourceFile,
    config,
  });

  return sourceFile.getText();
}

async function copyUIToStyles(targetStyleNames?: Set<string>) {
  const styleCombinations = targetStyleNames
    ? STYLE_COMBINATIONS.filter((style) => targetStyleNames.has(style.name))
    : STYLE_COMBINATIONS;

  await runWithConcurrency(
    styleCombinations,
    COPY_CONCURRENCY,
    async ({ name: styleName }) => {
      const sourceDir = path.join(getTemporaryRegistryRoot(styleName), "ui");
      const styleRoot = getPersistentStyleRoot(styleName);
      const targetDir = path.join(styleRoot, "ui");

      try {
        await fs.access(sourceDir);
      } catch {
        console.log(`   ⚠️ registry/${styleName}/ui not found, skipping`);
        return;
      }

      await syncDirectory({
        fromDir: sourceDir,
        toDir: targetDir,
        transformContent: async (content, filePath, targetPath) => {
          let nextContent = rewriteRegistryUiImportsToStyle(content, styleName);

          if (filePath.endsWith(".tsx")) {
            nextContent = await applyIconTransform(
              nextContent,
              path.basename(filePath)
            );
          }

          if (targetPath.endsWith(".ts") || targetPath.endsWith(".tsx")) {
            return formatGeneratedSource(nextContent, targetPath);
          }

          return nextContent;
        },
      });

      if (!shouldGenerateRtlStyles(styleName)) {
        await rimraf(path.join(styleRoot, "ui-rtl"));
      }

      console.log(`   ✅ registry/${styleName}/ui → styles/${styleName}/ui`);
    }
  );
}

async function buildRtlStyles(targetStyleNames?: Set<string>) {
  await runWithConcurrency(
    STYLE_COMBINATIONS.filter(
      (style) =>
        shouldGenerateRtlStyles(style.name) &&
        (!targetStyleNames || targetStyleNames.has(style.name))
    ),
    COPY_CONCURRENCY,
    async ({ name: styleName }) => {
      const sourceDir = path.join(getPersistentStyleRoot(styleName), "ui");
      const targetDir = path.join(getPersistentStyleRoot(styleName), "ui-rtl");

      try {
        await fs.access(sourceDir);
      } catch {
        console.log(`   ⚠️ styles/${styleName}/ui not found, skipping`);
        return;
      }

      await syncDirectory({
        fromDir: sourceDir,
        toDir: targetDir,
        transformContent: async (content, filePath, targetPath) => {
          if (!filePath.endsWith(".ts") && !filePath.endsWith(".tsx")) {
            return content;
          }

          return formatGeneratedSource(
            rewriteStyleDirectionImports(
              await transformDirection(content, true),
              styleName
            ),
            targetPath
          );
        },
      });

      console.log(`   ✅ styles/${styleName}/ui-rtl`);
    }
  );
}

/*
async function buildIndex() {
  const baseUiRegistries = await Promise.all(
    Array.from(BASES).map(async (base) => {
      const { ui } = await import(
        `../registry/bases/${base.name}/ui/_registry.ts`
      );
      return { baseName: base.name, items: ui as RegistryItem[] };
    })
  );

  type IndexItem = Omit<RegistryItem, "meta"> & {
    meta?: { links?: Record<string, RegistryItem["meta"]> };
  };

  const componentMap = new Map<string, IndexItem>();
  for (const { baseName, items } of baseUiRegistries) {
    for (const item of items) {
      if (!componentMap.has(item.name)) {
        const { meta, ...rest } = item;
        componentMap.set(item.name, {
          ...rest,
          ...(meta?.links
            ? { meta: { links: { [baseName]: meta.links } } }
            : {}),
        });
      } else if (item.meta?.links) {
        const existing = componentMap.get(item.name)!;
        existing.meta = existing.meta || {};
        existing.meta.links = existing.meta.links || {};
        existing.meta.links[baseName] = item.meta.links;
      }
    }
  }

  const index = Array.from(componentMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const outputPath = path.join(process.cwd(), "public/r/index.json");
  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(index, outputPath)
  );
}
*/

async function buildIndex() {
  const registryRoot = path.join(process.cwd(), "registry/bases");

  const registryGroups = await Promise.all(
    ["base", "styles"].map(async (group) => {
      const groupPath = path.join(registryRoot, group);

      const styles = await fs.readdir(groupPath, {
        withFileTypes: true,
      });

      return Promise.all(
        styles
          .filter((style) => style.isDirectory())
          .map(async (style) => {
            const registryPath = path.join(
              groupPath,
              style.name,
              "ui/_registry.ts"
            );

            const { ui } = await import(registryPath);

            return {
              baseName: group,
              styleName: style.name,
              items: ui as RegistryItem[],
            };
          })
      );
    })
  );

  type IndexItem = Omit<RegistryItem, "meta"> & {
    meta?: { links?: Record<string, RegistryItem["meta"]> };
  };

  const componentMap = new Map<string, IndexItem>();

  for (const registries of registryGroups) {
    for (const { baseName, styleName, items } of registries) {
      const registryKey = `${baseName}/${styleName}`;

      for (const item of items) {
        if (!componentMap.has(item.name)) {
          const { meta, ...rest } = item;

          componentMap.set(item.name, {
            ...rest,
            ...(meta?.links
              ? {
                  meta: {
                    links: {
                      [registryKey]: meta.links,
                    },
                  },
                }
              : {}),
          });
        } else if (item.meta?.links) {
          const existing = componentMap.get(item.name)!;

          existing.meta ??= {};
          existing.meta.links ??= {};
          existing.meta.links[registryKey] = item.meta.links;
        }
      }
    }
  }

  const index = Array.from(componentMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const outputPath = path.join(process.cwd(), "public/r/index.json");

  await writeIfChanged(
    outputPath,
    await formatGeneratedJson(index, outputPath)
  );
}

async function readDirectoryEntries(dirPath: string) {
  try {
    return await fs.readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function syncDirectory({
  fromDir,
  toDir,
  transformContent,
}: {
  fromDir: string;
  toDir: string;
  transformContent?: (
    content: string,
    filePath: string,
    targetPath: string
  ) => Promise<string>;
}): Promise<string[]> {
  await fs.mkdir(toDir, { recursive: true });

  const [sourceEntries, targetEntries] = await Promise.all([
    fs.readdir(fromDir, { withFileTypes: true }),
    readDirectoryEntries(toDir),
  ]);

  const targetEntriesByName = new Map(
    targetEntries.map((entry) => [entry.name, entry])
  );
  const sourceNames = new Set(sourceEntries.map((entry) => entry.name));

  await Promise.all(
    targetEntries.map(async (entry) => {
      if (!sourceNames.has(entry.name)) {
        await rimraf(path.join(toDir, entry.name));
      }
    })
  );

  const changedPaths: string[][] = await runWithConcurrency(
    sourceEntries,
    COPY_CONCURRENCY,
    async (entry) => {
      const sourcePath = path.join(fromDir, entry.name);
      const targetPath = path.join(toDir, entry.name);
      const existingTargetEntry = targetEntriesByName.get(entry.name);

      if (entry.isDirectory()) {
        if (existingTargetEntry && !existingTargetEntry.isDirectory()) {
          await rimraf(targetPath);
        }

        return await syncDirectory({
          fromDir: sourcePath,
          toDir: targetPath,
          transformContent,
        });
      }

      if (existingTargetEntry?.isDirectory()) {
        await rimraf(targetPath);
      }

      let content = await fs.readFile(sourcePath, "utf8");

      if (transformContent) {
        content = await transformContent(content, sourcePath, targetPath);
      }

      return (await writeIfChanged(targetPath, content)) ? [targetPath] : [];
    }
  );

  return changedPaths.flat();
}

function rewriteRegistryUiImportsToStyle(content: string, styleName: string) {
  return rewriteRegistryImportsToStyle(content, styleName);
}

function rewriteRegistryImportsToStyle(content: string, styleName: string) {
  return content
    .replaceAll(`@/registry/${styleName}/ui/`, `@/styles/${styleName}/ui/`)
    .replaceAll(`@/registry/${styleName}/lib/utils`, `@/lib/utils`)
    .replaceAll(
      `@/registry/${styleName}/hooks/use-mobile`,
      `@/hooks/use-mobile`
    )
    .replaceAll(`@/registry/${styleName}/lib/`, `@/lib/`)
    .replaceAll(`@/registry/${styleName}/hooks/`, `@/hooks/`);
}

function rewriteStyleDirectionImports(content: string, styleName: string) {
  return content.replaceAll(
    `@/styles/${styleName}/ui/`,
    `@/styles/${styleName}/ui-rtl/`
  );
}

async function buildColors() {
  const colorsTargetPath = path.join(process.cwd(), "public/r/colors");
  await fs.mkdir(colorsTargetPath, { recursive: true });

  await Promise.all(
    BASE_COLORS.map(async (baseColor) => {
      const light = (baseColor.cssVars?.light ?? {}) as Record<string, string>;
      const dark = (baseColor.cssVars?.dark ?? {}) as Record<string, string>;

      const cssVarKeys = Object.keys(light).filter(
        (key) => !key.startsWith("sidebar")
      );

      const rootVars = cssVarKeys
        .map((key) => `    --${key}: ${light[key]};`)
        .join("\n");
      const darkVars = cssVarKeys
        .filter((key) => dark[key])
        .map((key) => `    --${key}: ${dark[key]};`)
        .join("\n");

      const payload = {
        inlineColors: { light, dark },
        cssVars: { light, dark },
        cssVarsV4: baseColor.cssVars,
        inlineColorsTemplate:
          "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n  ",
        cssVarsTemplate: `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  :root {\n${rootVars}\n  }\n\n  .dark {\n${darkVars}\n  }\n}\n\n@layer base {\n  * {\n    @apply border-border;\n  }\n  body {\n    @apply bg-background text-foreground;\n  }\n}`,
      };

      const outputPath = path.join(colorsTargetPath, `${baseColor.name}.json`);
      await writeIfChanged(
        outputPath,
        await formatGeneratedJson(payload, outputPath)
      );
      console.log(`   ✅ ${baseColor.name}.json`);
    })
  );
}
