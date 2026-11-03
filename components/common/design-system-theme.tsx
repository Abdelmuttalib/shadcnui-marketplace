"use client";

import React, { ReactNode, useMemo } from "react";

import { Style } from "@/hooks/use-style-store";
import { themePalettes } from "@/registry/registry-palettes";
import {
  getStyleFontClassname,
  getStyleVariablesPrefix,
} from "@/registry/styles-components";
import { cn } from "@/lib/utils";

const CSS_VARIABLES = {};

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
  theme = "light",
  className,
}: DesignSystemThemeProps) {
  const variables = useMemo(() => {
    const prefix = getStyleVariablesPrefix(style);

    const vars: Record<string, string> = {};

    if (palette) {
      const paletteVars = themePalettes[palette][theme];

      Object.entries(paletteVars).forEach(([key, value]) => {
        vars[`--${prefix}-${key}`] = `oklch(${value})`;
      });
    }

    if (radius) {
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
