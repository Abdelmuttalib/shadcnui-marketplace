import type { ReactNode } from "react";

import { DevTools } from "@/components/dev-tools";

import { SinkStyleNav } from "./components/sink-style-nav";

export default function SinkLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased">
      <DevTools />

      <header className="bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
        <div className="flex h-12 items-center px-4">
          <a href="/sink" className="font-semibold tracking-tight">
            Sink
          </a>

          <span className="text-muted-foreground ml-2 text-xs">
            Style Explorer
          </span>
        </div>

        <SinkStyleNav />
      </header>

      {children}
    </div>
  );
}
