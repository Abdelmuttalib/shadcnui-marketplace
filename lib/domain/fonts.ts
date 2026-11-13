import { type RegistryItem } from "shadcn/schema";
import { type PresetConfig } from "shadcn/preset";

import { FONT_DEFINITIONS, type FontDefinition } from "@/lib/fonts-data";
import { Style } from "@/registry/styles";

function createFontItem(definition: FontDefinition, role: "body" | "heading") {
  return {
    name:
      role === "body"
        ? `font-${definition.name}`
        : `font-heading-${definition.name}`,
    title: role === "body" ? definition.title : `${definition.title} (Heading)`,
    type: "registry:font",
    font: {
      family: definition.family,
      provider: definition.provider,
      variable:
        role === "body" ? definition.registryVariable : "--font-heading",
      ...(definition.weight ? { weight: [...definition.weight] } : {}),
      subsets: [...definition.subsets],
      import: definition.import,
      dependency: definition.dependency,
    },
  } satisfies RegistryItem;
}

export const bodyFonts = FONT_DEFINITIONS.map((definition) =>
  createFontItem(definition, "body")
) satisfies RegistryItem[];

export const headingFonts = FONT_DEFINITIONS.map((definition) =>
  createFontItem(definition, "heading")
) satisfies RegistryItem[];

export const fonts = [...bodyFonts, ...headingFonts] satisfies RegistryItem[];

export const fontValues = bodyFonts.map((f) => f.name.replace("font-", "")) as [
  string,
  ...string[],
];
export const fontHeadingValues = ["inherit", ...fontValues] as const;

export type StyleFonts = {
  sans: string;
  heading: string;
};

export function extractStyleFonts(style: Style): StyleFonts {
  return {
    sans: style.font,
    heading: style.fontHeading === "inherit" ? style.font : style.fontHeading,
  };
}
