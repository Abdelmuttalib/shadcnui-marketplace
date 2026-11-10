import { themePalettes } from "./registry-palettes";
import { getStyleVariablesPrefix } from "./styles-components";

export type StylePalette = keyof typeof themePalettes;

export type PaletteTheme = "light" | "dark";

export type PaletteVariables = Record<string, string>;

/**
 * Converts a palette into CSS custom properties for a specific style.
 *
 * Example:
 *
 * style = "moon"
 * palette = "blue"
 * theme = "light"
 *
 * Returns:
 *
 * {
 *   "--moon-background": "oklch(...)",
 *   "--moon-foreground": "oklch(...)",
 *   "--moon-primary": "oklch(...)",
 *   ...
 * }
 */
export function getStylePaletteVariables({
  style,
  palette,
  theme,
}: {
  style: string;
  palette: StylePalette;
  theme: PaletteTheme;
}): PaletteVariables {
  const paletteDefinition = themePalettes[palette];

  if (!paletteDefinition) {
    return {};
  }

  const themePalette = paletteDefinition[theme];

  if (!themePalette) {
    return {};
  }

  const prefix = getStyleVariablesPrefix(style);

  return Object.fromEntries(
    Object.entries(themePalette).map(([key, value]) => [
      `--${prefix}-${key}`,
      `oklch(${value})`,
    ])
  );
}
