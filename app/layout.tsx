import "./globals.css";
import "./carbon.css";
import "./default.css";
import "./material.css";
import "./catalyst.css";
import "./linear.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  //
  IBM_Plex_Sans,
  Inter,
  Roboto,
} from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NextThemesProvider } from "@/components/next-themes-provider";
import { ThemeButton } from "@/components/theme-button";
import { ThemeColorWrapper } from "@/components/theme-color-wrapper";
import { StyleProvider } from "@/hooks/use-style";
import { Toaster } from "@/registry/carbon/ui/toaster";

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

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-carbon",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
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
      <ThemeColorWrapper>
        <NextThemesProvider>
          <StyleProvider>
            <body
              className={`${inter.variable} ${ibmPlexMono.variable} relative flex min-h-screen flex-col font-sans antialiased ${ibmPlexSans.variable} ${roboto.variable}`}
            >
              <DevTools />
              <Toaster />
              <Navbar />
              <main className="grid h-full flex-1 gap-72 pb-24 md:pb-40">
                {children}
              </main>
              <Footer />
              <Analytics />
            </body>
          </StyleProvider>
          <Analytics />
        </NextThemesProvider>
      </ThemeColorWrapper>
    </html>
  );
}

function DevTools() {
  return (
    <>
      <ThemeButtonWrapper />
      <TailwindIndicator />
    </>
  );
}

function ThemeButtonWrapper() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed right-2 top-2 z-[9999]">
      <ThemeButton />
    </div>
  );
}

function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

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
