"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function NextThemesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      themes={["light", "dark"]}
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
