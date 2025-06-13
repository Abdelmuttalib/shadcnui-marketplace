import { existsSync, promises as fs, WriteFileOptions } from "fs";
import { tmpdir } from "os";
import path from "path";
import {
  Registry,
  registryItemSchema,
  registryItemTypeSchema,
  registrySchema,
} from "shadcn/registry";
import { Project, ScriptKind } from "ts-morph";
import { z } from "zod";

import { registry } from "../registry";
import { styles } from "../registry/registry-styles";
import { themePalettes } from "../registry/registry-themes";

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

// take theme palettes and generate the registry, for each theme palette, make a file with the name of the theme palette, in json format, ex "palette-1.json" under the theme folder in the public folder directory, and the file would be in this example format:
// {
//   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
//   "name": "custom-theme",
//   "type": "registry:theme",
//   "cssVars": {
//     "light": {
//       "background": "oklch(1 0 0)",
//       "foreground": "oklch(0.141 0.005 285.823)",
//       "primary": "oklch(0.546 0.245 262.881)",
//       "primary-foreground": "oklch(0.97 0.014 254.604)",
//       "ring": "oklch(0.746 0.16 232.661)",
//       "sidebar-primary": "oklch(0.546 0.245 262.881)",
//       "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
//       "sidebar-ring": "oklch(0.746 0.16 232.661)"
//     },
//     "dark": {
//       "background": "oklch(1 0 0)",
//       "foreground": "oklch(0.141 0.005 285.823)",
//       "primary": "oklch(0.707 0.165 254.624)",
//       "primary-foreground": "oklch(0.97 0.014 254.604)",
//       "ring": "oklch(0.707 0.165 254.624)",
//       "sidebar-primary": "oklch(0.707 0.165 254.624)",
//       "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
//       "sidebar-ring": "oklch(0.707 0.165 254.624)"
//     }
//   }
// }
//  so we will put the values from the theme palettes into cssVars, light and dark, and name the registry type with palette-1 for example, so the file name will be "palette-1.json",

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

function generatePalettesRegistry() {
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
              content: sourceFile.getText(),
              target,
            };
          })
        );
      }

      const payload = registryItemSchema.safeParse({
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        author: "shadcn (https://ui.shadcn.com)",
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

try {
  console.log("💽 Building registry...");
  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  // await syncStyles();
  // await buildRegistry(result.data);
  await buildStyles(result.data);
  // await buildStylesIndex();
  // await buildThemes();

  // await buildRegistryIcons();
  // await buildIcons();

  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
