import {
  createLoader,
  createParser,
  createSerializer,
  parseAsStringLiteral,
} from "nuqs";

import {
  DEFAULT_RADIUS,
  DEFAULT_THEME_PALETTE,
  PALETTES,
  PALETTES_KEYS,
  RADIIS,
  // THEME_PALETTES,
  // THEME_RADII,
} from "@/registry/registry-palettes";

import { EXAMPLES } from "@/registry/bases/base/shared/examples-registry";

export const CUSTOMIZE_THEMES = ["light", "dark"] as const;

export type CustomizeTheme = (typeof CUSTOMIZE_THEMES)[number];

export const customizeUrlParsers = {
  palette: parseAsStringLiteral(PALETTES_KEYS),

  radius: parseAsStringLiteral(RADIIS),

  theme: parseAsStringLiteral(CUSTOMIZE_THEMES),

  example: parseAsStringLiteral(EXAMPLES),
};

export const loadCustomizeUrl = createLoader(customizeUrlParsers);

export const serializeCustomizeUrl = createSerializer(customizeUrlParsers);

export function createOptionalLiteralParser<const T extends readonly string[]>(
  values: T
) {
  return parseAsStringLiteral(values).withDefault(values[0] as T[number]);
}
