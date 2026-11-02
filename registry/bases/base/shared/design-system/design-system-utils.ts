import { Style } from "@/hooks/use-style-store";
import { themePalettes } from "@/registry/registry-palettes";
import { getStyleVariablesPrefix } from "@/registry/styles-components";

import { designSystemTokens } from "./design-system-tokens";
import { StyleName } from "@/registry/styles";

export type DesignSystemTheme = "light" | "dark";

export type DesignSystemPalette = keyof typeof themePalettes;

export function getDesignSystemVariables({
  style,
  palette,
  radius,
  theme,
}: {
  style: Style;
  palette?: DesignSystemPalette;
  radius?: string;
  theme: DesignSystemTheme;
}): Record<string, string> {
  const prefix = getStyleVariablesPrefix(style);

  const variables: Record<string, string> = {};

  // Map style-specific tokens to generic semantic tokens.
  Object.entries(designSystemTokens).forEach(([semantic, token]) => {
    variables[`--${token}`] = `var(--${prefix}-${token})`;
  });

  // Map generic radius to the selected style's radius.
  variables["--radius"] = `var(--${prefix}-radius)`;

  // Apply palette overrides.
  if (palette) {
    const paletteVariables = themePalettes[palette][theme];

    Object.entries(paletteVariables).forEach(([key, value]) => {
      variables[`--${prefix}-${key}`] = `oklch(${value})`;
    });
  }

  // Apply radius override.
  if (radius) {
    variables[`--${prefix}-radius`] = radius;
  }

  return variables;
}

export function getDesignSystemClasses(style: StyleName) {
  const classes: Record<StyleName, string> = {
    default: "font-sans",
    carbon: "font-carbon",
    neon: "font-poppins",
    libelle: "font-outfit",
    linear: "font-sans",
    catalyst: "font-sans",
    material: "font-material",
    spectrum: "font-spectrum",
    wedges: "font-sans",
    moon: "font-sans",
    snow: "font-sans",
    lucid: "font-sans",
  };

  return classes[style] ?? "";
}
