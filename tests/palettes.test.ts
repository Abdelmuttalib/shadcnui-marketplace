import { describe, expect, it } from "vitest";

import {
  DEFAULT_RADIUS,
  DEFAULT_THEME_PALETTE,
  themePalettes,
} from "@/registry/registry-palettes";

// Keys every palette variant must define for the customizer effect
// (components/theme-customizer.tsx) to theme a preview completely.
const REQUIRED_KEYS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
] as const;

describe("theme palettes", () => {
  it("defines palettes palette-1 through palette-19", () => {
    const expected = Array.from({ length: 19 }, (_, i) => `palette-${i + 1}`);
    expect(Object.keys(themePalettes).sort()).toEqual(expected.sort());
  });

  it("gives every palette matching light and dark structures", () => {
    for (const [name, variants] of Object.entries(themePalettes)) {
      expect(Object.keys(variants).sort()).toEqual(["dark", "light"]);
      expect(Object.keys(variants.dark).sort()).toEqual(
        Object.keys(variants.light).sort()
      );
    }
  });

  it("defines the required keys in every variant", () => {
    for (const [name, variants] of Object.entries(themePalettes)) {
      for (const mode of ["light", "dark"] as const) {
        for (const key of REQUIRED_KEYS) {
          expect(
            variants[mode][key],
            `${name}.${mode} is missing ${key}`
          ).toBeTruthy();
        }
      }
    }
  });

  it("starts with empty defaults so static CSS wins initially", () => {
    expect(DEFAULT_THEME_PALETTE).toBe("");
    expect(DEFAULT_RADIUS).toBe("");
  });
});
