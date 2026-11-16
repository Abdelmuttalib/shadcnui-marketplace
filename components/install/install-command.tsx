"use client";

import { useInstallCommand } from "@/hooks/use-install-command";

import { ClientStringCode } from "@/components/common/client-string-code";

import type { BaseName } from "@/registry/bases";
import type { StyleName } from "@/registry/styles";
import { PackageManagerSelector } from "./package-manager-selector";
import { CodeBlockCommand } from "../common/code-block-command";

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
    <CodeBlockCommand
      commands={commands}
      className="ring-border min-w-0 gap-0 overflow-hidden border-0 ring-1"
    />
  );

  // return (
  //   <PackageManagerSelector className="bg-card ring-border min-w-0 gap-0 overflow-hidden border-0 ring-1">
  //     {(packageManager) => (
  //       <div className="bg-popover relative min-w-0 overflow-hidden">
  //         <div className="no-scrollbar overflow-x-auto">
  //           <ClientStringCode c={commands[packageManager]} />
  //         </div>
  //       </div>
  //     )}
  //   </PackageManagerSelector>
  // );
}
