import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./carbon.css";
import "./default.css";
import "./material.css";
import { ThemeButton } from "@/components/theme-button";
import { StyleProvider } from "@/hooks/use-style";
import { ThemeColorWrapper } from "@/components/theme-color-wrapper";
import { NextThemesProvider } from "@/components/next-themes-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
        url: "https://shadcn-ui-marketplace.com/images/og-image.png",
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
      <ThemeColorWrapper>
        <NextThemesProvider>
          <StyleProvider>
            <body
              className={`${inter.variable} ${ibmPlexMono.variable} antialiased font-sans`}
            >
              <div className="fixed right-2 top-2 z-[9999]">
                <ThemeButton />
              </div>
              <TailwindIndicator />
              {children}
              <Analytics />
            </body>
          </StyleProvider>
          <Analytics />
        </NextThemesProvider>
      </ThemeColorWrapper>
    </html>
  );
}

function TailwindIndicator() {
  return (
    <div className="fixed bottom-2 right-2 z-[9999] text-sm">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
