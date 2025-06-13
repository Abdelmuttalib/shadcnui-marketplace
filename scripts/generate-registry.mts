import { existsSync, promises as fs, WriteFileOptions } from "fs";
import { tmpdir } from "os";
import path from "path";
import { rimraf } from "rimraf";
import {
  Registry,
  registryItemSchema,
  registryItemTypeSchema,
  registrySchema,
} from "shadcn/registry";
import { Project, ScriptKind } from "ts-morph";
import { z } from "zod";

import { registry } from "../registry/registry-core";
import { styles } from "../registry/registry-styles";
import { themePalettes } from "../registry/registry-themes";
import { registryCategories } from "@/registry/registry-categories";
import { BASE_SITE_URL } from "@/config/site-config";

const REGISTRY_PATH = path.join(process.cwd(), "public/r");

const REGISTRY_INDEX_WHITELIST: z.infer<typeof registryItemTypeSchema>[] = [
  "registry:ui",
  "registry:lib",
  "registry:hook",
  "registry:theme",
  "registry:block",
  "registry:example",
  "registry:internal",
];

const project = new Project({
  compilerOptions: {},
});

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}

enum RegistryType {
  Blocks = "blocks",
  Examples = "examples",
  Templates = "templates",
  Components = "components",
}

export enum BlockPlan {
  Free = "free",
  Basic = "basic",
  Pro = "pro",
}

