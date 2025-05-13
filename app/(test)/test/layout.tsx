import { DevTools } from "@/components/dev-tools";
import { fontVariables } from "@/lib/fonts";

export default function StyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} p-6 font-sans antialiased dark:bg-[#1E1E1C] dark:text-[#E5D8BE]`}
      >
        <DevTools />
        {children}
      </body>
    </html>
  );
}
