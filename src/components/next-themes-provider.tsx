"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function NextThemesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
      defaultTheme="system"
      attribute="class"
      themes={["light", "dark"]}
    >
      {children}
    </NextThemeProvider>
  );
}
