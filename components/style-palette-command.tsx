"use client";

import { BASE_SITE_URL } from "@/config/site-config";
import { useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

// import { StringCode } from "./common/string-code";
import { ClientStringCode } from "./common/client-string-code";

function getRegistryUrl(env: string) {
  if (env === "production") {
    return BASE_SITE_URL;
  }
  return "http://localhost:3000";
}

export function StylePaletteCommand() {
  const NODE_ENV = process.env.NODE_ENV;
  const isProd = NODE_ENV === "production";

  const { style } = useStyleStore();
  const { activePalette } = useThemePaletteStore();

  const packageManagerCommand = "pnpm dlx";

  const styleCommand = style
    ? `shadcn add "${getRegistryUrl(
        NODE_ENV
      )}/r/styles/${style}/index.json" --overwrite`
    : "";

  const paletteCommand = activePalette
    ? `shadcn add "${getRegistryUrl(NODE_ENV)}/r/themes/${activePalette}.json"`
    : "";

  const outputCommand = `${packageManagerCommand} ${styleCommand} ${
    paletteCommand ? `&& ${packageManagerCommand} ${paletteCommand}` : ""
  }`;

  return <ClientStringCode c={outputCommand} />;
}
