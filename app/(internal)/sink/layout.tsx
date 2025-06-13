import { ThemeToggle } from "@/components/common/theme";
import { DevTools } from "@/components/dev-tools";

export default function InternalSinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`font-sans antialiased`}>
      <DevTools />
      {children}
      <div className="absolute right-2 top-2 z-20 flex items-center justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
