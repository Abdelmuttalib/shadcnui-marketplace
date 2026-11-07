"use client";

import React, { ReactNode, useMemo } from "react";
import { useTheme } from "next-themes";

import { Style } from "@/hooks/use-style-store";
import { themePalettes } from "@/registry/registry-palettes";
import { designSystemTokens } from "@/registry/bases/base/shared/design-system/design-system-tokens";
import {
  getStyleFontClassname,
  getStyleVariablesPrefix,
} from "@/registry/styles-components";
import { cn } from "@/lib/utils";

interface DesignSystemThemeProps {
  children: ReactNode;
  style: Style;
  palette?: keyof typeof themePalettes;
  radius?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function DesignSystemTheme({
  children,
  style,
  palette,
  radius,
  theme: themeProp,
  className,
}: DesignSystemThemeProps) {
  const { theme: nextTheme, resolvedTheme } = useTheme();

  const theme =
    themeProp ??
    (nextTheme === "system" ? resolvedTheme : nextTheme) ??
    "light";

  const variables = useMemo(() => {
    const prefix = getStyleVariablesPrefix(style);

    const vars: Record<string, string> = {};

    // Apply palette variables using the style-specific prefix
    if (palette) {
      const paletteVars = themePalettes[palette][theme as "light" | "dark"];

      Object.entries(paletteVars).forEach(([key, value]) => {
        vars[`--${prefix}-${key}`] = `oklch(${value})`;
      });
    }

    // Apply style-specific CSS variable references
    Object.values(designSystemTokens).forEach((token) => {
      vars[`--${token}`] = `var(--${prefix}-${token})`;
    });

    // Apply radius
    if (radius) {
      vars["--radius"] = radius;
      vars[`--${prefix}-radius`] = radius;
    }

    return vars;
  }, [style, palette, radius, theme]);

  const styleFontClass = getStyleFontClassname(style);

  return (
    <div
      className={cn(className, styleFontClass)}
      data-design-system={style}
      data-theme={theme}
      style={variables as React.CSSProperties}
    >
      {children}
    </div>
  );
}
