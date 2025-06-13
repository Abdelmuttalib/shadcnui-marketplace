"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

// import { StringCode } from "./common/string-code";
import { ClientStringCode } from "./common/client-string-code";

export function StylePaletteCommand() {
  const { style } = useStyleStore();
  const { activePalette } = useThemePaletteStore();

  const packageManagerCommand = "pnpm dlx";

  const styleCommand = style
    ? `shadcn add "http://localhost:3000/r/styles/${style}/index.json" --overwrite`
    : "";

  const paletteCommand = activePalette
    ? `shadcn add "http://localhost:3000/r/theme/${activePalette}.json"`
    : "";

  const outputCommand = `${packageManagerCommand} ${styleCommand} ${
    paletteCommand ? `&& ${packageManagerCommand} ${paletteCommand}` : ""
  }`;

  return <ClientStringCode c={outputCommand} />;
}
