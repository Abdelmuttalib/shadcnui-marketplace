import { describe, expect, it } from "vitest";

import type { Style } from "@/hooks/use-style-store";
import {
  getStyleBackgroundClassname,
  getStyleFontClassname,
  getStyleForegroundClassname,
  getStyleVariablesPrefix,
} from "@/registry/styles";

// Contract tables derived from the product's namespaced design system
// (globals.css tokens + tailwind.config.ts mappings). Values below are the
// contract — they must be updated deliberately, never to match a regression.
const PREFIX_BY_STYLE: Array<[Style, string]> = [
  ["default", "dft"],
  ["carbon", "cb"],
  ["catalyst", "catalyst"],
  ["linear", "linear"],
  ["material", "material"],
  ["spectrum", "spctm"],
  ["wedges", "wedges"],
  ["moon", "moon"],
  ["lucid", "lucid"],
  ["snow", "snow"],
  ["neon", "neon"],
  ["libelle", "libelle"],
];

const BACKGROUND_BY_STYLE: Array<[Style, string]> = [
  ["default", "bg-dft-background"],
  ["carbon", "bg-cb-background"],
  ["catalyst", "bg-catalyst-background"],
  ["linear", "bg-linear-background"],
  ["material", "bg-material-background"],
  ["spectrum", "bg-spctm-background"],
  ["wedges", "bg-wedges-background"],
  ["moon", "bg-moon-background"],
  ["lucid", "bg-lucid-background"],
  ["snow", "bg-snow-background"],
  ["neon", "bg-neon-background"],
  ["libelle", "bg-libelle-background"],
];

const FOREGROUND_BY_STYLE: Array<[Style, string]> = [
  ["default", "text-dft-foreground"],
  ["carbon", "text-cb-foreground"],
  ["catalyst", "text-catalyst-foreground"],
  ["linear", "text-linear-foreground"],
  ["material", "text-material-foreground"],
  ["spectrum", "text-spctm-foreground"],
  ["wedges", "text-wedges-foreground"],
  ["moon", "text-moon-foreground"],
  ["lucid", "text-lucid-foreground"],
  ["snow", "text-snow-foreground"],
  ["neon", "text-neon-foreground"],
  ["libelle", "text-libelle-foreground"],
];

const FONT_BY_STYLE: Array<[Style, string]> = [
  ["default", "font-sans"],
  ["carbon", "font-carbon"],
  ["catalyst", "font-sans"],
  ["linear", "font-sans"],
  ["material", "font-material"],
  ["spectrum", "font-spectrum"],
  ["wedges", "font-sans"],
  ["moon", "font-sans"],
  ["lucid", "font-sans"],
  ["snow", "font-sans"],
  ["neon", "font-poppins"],
  ["libelle", "font-outfit"],
];

describe("style variable prefixes", () => {
  it.each(PREFIX_BY_STYLE)("resolves %s to %s", (style, expected) => {
    expect(getStyleVariablesPrefix(style)).toBe(expected);
  });

  it("falls back to the default prefix for unknown styles", () => {
    expect(getStyleVariablesPrefix("unknown-style" as Style)).toBe("dft");
  });
});

describe("style background classnames", () => {
  it.each(BACKGROUND_BY_STYLE)("resolves %s to %s", (style, expected) => {
    expect(getStyleBackgroundClassname(style)).toBe(expected);
  });

  it("falls back to the linear background for unknown styles", () => {
    expect(getStyleBackgroundClassname("unknown-style" as Style)).toBe(
      "bg-linear-background"
    );
  });
});

describe("style foreground classnames", () => {
  it.each(FOREGROUND_BY_STYLE)("resolves %s to %s", (style, expected) => {
    expect(getStyleForegroundClassname(style)).toBe(expected);
  });

  it("falls back to the linear foreground for unknown styles", () => {
    expect(getStyleForegroundClassname("unknown-style" as Style)).toBe(
      "text-linear-foreground"
    );
  });
});

describe("style font classnames", () => {
  it.each(FONT_BY_STYLE)("resolves %s to %s", (style, expected) => {
    expect(getStyleFontClassname(style)).toBe(expected);
  });

  it("falls back to the sans font for unknown styles", () => {
    expect(getStyleFontClassname("unknown-style" as Style)).toBe("font-sans");
  });
});
