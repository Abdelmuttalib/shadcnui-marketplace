import "./globals.css";
import "./style-vega.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { DevTools } from "@/components/dev-tools";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { AppProviders } from "./app-providers";
import { StaggeredNavFiles } from "@/components/landing/staggered-nav-files";

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
    <html
      lang="en"
      className={cn("font-sans antialiased", fontVariables)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    try {
                      if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.querySelector('meta[name="theme-color"]').setAttribute('content')
                      }
                    } catch (_) {}
                  `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppProviders>
          <NuqsAdapter>
            <div className="relative min-h-dvh">{children}</div>
          </NuqsAdapter>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
