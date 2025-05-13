import { DevTools } from "@/components/dev-tools";
import { fontVariables } from "@/lib/fonts";

export default function StyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} font-sans antialiased`}>
        <DevTools />
        {children}
      </body>
    </html>
  );
}
