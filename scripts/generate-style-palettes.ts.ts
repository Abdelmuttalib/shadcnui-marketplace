import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";

import { styles } from "../registry/styles";

const CSS_PATH = path.resolve("app/globals.css");

const OUTPUT_PATH = path.resolve("registry/generated-style-palettes.ts");

const THEME_VARIABLE_KEYS = [
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
  "destructive",
  "destructive-foreground",
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
  "sidebar-background",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

type ThemeVariableKey = (typeof THEME_VARIABLE_KEYS)[number];

type ColorMode = "light" | "dark";

type Palette = Partial<Record<ThemeVariableKey, string>>;

type StylePalette = {
  light: Palette;
  dark: Palette;
};

type StylePalettes = Record<string, StylePalette>;

type VariableMap = Map<string, string>;

/**
 * Normalize CSS values.
 */
function normalizeColor(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

/**
 * Check whether a selector belongs to a specific theme.
 */
function isThemeSelector(selector: string, mode: ColorMode): boolean {
  const selectors = selector.split(",").map((item) => item.trim());

  if (mode === "light") {
    return selectors.some((item) => {
      return item === ":root" || item === "html" || item === ":root:root";
    });
  }

  return selectors.some((item) => {
    return (
      item === ".dark" ||
      item.startsWith(".dark ") ||
      item.startsWith(".dark:") ||
      item.includes(" .dark")
    );
  });
}

/**
 * Extract ALL CSS custom properties belonging to a style.
 *
 * This map is only used internally for resolving dependencies.
 *
 * Example:
 *
 * --material-foreground: var(--material-color-gray-950);
 * --material-color-gray-950: oklch(0.145 0 0);
 *
 * Both variables are extracted for resolution.
 *
 * They will NOT both appear in the generated palette.
 */
function extractAllVariables(
  root: postcss.Root,
  prefix: string,
  mode: ColorMode
): VariableMap {
  const variables: VariableMap = new Map();

  const variablePrefix = `--${prefix}-`;

  root.walkRules((rule) => {
    if (!isThemeSelector(rule.selector, mode)) {
      return;
    }

    rule.walkDecls((decl) => {
      if (!decl.prop.startsWith(variablePrefix)) {
        return;
      }

      variables.set(decl.prop, normalizeColor(decl.value));
    });
  });

  return variables;
}

/**
 * Resolve CSS variable references recursively.
 *
 * Supports:
 *
 * var(--primary)
 *
 * var(--primary, red)
 *
 * var(--primary-foreground)
 *
 * Nested references:
 *
 * --foreground: var(--color-gray-950);
 * --color-gray-950: oklch(0.145 0 0);
 *
 * Result:
 *
 * oklch(0.145 0 0)
 *
 * Circular references are detected.
 */
function resolveVariables(variables: VariableMap): VariableMap {
  const resolved = new Map<string, string>();

  const resolving = new Set<string>();

  function resolveValue(value: string, depth = 0): string {
    if (depth > 50) {
      throw new Error("Maximum CSS variable resolution depth exceeded.");
    }

    const variableRegex =
      /var\(\s*(--[\w-]+)\s*(?:,\s*((?:[^()]|\([^()]*\))*))?\s*\)/g;

    return value.replace(
      variableRegex,
      (_match, variableName: string, fallback?: string) => {
        return resolveVariable(variableName, fallback, depth + 1);
      }
    );
  }

  function resolveVariable(
    variableName: string,
    fallback?: string,
    depth = 0
  ): string {
    if (resolved.has(variableName)) {
      return resolved.get(variableName)!;
    }

    if (resolving.has(variableName)) {
      throw new Error(
        `Circular CSS variable reference detected: ${[
          ...resolving,
          variableName,
        ].join(" -> ")}`
      );
    }

    const rawValue = variables.get(variableName);

    if (rawValue === undefined) {
      if (fallback !== undefined) {
        return resolveValue(fallback, depth + 1);
      }

      throw new Error(`Undefined CSS variable: ${variableName}`);
    }

    resolving.add(variableName);

    try {
      const value = resolveValue(rawValue, depth + 1);

      resolved.set(variableName, value);

      return value;
    } finally {
      resolving.delete(variableName);
    }
  }

  /**
   * Resolve every variable so that invalid references
   * are detected before generating the output.
   */
  for (const variableName of variables.keys()) {
    resolveVariable(variableName);
  }

  return resolved;
}

/**
 * Extract only the explicitly supported theme variables
 * from the resolved variable map.
 *
 * Exploration variables such as:
 *
 * --material-color-gray-950
 * --material-color-primary-500
 * --material-color-primary2-500
 *
 * are never included in the generated palette.
 */
function createPalette(variables: VariableMap, prefix: string): Palette {
  const palette: Palette = {};

  for (const key of THEME_VARIABLE_KEYS) {
    const variableName = `--${prefix}-${key}`;

    const value = variables.get(variableName);

    if (value === undefined) {
      continue;
    }

    palette[key] = normalizeColor(value);
  }

  return palette;
}

/**
 * Generate a resolved palette for a specific theme.
 */
function generatePalette(
  root: postcss.Root,
  prefix: string,
  mode: ColorMode
): Palette {
  /**
   * Extract all variables for internal resolution.
   */
  const extractedVariables = extractAllVariables(root, prefix, mode);

  /**
   * Resolve all CSS variable dependencies.
   */
  const resolvedVariables = resolveVariables(extractedVariables);

  /**
   * Return only the supported theme variables.
   */
  return createPalette(resolvedVariables, prefix);
}

/**
 * Main generator.
 */
function main() {
  if (!fs.existsSync(CSS_PATH)) {
    throw new Error(`CSS file not found: ${CSS_PATH}`);
  }

  const css = fs.readFileSync(CSS_PATH, "utf8");

  const root = postcss.parse(css, {
    from: CSS_PATH,
  });

  const palettes: StylePalettes = {};

  console.log("\nGenerating style palettes...\n");

  for (const style of styles) {
    const prefix = style.cssPrefix;

    try {
      const light = generatePalette(root, prefix, "light");

      const dark = generatePalette(root, prefix, "dark");

      palettes[`palette-${style.name}`] = {
        light,
        dark,
      };

      console.log(
        `[palette-${style.name}] light: ${Object.keys(light).length}, dark: ${Object.keys(dark).length}`
      );
    } catch (error) {
      throw new Error(
        `Failed to generate palette for "palette-${style.name}": ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }

  const output = `// This file is auto-generated.
// Do not edit manually.

export const stylePalettes = ${JSON.stringify(palettes, null, 2)} as const;

export type StylePalettes = typeof stylePalettes;

export type StylePaletteName = keyof StylePalettes;
`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), {
    recursive: true,
  });

  fs.writeFileSync(OUTPUT_PATH, output, "utf8");

  console.log(`\nSuccessfully generated: ${OUTPUT_PATH}\n`);
}

main();
