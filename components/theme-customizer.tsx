"use client";

import { useTheme } from "next-themes";
import React, { ReactNode } from "react";

import { Style, useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { themePalettes } from "@/registry/registry-palettes";
import { getStyleVariablesPrefix } from "@/registry/styles";

// Theme Wrapper Component
type ThemeWrapperProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
};

// interface ThemeColorWrapperProps extends React.ComponentProps<"div"> {
//   defaultTheme?: string;
// }

export function ThemeCustomizerWrapper({ children }: ThemeWrapperProps) {
  const { theme, resolvedTheme } = useTheme();
  const { style } = useStyleStore();

  function prefixCssVariableWithStyle(style: Style, variable: string) {
    return `--${getStyleVariablesPrefix(style)}-${variable}`;
  }

  function onAddInlineStylesToHtmlElement(
    vars: Record<string, string>,
    style: Style,
    element: HTMLElement
  ) {
    if (typeof document === "undefined") return;

    if (!element) return;

    const cssVars = Object.entries(vars);
    // const cssVars = Object.entries(themePalettes["palette-9"]["dark"]);

    if (!cssVars || cssVars.length === 0) return;

    cssVars.forEach(([key, value]) => {
      element.style.setProperty(prefixCssVariableWithStyle(style, key), value);
    });
  }

  const { activePalette, activeRadius, setActivePalette, setActiveRadius } =
    useThemePaletteStore();

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const htmlElement = document.documentElement;

      const existingVariables = Array.from(htmlElement.style).filter(
        (varName) => varName.startsWith(`--`)
      );

      if (existingVariables) {
        // remove existing variables
        existingVariables.forEach((varName) => {
          htmlElement.style.removeProperty(varName);
        });
      }

      if (activePalette) {
        // const themePaletteVars = themePalettes[selectedPalette][theme];
        // incase the theme is "system", we need to check if the html element has the "dark" class
        // if it does, we need to add the dark theme palette vars
        // if it doesn't, we need to add the light theme palette vars

        if (theme === "system") {
          if (!resolvedTheme) return;

          onAddInlineStylesToHtmlElement(
            themePalettes[activePalette][
              resolvedTheme === "system"
                ? "light"
                : (resolvedTheme as "dark" | "light")
            ],
            style,
            htmlElement
          );
        } else {
          console.log(
            "theme",
            theme,
            themePalettes[activePalette],
            activePalette
          );
          onAddInlineStylesToHtmlElement(
            themePalettes[activePalette][
              (theme ? (theme as "light" | "dark") : "light") || "light"
            ],
            style,
            htmlElement
          );
        }
      }

      // add radius
      if (activeRadius) {
        htmlElement.style.setProperty(
          prefixCssVariableWithStyle(style, "radius"),
          activeRadius
        );
      }
    }
  }, [theme, style, activePalette, activeRadius, resolvedTheme]);

  return <>{children}</>;
}
