"use client";

import { useInstallCommand } from "@/hooks/use-install-command";

import { ClientStringCode } from "./common/client-string-code";
import { BaseName } from "@/registry/bases";
import { StyleName } from "@/registry/styles";

type StylePaletteCommandProps = {
  base?: BaseName;
  style?: StyleName;
  includePalette?: boolean;
  overwrite?: boolean;
};

export function StylePaletteCommand({
  base,
  style,
  includePalette = true,
  overwrite = true,
}: StylePaletteCommandProps) {
  const { command } = useInstallCommand({
    base,
    style,
    includePalette,
    overwrite,
  });

  return (
    <>
      <ClientStringCode c={command} />
    </>
  );
}
