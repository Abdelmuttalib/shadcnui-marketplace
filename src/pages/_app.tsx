import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeColorWrapper } from "@/components/theme-color-wrapper";
import { useThemeColor } from "@/hooks/use-theme-color";
import { UICustomizer } from "@/components/ui-customizer";

export default function App({ Component, pageProps }: AppProps) {
  const [themeColor] = useThemeColor();

  return (
    <ThemeColorWrapper defaultTheme={themeColor.colorName}>
      <NextThemeProvider
        defaultTheme="system"
        attribute="class"
        themes={["light", "dark"]}
      >
        <UICustomizer />
        <Component {...pageProps} />
      </NextThemeProvider>
    </ThemeColorWrapper>
  );
}
