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
  radius,
}: {
  style: string;
  palette: StylePalette;
  theme: PaletteTheme;
  radius: string;
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

// export function getStylePaletteCss({
//   style,
//   palette,
// }: {
//   style: string;
//   palette: StylePalette;
// }) {
//   const paletteDefinition = themePalettes[palette];

//   if (!paletteDefinition) return "";

//   const prefix = getStyleVariablesPrefix(style);

//   function buildDeclarations(variables: Record<string, string>) {
//     return Object.entries(variables)
//       .map(([key, value]) => `--${prefix}-${key}: oklch(${value});`)
//       .join("\n");
//   }

//   const lightVariables = buildDeclarations(paletteDefinition.light);

//   const darkVariables = buildDeclarations(paletteDefinition.dark);

//   return `
//     & {
//       ${lightVariables}
//     }

//     &.dark,
//     & .dark {
//       ${darkVariables}
//     }
//   `;
// }

export function getStylePaletteCss({
  style,
  palette,
  selector,
}: {
  style: string;
  palette: StylePalette;
  selector: string;
}) {
  const paletteDefinition = themePalettes[palette];

  if (!paletteDefinition) return "";

  const prefix = getStyleVariablesPrefix(style);

  function buildDeclarations(variables: Record<string, string>) {
    return Object.entries(variables)
      .map(([key, value]) => `--${prefix}-${key}: oklch(${value});`)
      .join("\n");
  }

  return `
    ${selector} {
      ${buildDeclarations(paletteDefinition.light)}
    }

    .dark ${selector},
    ${selector}.dark {
      ${buildDeclarations(paletteDefinition.dark)}
    }
  `;
}
