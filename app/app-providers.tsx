"use client";

import { NextThemesProvider } from "@/components/next-themes-provider";
import { ThemeCustomizerWrapper } from "@/components/theme-customizer";
import { Toaster } from "@/components/ui/sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider>
      <ThemeCustomizerWrapper />
      <Toaster />
      {children}
    </NextThemesProvider>
  );
}