export const initialExamplesRegistry = {
  "hero-sections": [
    {
      id: "hero-section-1",
      title: "Hero Section 1",
      description: "a simple and modern hero section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "hero-section-2",
      title: "Hero Section 2",
      description: "a simple and modern hero section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "hero-section-3",
      title: "Hero Section 3",
      description: "a simple and modern hero section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "hero-section-4",
      title: "Hero Section 4",
      description: "a simple and modern hero section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
  ],
  "blog-sections": [
    {
      id: "blog-section-1",
      title: "Blog Section 1",
      description: "a simple and modern blog section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "blog-section-2",
      title: "Blog Section 2",
      description: "a simple and modern blog section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "blog-section-3",
      title: "Blog Section 3",
      description: "a simple and modern blog section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "blog-section-4",
      title: "Blog Section 4",
      description: "a simple and modern blog section template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
  ],
  footers: [
    {
      id: "footer-1",
      title: "Footer 1",
      description: "a simple and modern footer template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "footer-2",
      title: "Footer 2",
      description: "a simple and modern footer template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
    {
      id: "footer-3",
      title: "Footer 3",
      description: "a simple and modern footer template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
  ],
  portfolios: [
    {
      id: "portfolio-1",
      title: "Portfolio 1",
      description: "a simple and modern portfolio template",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
  ],
  "landing-pages": [
    {
      id: "landing-page-1",
      title: "Landing Page 1",
      description: "Landing Page 1 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
    },
  ],
  features: [
    {
      id: "features-1",
      title: "Features 1",
      description: "Features 1 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-1`,
    },
    {
      id: "features-2",
      title: "Features 2",
      description: "Features 2 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-2`,
    },
    {
      id: "features-3",
      title: "Features 3",
      description: "Features 3 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/features-3`,
    },
    {
      id: "features-4",
      title: "Features 4",
      description: "Features 3 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${`${SOURCE_EXAMPLES_URL}/examples/features-3`}`,
    },
  ],

  pricings: [
    {
      id: "pricing-1",
      title: "Pricings 1",
      description: "Pricings 1 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
    {
      id: "pricing-2",
      title: "Pricings 2",
      description: "Pricings 2 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Basic,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
    {
      id: "pricing-3",
      title: "Pricings 3",
      description: "Pricings 3 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Pro,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
    {
      id: "pricing-4",
      title: "Pricings 4",
      description: "Pricings 4 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
    {
      id: "pricing-5",
      title: "Pricings 5",
      description: "Pricings 5 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
    {
      id: "pricing-6",
      title: "Pricings 6",
      description: "Pricings 6 description",
      registryType: RegistryType.Blocks,
      plan: BlockPlan.Free,
      // href: `${SOURCE_EXAMPLES_URL}/examples/pricings-1`,
    },
  ],
};

export type BlockCategory = keyof typeof initialExamplesRegistry;

const LOCAL_EXAMPLES_URL = "/block";
const SOURCE_EXAMPLES_URL = "https://shadcn-default.vercel.app";
const SOURCE_CODES_URL = "@/code";

function getCode(modulePath: string) {
  const fileContent = fs
    .readFile(modulePath, "utf-8")
    .then((content) =>
      content
        .toString()
        ?.replaceAll("@/registry/wedges/ui", "@/components/ui")
        .replaceAll("-wedges", "")
    );

  console.log("fileContent", fileContent);
  // return "";
  return fileContent;
}

export const blocksRegistry = Object.fromEntries(
  Object.entries(initialExamplesRegistry).map(([k, v]) => [
    k as BlockCategory, // Preserve the key
    v.map((e) => ({
      ...e,
      category: k,
      href: `${SOURCE_EXAMPLES_URL}/${e.registryType}/${k}/${e.id}`,
      localHref: `${LOCAL_EXAMPLES_URL}/${k}/${e.id}`,
      // code: getCode(`${LOCAL_EXAMPLES_URL}/${e.registryType}/${k}/${e.id}`),
      code: getCode(
        path.join(
          process.cwd(),
          "app",
          "(preview)",
          "block",
          k,
          e.id,
          "page.tsx"
        )
      ),
      codePath: `${SOURCE_CODES_URL}/${e.registryType}/${k}/${e.id}`,
      localCodePath: `${LOCAL_EXAMPLES_URL}/${k}/${e.id}/page.tsx`,
      fileName: "page.tsx",
      plan: e.plan,
    })),
  ])
);

// write a var to a file, config/data.ts

// write a function to generate the registry

const ROOT_PATH = path.join(process.cwd());
console.log("ROOT_PATH", blocksRegistry);

async function readFileContent(filePath: string) {
  const fileContent = await fs.readFile(filePath, "utf-8");
  return fileContent;
}

function writeFileContent(
  filePath: string,
  content: string,
  encoding: WriteFileOptions | undefined = "utf8"
) {
  fs.writeFile(filePath, content, encoding);
}

async function generateBlockRegistry() {
  console.log(blocksRegistry);

  const writeFilePath = path.join(
    process.cwd(),
    "config",
    "blocks-registry.ts"
  );

  const writeFileContentVar = `export const blocksRegistry = ${JSON.stringify(
    blocksRegistry,
    null,
    2
  )}`;

  writeFileContent(writeFilePath, writeFileContentVar);
}

// generateBlockRegistry();

enum RegistryItemType {
  block = "block",
  component = "component",
  style = "style",
  theme = "theme",
  ui = "ui",
}

function getRegistryItemType(registryItemType: RegistryItemType) {
  // verify the registry item type is valid
  if (!Object.values(RegistryItemType).includes(registryItemType)) {
    throw new Error(`Invalid registry item type: ${registryItemType}`);
  }

  return `registry:${registryItemType}`;
}

async function buildThemes() {
  // console.log(themePalettes);
  const themePalettesEntriesData = Object.entries(themePalettes);

  themePalettesEntriesData.forEach(([k, v]) => {
    const writeFilePath = path.join(
      process.cwd(),
      "public",
      "r",
      "theme",
      `${k}.json`
    );

    // if (fs.existsSync(writeFilePath)) {
    //   console.log(`Skipping ${k} theme palette, already exists.`);
    //   return;
    // }

    const [lightThemePaletteCssVars, darkThemePaletteCssVars] = [
      v.light,
      v.dark,
    ];

    const paletteRegistryData = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: k,
      type: getRegistryItemType(RegistryItemType.theme),
      cssVars: {
        light: lightThemePaletteCssVars,
        dark: darkThemePaletteCssVars,
      },
    };

    writeFileContent(
      writeFilePath,
      JSON.stringify(paletteRegistryData, null, 2),
      "utf8"
    );
  });
}

// generatePalettesRegistry();

// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
async function buildRegistry(registry: Registry) {
  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
`;

  for (const style of styles) {
    index += `  "${style.name}": {`;

    // Build style index.
    for (const item of registry.items) {
      const resolveFiles = item.files?.map(
        (file) =>
          `registry/${style.name}/${
            typeof file === "string" ? file : file.path
          }`
      );
      if (!resolveFiles) {
        continue;
      }

      // Validate categories.
      if (item.categories) {
        const invalidCategories = item.categories.filter(
          (category) => !registryCategories.some((c) => c.slug === category)
        );

        if (invalidCategories.length > 0) {
          console.error(
            `${item.name} has invalid categories: ${invalidCategories}`
          );
          process.exit(1);
        }
      }

      const type = item.type.split(":")[1];
      let sourceFilename = "";

      if (item.type === "registry:block") {
        const file = resolveFiles[0];
        const filename = path.basename(file);
        let raw: string;
        try {
          raw = await fs.readFile(file, "utf8");
        } catch (error) {
          continue;
        }
        const tempFile = await createTempSourceFile(filename);
        const sourceFile = project.createSourceFile(tempFile, raw, {
          scriptKind: ScriptKind.TSX,
        });

        // Find all imports.
        const imports = new Map<
          string,
          {
            module: string;
            text: string;
            isDefault?: boolean;
          }
        >();
        sourceFile.getImportDeclarations().forEach((node) => {
          const module = node.getModuleSpecifier().getLiteralValue();
          node.getNamedImports().forEach((item) => {
            imports.set(item.getText(), {
              module,
              text: node.getText(),
            });
          });

          const defaultImport = node.getDefaultImport();
          if (defaultImport) {
            imports.set(defaultImport.getText(), {
              module,
              text: defaultImport.getText(),
              isDefault: true,
            });
          }
        });

        // Write the source file for blocks only.
        sourceFilename = `__registry__/${style.name}/${type}/${item.name}.tsx`;

        if (item.files) {
          const files = item.files.map((file) =>
            typeof file === "string"
              ? { type: "registry:page", path: file }
              : file
          );
          if (files?.length) {
            sourceFilename = `__registry__/${style.name}/${files[0].path}`;
          }
        }

        const sourcePath = path.join(process.cwd(), sourceFilename);
        if (!existsSync(sourcePath)) {
          await fs.mkdir(sourcePath, { recursive: true });
        }

        rimraf.sync(sourcePath);
        await fs.writeFile(sourcePath, sourceFile.getText());
      }

      let componentPath = `@/registry/${style.name}/${type}/${item.name}`;

      if (item.files) {
        const files = item.files.map((file) =>
          typeof file === "string"
            ? { type: "registry:page", path: file }
            : file
        );
        if (files?.length) {
          componentPath = `@/registry/${style.name}/${files[0].path}`;
        }
      }

      index += `
    "${item.name}": {
      name: "${item.name}",
      description: "${item.description ?? ""}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      files: [${item.files?.map((file) => {
        const filePath = `registry/${style.name}/${
          typeof file === "string" ? file : file.path
        }`;
        const resolvedFilePath = path.resolve(filePath);
        return typeof file === "string"
          ? `"${resolvedFilePath}"`
          : `{
        path: "${filePath}",
        type: "${file.type}",
        target: "${file.target ?? ""}"
      }`;
      })}],
      categories: ${JSON.stringify(item.categories)},
      component: React.lazy(() => import("${componentPath}")),
      source: "${sourceFilename}",
      meta: ${JSON.stringify(item.meta)},
    },`;
    }

    index += `
  },`;
  }

  index += `
}
`;

  // ----------------------------------------------------------------------------
  // Build registry/index.json.
  // ----------------------------------------------------------------------------
  const items = registry.items
    .filter((item) => ["registry:ui"].includes(item.type))
    .map((item) => {
      return {
        ...item,
        files: item.files?.map((_file) => {
          const file =
            typeof _file === "string"
              ? {
                  path: _file,
                  type: item.type,
                }
              : _file;

          return file;
        }),
      };
    });
  const registryJson = JSON.stringify(items, null, 2);
  rimraf.sync(path.join(REGISTRY_PATH, "index.json"));
  await fs.writeFile(
    path.join(REGISTRY_PATH, "index.json"),
    registryJson,
    "utf8"
  );

  // Write style index.
  rimraf.sync(path.join(process.cwd(), "__registry__/index.tsx"));
  await fs.writeFile(path.join(process.cwd(), "__registry__/index.tsx"), index);
}

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  for (const style of styles) {
    const targetPath = path.join(REGISTRY_PATH, "styles", style.name);

    // Create directory if it doesn't exist.
    if (!existsSync(targetPath)) {
      await fs.mkdir(targetPath, { recursive: true });
    }

    for (const item of registry.items) {
      if (!REGISTRY_INDEX_WHITELIST.includes(item.type)) {
        continue;
      }

      if (item.type === "registry:theme") {
        continue;
      }

      let files;
      if (item.files) {
        files = await Promise.all(
          item.files.map(async (_file) => {
            const file =
              typeof _file === "string"
                ? {
                    path: _file,
                    type: item.type,
                    content: "",
                    target: "",
                  }
                : _file;

            let content: string;
            try {
              content = await fs.readFile(
                path.join(process.cwd(), "registry", style.name, file.path),
                "utf8"
              );

              // Only fix imports for v0- blocks.
              // if (item.name.startsWith("v0-")) {
              //   content = fixImport(content);
              // }
            } catch (error) {
              return;
            }

            const tempFile = await createTempSourceFile(file.path);
            const sourceFile = project.createSourceFile(tempFile, content, {
              scriptKind: ScriptKind.TSX,
            });

            sourceFile.getVariableDeclaration("iframeHeight")?.remove();
            sourceFile.getVariableDeclaration("containerClassName")?.remove();
            sourceFile.getVariableDeclaration("description")?.remove();

            let target = file.target || "";

            if ((!target || target === "") && item.name.startsWith("v0-")) {
              const fileName = file.path.split("/").pop();
              if (
                file.type === "registry:block" ||
                file.type === "registry:component" ||
                file.type === "registry:example"
              ) {
                target = `components/${fileName}`;
              }

              if (file.type === "registry:ui") {
                target = `components/ui/${fileName}`;
              }

              if (file.type === "registry:hook") {
                target = `hooks/${fileName}`;
              }

              if (file.type === "registry:lib") {
                target = `lib/${fileName}`;
              }
            }

            return {
              path: file.path,
              type: file.type,
              // content: sourceFile.getText().replaceAll("-cb", ""),
              content: sourceFile
                .getText()
                .replaceAll(
                  /-(dft|cb|catalyst|linear|material|spctm|wedges|moon|lucid|snow|neon|libelle)\b/g,
                  ""
                ),
              target,
            };
          })
        );
      }

      const payload = registryItemSchema.safeParse({
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        author: "shadcn marketplace (https://shadcnmarketplace.com)",
        ...item,
        files,
      });

      if (payload.success) {
        await fs.writeFile(
          path.join(targetPath, `${item.name}.json`),
          JSON.stringify(payload.data, null, 2),
          "utf8"
        );
      }
    }
  }

  // ----------------------------------------------------------------------------
  // Build registry/styles/index.json.
  // ----------------------------------------------------------------------------
  const stylesJson = JSON.stringify(styles, null, 2);
  await fs.writeFile(
    path.join(REGISTRY_PATH, "styles/index.json"),
    stylesJson,
    "utf8"
  );
}

// ----------------------------------------------------------------------------
// Build registry/styles/[name]/index.json.
// ----------------------------------------------------------------------------
async function buildStylesIndex(siteRegistryUrl: string) {
  for (const style of styles) {
    const targetPath = path.join(REGISTRY_PATH, "styles", style.name);
    const targetUIPath = path.join("registry", style.name, "ui");
    const styleFiles = await fs.readdir(targetUIPath).then((files) => {
      return files.map((file) => file.replace(/\.[^/.]+$/, ""));
      // get filename without extension
      // file = file.map((file) => file.replace(/\.[^/.]+$/, ""););
      // return file.replace(/\.[^/.]+$/, "");
    });
    // const styleFiles = await fs.readdir(targetPath).then((file) => file);
    // console.log("files", styleFiles);

    const payload: z.infer<typeof registryItemSchema> = {
      name: style.name,
      type: "registry:style",
      dependencies: [
        "tailwindcss-animate",
        "class-variance-authority",
        "lucide-react",
      ],
      registryDependencies: [
        "utils",
        ...styleFiles.map(
          (file) => `${siteRegistryUrl}/r/styles/${style.name}/${file}.json`
        ),
      ],
      tailwind: {
        config: {
          plugins: [`require("tailwindcss-animate")`],
        },
      },
      cssVars: {
        light: {
          radius: style.defaultRadius,
        },
      },
      files: [],
    };

    await fs.writeFile(
      path.join(targetPath, "index.json"),
      JSON.stringify(payload, null, 2),
      "utf8"
    );
  }
}

try {
  console.log("💽 Building registry...");
  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const envArg = args.find((arg) => arg.startsWith("--env="));
  const env = envArg ? envArg.split("=")[1] : "development";
  const isProd = env === "production";

  // await syncStyles();
  // await buildRegistry(result.data);
  await buildStyles(result.data);
  await buildStylesIndex(isProd ? BASE_SITE_URL : "http://localhost:3000");
  // await buildThemes();

  // await buildRegistryIcons();
  // await buildIcons();

  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
