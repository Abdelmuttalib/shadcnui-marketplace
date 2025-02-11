"use client";

import { useThemeColor } from "@/hooks/use-theme-color";
import { useEffect } from "react";

interface ThemeColorWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeColorWrapper({ children }: ThemeColorWrapperProps) {
  const [themeColor] = useThemeColor();

  useEffect(() => {
    if (document) {
      // Remove existing theme color classes and add the new one
      document.documentElement.classList.forEach((className) => {
        if (className.startsWith("theme-")) {
          document.documentElement.classList.remove(className);
        }
      });
      document.documentElement.classList.add(`theme-${themeColor.colorName}`);
    }
  }, [themeColor]);

  return <>{children}</>;
}
