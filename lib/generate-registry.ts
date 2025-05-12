import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";

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
    .readFileSync(modulePath, "utf-8")
    ?.replaceAll("@/registry/wedges/ui", "@/components/ui")
    .replaceAll("-wedges", "");

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
  const fileContent = await readFile(filePath, "utf-8");
  return fileContent;
}

function writeFileContent(filePath: string, content: string) {
  fs.writeFileSync(filePath, content);
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

generateBlockRegistry();
