"use client";

import { useMemo } from "react";

import { getRegistryUrl } from "@/config/registry";

import { useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { usePackageManagerConfig } from "@/lib/config/package-manager-config";

import type { BaseName } from "@/registry/bases";
import type { StyleName } from "@/registry/styles";

import {
  PACKAGE_MANAGERS,
  PACKAGE_MANAGER_COMMANDS,
  type PackageManager,
} from "@/registry/package-managers";

import { getRegistryStylePath } from "@/registry/registry-utils";

type UseInstallCommandOptions = {
  base?: BaseName;
  style?: StyleName;
  includePalette?: boolean;
  overwrite?: boolean;
  packageManager?: PackageManager;
  local?: boolean;
};

type InstallCommands = Record<PackageManager, string>;

export function useInstallCommand({
  base: baseProp,
  style: styleProp,
  includePalette = true,
  overwrite = true,
  packageManager: packageManagerProp,
  local = false,
}: UseInstallCommandOptions = {}) {
  const storeBase = useStyleStore((state) => state.base);
  const storeStyle = useStyleStore((state) => state.style);

  const activePalette = useThemePaletteStore((state) => state.activePalette);

  const [config] = usePackageManagerConfig();

  const base = baseProp ?? storeBase;
  const style = styleProp ?? storeStyle;

  const packageManager = packageManagerProp ?? config.packageManager;

  const commands = useMemo<InstallCommands>(() => {
    const registryUrl = getRegistryUrl();

    const styleUrl = `${registryUrl}${getRegistryStylePath(base, style)}`;

    const paletteUrl =
      includePalette && activePalette
        ? `${registryUrl}/r/themes/${activePalette}.json`
        : undefined;

    const overwriteFlag = overwrite ? " --overwrite" : "";

    return Object.fromEntries(
      PACKAGE_MANAGERS.map((manager) => {
        const runner =
          PACKAGE_MANAGER_COMMANDS[manager][local ? "local" : "dlx"];

        const shadcnCommand = `${runner} shadcn add`;

        const command = [
          `${shadcnCommand} "${styleUrl}"${overwriteFlag}`,
          paletteUrl ? `${shadcnCommand} "${paletteUrl}"` : undefined,
        ]
          .filter(Boolean)
          .join(" && ");

        return [manager, command];
      })
    ) as InstallCommands;
  }, [base, style, activePalette, includePalette, overwrite, local]);

  return {
    command: commands[packageManager],
    commands,
    packageManager,
  };
}
