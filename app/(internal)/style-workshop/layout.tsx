import { DevTools } from "@/components/dev-tools";

export default function StyleWorkshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <DevTools />
      {children}
    </div>
  );
}
