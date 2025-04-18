import "./globals.css";
import "./themes.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { DevTools } from "@/components/dev-tools";
import { NextThemesProvider } from "@/components/next-themes-provider";
import {
  ThemeCustomizerWrapper,
  ThemePaletteProvider,
} from "@/components/theme-customizer";
import { Toaster } from "@/components/ui/toaster";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "shadcn ui marketplace",
    template: "%s | shadcn ui marketplace",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcn-ui-marketplace.com",
    title: "shadcn ui marketplace",
    description:
      "shadcn ui marketplace, A marketplace for shadcn ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. Going beyond default and new york shadcn ui styles.",
    images: [
      {
        url: "https://shadcn-ui-marketplace.com/images/og-image-2.png",
        width: 1919,
        height: 963,
        alt: "shadcn ui marketplace, shadcn ui styles",
      },
    ],
  },
  description:
    "shadcn ui marketplace, A marketplace for shadcn-ui components styles kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, and styles. Going beyond default and new york shadcn ui styles.",
  metadataBase: new URL("https://shadcn-ui-marketplace.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <NextThemesProvider>
        <ThemeCustomizerWrapper>
          <body
            className={`${fontVariables} font-sans antialiased`}
            // style={{
            //   fontFamily: "Satoshi, sans-serif",
            // }}
          >
            <DevTools />
            <Toaster />
            <Analytics />
            {children}
          </body>
        </ThemeCustomizerWrapper>
      </NextThemesProvider>
    </html>
  );
}
