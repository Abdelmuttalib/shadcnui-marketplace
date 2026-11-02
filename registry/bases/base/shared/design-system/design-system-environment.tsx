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

import { getDesignSystemClasses } from "./design-system-utils";

import { cn } from "cn";

import { Style } from "@/hooks/use-style-store";

import {
  DesignSystemPalette,
  DesignSystemTheme as ThemeMode,
  getDesignSystemVariables,
} from "./design-system-utils";

import { DesignSystemPortalContext } from "./design-system-context";

interface DesignSystemEnvironmentProps {
  children: ReactNode;

  style: Style;

  palette?: DesignSystemPalette;

  radius?: string;

  theme?: ThemeMode;

  className?: string;
}

function applyEnvironmentAttributes(
  element: HTMLElement,
  style: Style,
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
  theme = "light",
  className,
}: DesignSystemEnvironmentProps) {
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

  useEffect(() => {
    const element = portalContainerRef.current;

    if (!element) return;

    element.className = cn(
      "design-system-portal-root",
      getDesignSystemClasses(style)
    );
  }, [style]);

  // Keep the portal root synchronized with the environment.
  useLayoutEffect(() => {
    const element = portalContainerRef.current;

    if (!element) return;

    applyEnvironmentAttributes(element, style, theme, variables);

    element.style.colorScheme = theme;
  }, [style, theme, variables]);

  const environmentStyle = {
    ...variables,
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
