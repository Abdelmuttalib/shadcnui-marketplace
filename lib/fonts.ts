import { cn } from "cn";
import {
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

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

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
  variable: "--font-carbon",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const ubuntu = Ubuntu({
  variable: "--font-spectrum",
  subsets: ["latin"],
  // weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  weight: ["300", "400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontVariables = cn(
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
