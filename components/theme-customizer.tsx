"use client";

import { useTheme } from "next-themes";
import React, { ReactNode } from "react";

import { Style, useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { getStyleVariablesPrefix } from "@/registry/styles";

import { themePalettes } from "./common/theme-palettes";

// Theme Wrapper Component
type ThemeWrapperProps = React.ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

// interface ThemeColorWrapperProps extends React.ComponentProps<"div"> {
//   defaultTheme?: string;
// }

export function ThemeCustomizerWrapper({ children }: ThemeWrapperProps) {
  const { theme, resolvedTheme, systemTheme } = useTheme();
  const { style } = useStyleStore();

  function prefixCssVariableWithStyle(style: Style, variable: string) {
    return `--${getStyleVariablesPrefix(style)}-${variable}`;
  }

  function onAddInlineStylesToHtmlElement(
    vars: Record<string, string>,
    style: Style,
    element: HTMLElement
  ) {
    console.log("vars", vars);

    if (typeof document === "undefined") return;

    // if vars is undefined, return
    // if (!vars) return;

    const cssVars = Object.entries(vars);
    // const cssVars = Object.entries(themePalettes["palette-9"]["dark"]);

    if (cssVars.length === 0) return;

    if (!element) return;

    cssVars.forEach(([key, value]) => {
      element.style.setProperty(prefixCssVariableWithStyle(style, key), value);
    });
  }

  const { activePalette, activeRadius, setActivePalette, setActiveRadius } =
    useThemePaletteStore();

  React.useEffect(() => {
    console.log("activePalette", activePalette);
  }, [activePalette, activeRadius]);

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

      console.log("existingVariables", existingVariables);

      if (activePalette) {
        console.log(
          "HTME",
          theme,
          htmlElement.classList,
          htmlElement.classList.contains("dark")
        );
        // const themePaletteVars = themePalettes[selectedPalette][theme];
        // incase the theme is "system", we need to check if the html element has the "dark" class
        // if it does, we need to add the dark theme palette vars
        // if it doesn't, we need to add the light theme palette vars

        console.log("THEME", theme, resolvedTheme, systemTheme);

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

          // if (htmlElement.classList.contains("light")) {
          // } else {
          //   onAddInlineStylesToHtmlElement(
          //     themePalettes[selectedPalette]["light"],
          //     style,
          //     htmlElement
          //   );
          // }
        } else {
          onAddInlineStylesToHtmlElement(
            themePalettes[activePalette][
              (theme as "light" | "dark") || "light"
            ],
            style,
            htmlElement
          );
        }

        // onAddInlineStylesToHtmlElement(
        //   themePalettes[selectedPalette][
        //     (theme as "light" | "dark") || "light"
        //   ],
        //   style,
        //   htmlElement
        // );
      }

      // Object.entries(themePalettes[selectedPalette][theme || "light"]).forEach(
      //   ([key, value]) => {
      //     htmlElement.style.setProperty(
      //       prefixCssVariableWithStyle(style, key),
      //       value
      //     );
      //   }
      // );

      // add radius
      if (activeRadius) {
        htmlElement.style.setProperty(
          prefixCssVariableWithStyle(style, "radius"),
          activeRadius
        );
      }
    }
  }, [theme, style, activePalette, activeRadius, resolvedTheme]);

  // React.useEffect(() => {
  //   if (typeof document !== "undefined" && !!sThemeStylesWithMode) {
  //     const htmlElement = document.documentElement;
  //     Object.entries(sThemeStylesWithMode).forEach(([key, value]) => {
  //       htmlElement.style.setProperty(key, value);
  //     });
  //   }
  // }, [sThemeStylesWithMode]);

  return <>{children}</>;
}

export type ThemePaletteName =
  | "palette-1"
  | "palette-2"
  | "palette-3"
  | "palette-4"
  | "palette-5"
  | "palette-6"
  | "palette-7"
  | "palette-8"
  | "palette-9"
  | "palette-10"
  | "palette-11"
  | "palette-12";

export type ThemeRadius =
  | "0rem"
  | "0.1rem"
  | "0.2rem"
  | "0.3rem"
  | "0.4rem"
  | "0.5rem"
  | "0.6rem"
  | "0.7rem"
  | "0.8rem"
  | "0.9rem"
  | "1rem"
  | "";

export const DEFAULT_THEME_PALETTE = "palette-11";
export const DEFAULT_RADIUS = "";

type ThemePaletteContextType = {
  selectedPalette: ThemePaletteName | "";
  setSelectedPalette: React.Dispatch<
    React.SetStateAction<ThemePaletteName | "">
  >;
  selectedRadius: ThemeRadius;
  setSelectedRadius: React.Dispatch<React.SetStateAction<ThemeRadius>>;
  onResetPalette: () => void;
  onResetRadius: () => void;
};

const ThemePaletteContext = React.createContext<ThemePaletteContextType>({
  selectedPalette: DEFAULT_THEME_PALETTE,
  setSelectedPalette: () => {},
  selectedRadius: DEFAULT_RADIUS,
  setSelectedRadius: () => {},
  onResetPalette: () => {},
  onResetRadius: () => {},
});

type SelectedPalette = keyof typeof themePalettes;

export function ThemePaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedPalette, setSelectedPalette] = React.useState<
    ThemePaletteName | ""
  >(DEFAULT_THEME_PALETTE);

  const [selectedRadius, setSelectedRadius] =
    React.useState<ThemeRadius>(DEFAULT_RADIUS);

  function onResetPalette() {
    setSelectedPalette(DEFAULT_THEME_PALETTE);
  }

  function onResetRadius() {
    setSelectedRadius(DEFAULT_RADIUS);
  }

  return (
    <ThemePaletteContext.Provider
      value={{
        selectedPalette,
        setSelectedPalette,
        selectedRadius,
        setSelectedRadius,
        onResetPalette,
        onResetRadius,
      }}
    >
      {children}
    </ThemePaletteContext.Provider>
  );
}

export function useThemePalette() {
  const context = React.useContext(ThemePaletteContext);

  if (!context) {
    throw new Error(
      "useThemePalette must be used within a ThemePaletteProvider"
    );
  }

  return context;
}
