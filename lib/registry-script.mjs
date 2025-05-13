import fs from "fs";

// generate registry json

// {
//   "name": "carbon",
//   "type": "registry:style",
//   "title": "Carbon Style",
//   "description": "IBM's Carbon Design System",
//   "dependencies": ["@radix-ui/react-checkbox"],
//   "registryDependencies": ["utils"],
//   "files": [
//     {
//       "path": "registry/carbon/ui/button.tsx",
//       "type": "registry:ui"
//     },
//     {
//       "path": "registry/carbon/ui/select.tsx",
//       "type": "registry:ui"
//     },
//     {
//       "path": "registry/carbon/ui/typography.tsx",
//       "type": "registry:ui"
//     },
//     {
//       "path": "registry/carbon/ui/checkbox.tsx",
//       "type": "registry:ui"
//     }
//   ],
//   "cssVars": {
//     "theme": {
//       "font-sans": "Inter, sans-serif"
//     },
//     "light": {
//       "background": "100% 0 0",
//       "foreground": "0 0 0"
//     },
//     "dark": {
//       "background": "100% 0 0",
//       "foreground": "0 0 0"
//     }
//   }
// }

// generate this json object for each directory (style) under registry/,
// this script file is under lib/registry-script.tsx, and it will generate
// the json object for each style directory under registry/

function generateRegistryJson(dir) {
  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: dir,
    type: "registry:style",
    title: dir,
    description: dir,
    dependencies: [],
    registryDependencies: [],
    files: [],
    cssVars: {
      theme: {},
      light: {},
      dark: {},
    },
  };

  return registryJson;
}

function generateRegistryJsonForStyle(dir) {
  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: dir,
    type: "registry:style",
    title: dir,
    description: dir,
    dependencies: [],
    registryDependencies: [],
    files: [],
    cssVars: {
      theme: {},
      light: {},
      dark: {},
    },
  };

  return registryJson;
}

function generateRegistryJsonForBlock(dir) {
  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: dir,
    type: "registry:block",
    title: dir,
    description: dir,
    dependencies: [],
    registryDependencies: [],
    files: [],
    cssVars: {
      theme: {},
      light: {},
      dark: {},
    },
  };

  return registryJson;
}

function generateRegistryJsonForComponent(dir) {
  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: dir,
    type: "registry:component",
    title: dir,
    description: dir,
    dependencies: [],
    registryDependencies: [],
    files: [],
    cssVars: {
      theme: {},
      light: {},
      dark: {},
    },
  };

  return registryJson;
}

function generateRegistryJsonForUi(dir) {
  const registryJson = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: dir,
    type: "registry:ui",
    title: dir,
    description: dir,
    dependencies: [],
    registryDependencies: [],
    files: [],
    cssVars: {
      theme: {},
      light: {},
      dark: {},
    },
  };

  return registryJson;
}

// generate registry json for each style directory under registry/

import path from "path";

const registryJsons = [];
// const stylesDirs = fs.readdirSync("registry");
// console.log("stylesDirs", stylesDirs);
// stylesDirs.forEach((styleDir) => {
const styleDirPath = `registry`;
const ROOT_PATH = path.join(process.cwd());
const STYLE_JSON_OUTPUT_PATH = "";
const REGISTRY_PATH = "registry";
const UI_PATH = "ui";
// const registryJson = generateRegistryJson(styleDir);
// read all files in the style directory
// const files = fs.readdirSync(path.join(process.cwd(), styleDirPath));

// read all files in the style directory, outside lib, in the root directory
// const files = fs.readdirSync(path.join(process.cwd()));

const styles = [
  "default",
  "carbon",
  "linear",
  "material",
  "spectrum",
  "wedges",
  "moon",
  "lucid",
  "snow",
  "neon",
];
const STYLES = styles;

// console.log(
//   "files",
//   fs.readdirSync(path.join(process.cwd(), "registry", "moon", "charts"))
// );
import { readFile } from "fs/promises";
// console.log("registryJson", registryJson);
async function readFileAsync(filePath) {
  const fileContent = await readFile(filePath, "utf-8");
  return fileContent;
}
const sss = await readFileAsync(
  path.join(process.cwd(), REGISTRY_PATH, STYLES[2], UI_PATH, "button.tsx")
).then((res) => res.replaceAll("-linear", ""));
// console.log(sss);

// console.log("console.log()".replaceAll("s", ""));
// registryJsons.push(registryJson);
// });
[];
// fs.writeFileSync("registry.json", JSON.stringify(registryJsons, null, 2));

// // This works in both CommonJS and ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Go up one level from 'lib' to reach project root
// const rootDir = path.resolve(__dirname, "..");

// const filess = fs.readdirSync(rootDir);
// console.log(filess);
