import { cn } from "cn";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Inter,
  Noto_Sans_Arabic as FontNotoSansArabic,
  Noto_Sans_Hebrew as FontNotoSansHebrew,
  Outfit,
  Poppins,
  Roboto,
  Ubuntu,
} from "next/font/google";

import localFont from "next/font/local";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Only the Square variant is used. Importing from `geist/font/pixel` would
// declare (and preload) all five Geist Pixel fonts on every page.
const GeistPixelSquare = localFont({
  src: "../assets/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel-square",
  weight: "500",
  fallback: ["Geist Mono", "ui-monospace", "monospace"],
  adjustFontFallback: false,
});

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

// const fontMono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   weight: ["400"],
// });

const fontNotoSansArabic = FontNotoSansArabic({
  subsets: ["arabic"],
  variable: "--font-ar",
});

const fontNotoSansHebrew = FontNotoSansHebrew({
  subsets: ["hebrew"],
  variable: "--font-he",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontVariables = cn(
  GeistPixelSquare.variable,

  fontSans.variable,
  fontHeading.variable,
  fontMono.variable,
  fontNotoSansArabic.variable,
  fontNotoSansHebrew.variable,

  inter.variable,
  ibmPlexMono.variable,
  ibmPlexSans.variable,
  roboto.variable,
  ubuntu.variable,
  poppins.variable,
  outfit.variable
);
