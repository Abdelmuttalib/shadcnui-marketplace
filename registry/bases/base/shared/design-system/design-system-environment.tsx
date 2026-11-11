"use client";

import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "next-themes";

import { getDesignSystemClasses } from "./design-system-utils";

import { cn } from "cn";

import {
  DesignSystemPalette,
  DesignSystemTheme as ThemeMode,
  getDesignSystemVariables,
} from "./design-system-utils";

import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

import { DesignSystemPortalContext } from "./design-system-context";
import { getStylePaletteVariables } from "@/registry/styles-palette";
import { StyleName } from "@/registry/styles";

interface DesignSystemEnvironmentProps {
  children: ReactNode;

  style: StyleName;

  palette?: DesignSystemPalette;

  radius?: string;

  theme?: ThemeMode;

  className?: string;
}

function applyEnvironmentAttributes(
  element: HTMLElement,
  style: StyleName,
  theme: ThemeMode,
  variables: Record<string, string>
) {
  element.dataset.designSystem = style;
  element.dataset.theme = theme;

  element.classList.toggle("dark", theme === "dark");
  element.classList.toggle("light", theme === "light");

  // Remove previously applied environment variables.
  const previousVariables =
    element.dataset.environmentVariables?.split(" ").filter(Boolean) ?? [];

  previousVariables.forEach((variable) => {
    element.style.removeProperty(variable);
  });

  // Apply current variables.
  Object.entries(variables).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });

  element.dataset.environmentVariables = Object.keys(variables).join(" ");
}

export function DesignSystemEnvironment({
  children,
  style,
  palette,
  radius,
  theme: themeProp,
  className,
}: DesignSystemEnvironmentProps) {
  const { resolvedTheme } = useTheme();

  const { activePalette, activeRadius } = useThemePaletteStore();

  const [previewPalette, setPreviewPalette] = useState<
    DesignSystemPalette | undefined
  >(palette);

  const [previewRadius, setPreviewRadius] = useState<string | undefined>(
    radius
  );

  const [previewTheme, setPreviewTheme] = useState<ThemeMode | undefined>();

  // Explicit theme prop takes priority.
  // Otherwise, use next-themes resolvedTheme.
  // const theme: ThemeMode = themeProp ?? (resolvedTheme as ThemeMode) ?? "light";
  // const theme: ThemeMode =
  //   themeProp ?? previewTheme ?? (resolvedTheme as ThemeMode) ?? "light";
  const theme: ThemeMode =
    themeProp ?? previewTheme ?? (resolvedTheme as ThemeMode) ?? "light";

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  const portalContainerRef = useRef<HTMLElement | null>(null);

  const variables = useMemo(
    () =>
      getDesignSystemVariables({
        style,
        palette,
        radius,
        theme,
      }),
    [style, palette, radius, theme]
  );

  // Create a dedicated portal root for this environment.
  useEffect(() => {
    const element = document.createElement("div");

    element.className = cn(
      "design-system-portal-root",
      getDesignSystemClasses(style)
    );

    document.body.appendChild(element);

    portalContainerRef.current = element;

    setPortalContainer(element);

    return () => {
      element.remove();

      portalContainerRef.current = null;

      setPortalContainer(null);
    };
  }, []);

  // Keep portal root classes synchronized with the design system.
  useEffect(() => {
    const element = portalContainerRef.current;

    if (!element) return;

    element.className = cn(
      "design-system-portal-root",
      getDesignSystemClasses(style)
    );
  }, [style]);

  // const environmentVariables = useMemo(
  //   () => ({
  //     ...variables,
  //     ...paletteVariables,
  //     ...(activeRadius
  //       ? {
  //           [`--${getStyleVariablesPrefix(style)}-radius`]: activeRadius,
  //         }
  //       : {}),
  //   }),
  //   [variables, paletteVariables, activeRadius, style]
  // );

  // const environmentVariables = useMemo(() => {
  //   return {
  //     ...variables,
  //     ...getStylePaletteVariables({
  //       style,
  //       palette: palette ?? activePalette,
  //       theme,
  //       radius: radius ?? activeRadius ?? undefined,
  //     }),
  //   };
  // }, [variables, style, palette, activePalette, theme, radius, activeRadius]);

  const selectedPalette = previewPalette ?? palette ?? activePalette;

  const selectedRadius = previewRadius ?? radius ?? activeRadius ?? undefined;

  const paletteVariables = useMemo(() => {
    if (!selectedPalette) return {};

    return getStylePaletteVariables({
      style,
      palette: selectedPalette,
      theme,
      radius: selectedRadius,
    });
  }, [style, selectedPalette, theme, selectedRadius]);

  const environmentVariables = useMemo(
    () => ({
      ...variables,
      ...paletteVariables,
    }),
    [variables, paletteVariables]
  );

  // useEffect(() => {
  //   function handleMessage(event: MessageEvent) {
  //     if (event.origin !== window.location.origin) return;

  //     if (event.data?.type !== "THEME_UPDATE") return;

  //     const { palette, radius } = event.data;

  //     // Update your palette store here.
  //     // Or directly update the environment CSS variables.
  //   }

  //   window.addEventListener("message", handleMessage);

  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  // useEffect(() => {
  //   function handleMessage(event: MessageEvent) {
  //     if (event.origin !== window.location.origin) return;

  //     if (event.data?.type !== "THEME_UPDATE") return;

  //     const { palette, radius, theme } = event.data;

  //     if (palette !== undefined) {
  //       setPreviewPalette(palette);
  //     }

  //     if (radius !== undefined) {
  //       setPreviewRadius(radius);
  //     }

  //     // Inside handleMessage:
  //     if (theme) {
  //       setPreviewTheme(theme);
  //     }
  //   }

  //   window.addEventListener("message", handleMessage);

  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;

      if (event.data?.type !== "THEME_UPDATE") return;

      const { palette, radius, theme } = event.data;

      if (palette !== undefined) {
        setPreviewPalette(palette);
      }

      if (radius !== undefined) {
        setPreviewRadius(radius);
      }

      if (theme !== undefined) {
        setPreviewTheme(theme);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // Keep the portal root synchronized with the environment.
  useLayoutEffect(() => {
    const element = portalContainerRef.current;

    if (!element) return;

    applyEnvironmentAttributes(element, style, theme, environmentVariables);

    element.style.colorScheme = theme;
  }, [style, theme, environmentVariables]);

  const environmentStyle = {
    ...environmentVariables,
    colorScheme: theme,
  } as CSSProperties;

  return (
    <div
      data-design-system={style}
      data-theme={theme}
      className={cn(
        "design-system-environment",
        getDesignSystemClasses(style),
        theme === "dark" && "dark",
        theme === "light" && "light",
        className
      )}
      style={environmentStyle}
    >
      <DesignSystemPortalContext.Provider value={portalContainer}>
        {children}
      </DesignSystemPortalContext.Provider>
    </div>
  );
}
