export const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;

export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm";

export const PACKAGE_MANAGER_COMMANDS: Record<
  PackageManager,
  {
    dlx: string;
    local: string;
  }
> = {
  pnpm: {
    dlx: "pnpm dlx",
    local: "pnpm",
  },
  npm: {
    dlx: "npx",
    local: "npx",
  },
  yarn: {
    dlx: "yarn dlx",
    local: "yarn",
  },
  bun: {
    dlx: "bunx --bun",
    local: "bun",
  },
};

export function getPackageManagerCommand(
  manager: PackageManager,
  local?: boolean
) {
  // const commands: Record<PackageManager, string> = {
  //   pnpm: "pnpm dlx shadcn@latest add",
  //   npm: "npx shadcn@latest add",
  //   yarn: "yarn dlx shadcn@latest add",
  //   bun: "bunx --bun shadcn@latest add",
  // };

  return PACKAGE_MANAGER_COMMANDS[manager][local ? "local" : "dlx"];
}

export function getShadcnCommand(version?: string) {
  return version ? `shadcn@${version} add` : `shadcn add`;
}
