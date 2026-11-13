"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useTheme } from "next-themes";

import {
  DEFAULT_RADIUS,
  DEFAULT_THEME_PALETTE,
  type ThemePaletteName,
  type ThemeRadius,
} from "@/registry/registry-palettes";

import { useStyleStore } from "@/hooks/use-style-store";

import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

import {
  updateCustomizeUrl,
  isCustomizeTheme,
  CUSTOMIZE_DEFAULTS,
} from "./customize-url";
import { CustomizeTheme, customizeUrlParsers } from "@/lib/customize-params";
import { useQueryStates } from "nuqs";

export function CustomizeUrlSync() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [params, setParams] = useQueryStates(customizeUrlParsers, {
    history: "replace",
    shallow: true,
    scroll: false,
  });

  /**
   * Prevent URL synchronization before initial URL restoration.
   */
  const initializedRef = useRef(false);

  /**
   * Prevent an old resolvedTheme value from overwriting
   * the theme we are restoring from the URL.
   */
  const pendingThemeRef = useRef<string | null>(null);

  /**
   * Keep the current appearance available to Zustand subscriptions.
   */
  const themeRef = useRef<string | null>(null);

  /**
   * 1. Restore customization from the URL.
   *
   * useLayoutEffect ensures stores are initialized before
   * the browser paints the customization preview.
   */
  useLayoutEffect(() => {
    if (initializedRef.current) return;

    const palette = params.palette ?? CUSTOMIZE_DEFAULTS.palette;

    const radius = params.radius ?? CUSTOMIZE_DEFAULTS.radius;

    const example = params.example ?? CUSTOMIZE_DEFAULTS.example;

    const theme = params.theme ?? "light";

    const urlState = {
      palette,
      radius,
      example,
      theme,
    };

    const paletteStore = useThemePaletteStore.getState();
    const styleStore = useStyleStore.getState();

    // // Restore palette.
    // paletteStore.setActivePalette(
    //   (urlState.palette ?? DEFAULT_THEME_PALETTE) as ThemePaletteName
    // );

    // // Restore radius.
    // paletteStore.setActiveRadius(
    //   (urlState.radius ?? DEFAULT_RADIUS) as ThemeRadius
    // );

    // // Restore example.
    // styleStore.setActiveExample(
    //   (urlState.example ?? CUSTOMIZE_DEFAULTS.example) as ExampleName
    // );

    if (paletteStore.activePalette !== palette) {
      paletteStore.setActivePalette(palette);
    }

    if (paletteStore.activeRadius !== radius) {
      paletteStore.setActiveRadius(radius);
    }

    if (styleStore.activeExample !== example) {
      styleStore.setActiveExample(example);
    }

    // // Restore theme only when explicitly provided in the URL.
    // if (params.theme) {
    //   themeRef.current = params.theme;
    //   pendingThemeRef.current = params.theme;

    //   setTheme(params.theme);
    // } else {
    //   // No theme parameter: preserve the user's system preference.
    //   const appearance = resolvedTheme;

    //   themeRef.current = appearance ?? null;
    // }

    // Restore theme.
    themeRef.current = theme;
    pendingThemeRef.current = theme;

    setTheme(theme);

    initializedRef.current = true;
  }, [
    params.palette,
    params.radius,
    params.example,
    params.theme,
    setTheme,
    resolvedTheme,
  ]);

  /**
   * 2. Synchronize Zustand changes back into the URL.
   */
  useEffect(() => {
    if (!initializedRef.current) return;

    function syncUrl() {
      if (!initializedRef.current) return;

      const { activePalette, activeRadius } = useThemePaletteStore.getState();

      const { activeExample } = useStyleStore.getState();

      const currentTheme = themeRef.current;

      void setParams({
        palette: activePalette === DEFAULT_THEME_PALETTE ? null : activePalette,

        radius: activeRadius === DEFAULT_RADIUS ? null : activeRadius,

        example:
          activeExample === CUSTOMIZE_DEFAULTS.example ? null : activeExample,

        theme:
          currentTheme === "light" || currentTheme === "dark"
            ? currentTheme
            : null,
      });
    }

    const unsubscribePalette = useThemePaletteStore.subscribe(syncUrl);

    const unsubscribeStyle = useStyleStore.subscribe(syncUrl);

    return () => {
      unsubscribePalette();
      unsubscribeStyle();
    };
  }, []);

  /**
   * 3. Synchronize next-themes changes back into the URL.
   *
   * When the user has selected "system", we share the
   * currently resolved appearance instead.
   */
  useEffect(() => {
    if (!initializedRef.current || !resolvedTheme) return;

    // Wait until next-themes has applied the URL theme.
    if (pendingThemeRef.current && resolvedTheme !== pendingThemeRef.current) {
      return;
    }

    pendingThemeRef.current = null;

    const appearance =
      resolvedTheme === "light" ? resolvedTheme : (theme ?? resolvedTheme);

    if (appearance !== "light" && appearance !== "dark") return;

    themeRef.current = appearance;

    void setParams({
      theme: appearance,
    });

    // void setParams({
    //   theme:
    //     resolvedTheme === "light" ? null : (resolvedTheme as CustomizeTheme),
    // });
  }, [theme, resolvedTheme]);

  return null;
}

// import {
//   DEFAULT_RADIUS,
//   DEFAULT_THEME_PALETTE,
// } from "@/registry/registry-palettes";

// export const CUSTOMIZE_DEFAULTS = {
//   palette: DEFAULT_THEME_PALETTE,
//   radius: DEFAULT_RADIUS,
//   theme: "light",
//   example: "preview",
// } as const;

// export const CUSTOMIZE_QUERY_KEYS = [
//   "palette",
//   "radius",
//   "theme",
//   "example",
// ] as const;

// export type CustomizeTheme = "light" | "dark";

// export function isCustomizeTheme(
//   value: string | null
// ): value is CustomizeTheme {
//   return value === "light" || value === "dark";
// }

// /**

// Updates customization parameters while preserving
// unrelated query parameters. */
// export function updateCustomizeUrl(
//   updates: Partial<Record<(typeof CUSTOMIZE_QUERY_KEYS)[number], string | null>>
// ) {
//   const url = new URL(window.location.href);
//   for (const [key, value] of Object.entries(updates)) {
//     if (value === null || value === undefined || value === "") {
//       url.searchParams.delete(key);
//     } else {
//       url.searchParams.set(key, value);
//     }
//   }

//   window.history.replaceState( window.history.state, "", ${url.pathname}${url.search}${url.hash} );
// }
