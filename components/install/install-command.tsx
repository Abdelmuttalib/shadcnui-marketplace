"use client";

import { useInstallCommand } from "@/hooks/use-install-command";

import { ClientStringCode } from "@/components/common/client-string-code";

import type { BaseName } from "@/registry/bases";
import type { StyleName } from "@/registry/styles";
import { PackageManagerSelector } from "./package-manager-selector";

type InstallCommandProps = {
  base?: BaseName;
  style?: StyleName;
  includePalette?: boolean;
  overwrite?: boolean;
};

export function InstallCommand({
  base,
  style,
  includePalette = true,
  overwrite = true,
}: InstallCommandProps) {
  const { commands } = useInstallCommand({
    base,
    style,
    includePalette,
    overwrite,
  });

  return (
    <PackageManagerSelector className="ring-border min-w-0 gap-0 overflow-hidden border-0 ring-1">
      {(packageManager) => (
        <div className="bg-popover relative min-w-0 overflow-hidden border-t p-3">
          <div className="no-scrollbar overflow-x-auto">
            <ClientStringCode c={commands[packageManager]} />
          </div>
        </div>
      )}
    </PackageManagerSelector>
  );
}
