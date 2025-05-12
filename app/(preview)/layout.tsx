import { DevTools } from "@/components/dev-tools";
import { NextThemesProvider } from "@/components/next-themes-provider";
import { fontVariables } from "@/lib/fonts";

export default function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NextThemesProvider>
        <div className={`${fontVariables} font-sans antialiased`}>
          <DevTools />
          {children}
        </div>
      </NextThemesProvider>
    </div>
  );
}
