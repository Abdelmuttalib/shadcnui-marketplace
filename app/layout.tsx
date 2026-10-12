import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { DevTools } from "@/components/dev-tools";
import { NextThemesProvider } from "@/components/next-themes-provider";
import { ThemeCustomizerWrapper } from "@/components/theme-customizer";
import { Toaster } from "@/components/ui/sonner";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "shadcn ui marketplace",
    template: "%s | shadcn ui marketplace",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcnmarketplace.com",
    title: "shadcn ui marketplace",
    description:
      "shadcn ui marketplace, a marketplace for shadcn ui styles, blocks, palettes, components, and styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, blocks, and palettes. .",
    images: [
      {
        url: "https://shadcn-ui-marketplace.com/images/og.png",
        width: 1919,
        height: 963,
        alt: "shadcn ui marketplace, shadcn ui styles",
      },
    ],
  },
  description:
    "shadcn ui marketplace, a marketplace for shadcn ui styles, blocks, palettes, components, and styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, blocks, and palettes. .",
  metadataBase: new URL("https://shadcnmarketplace.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextThemesProvider>
        <ThemeCustomizerWrapper />
        <body className={`${fontVariables} font-sans antialiased`}>
          <DevTools />
          <Toaster />
          <Analytics />
          {children}
        </body>
      </NextThemesProvider>
    </html>
  );
}
