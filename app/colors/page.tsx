"use client";

import Link from "next/link";
import { useState } from "react";

import { ComponentLoader } from "@/components/component-loader";
import { MainNavLinks } from "@/components/draft";
import ThemeSwitcher from "@/components/theme-select";

import { ColorPicker } from "./components/color-picker";

export default function ColorsPage() {
  const [value, setValue] = useState("#FFFFFF");
  return (
    <PageLayout>
      <div className="mx-auto w-full max-w-screen-2xl sm:px-4">
        <ColorPicker value={value} onChange={setValue} />
      </div>
      <ComponentLoader style="carbon" />
      <ComponentLoader style="material" />
    </PageLayout>
  );
}

function PageLayout({ children }: { children?: React.ReactNode }) {
  // const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <div
      className="relative"
      style={
        {
          // @ts-ignore
          // ["--border"]: "0.623 0.214 219.815" /* oklch(0.623 0.214 219.815) */,
          // ["--background"]: "0.1822 0 0" /* oklch(18.22% 0 0) */,
        }
      }
    >
      <div className="relative z-20 flex flex-col bg-background">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="flex w-full items-center justify-between gap-2 px-4 sm:container sm:mx-auto">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-4">
                <nav className="hidden sm:flex">
                  <ul className="inline-flex gap-6">
                    <MainNavLinks />
                  </ul>
                </nav>
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </header>
        <div className="mx-auto flex w-full max-w-screen-2xl sm:px-4">
          <div className="hidden min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" />
          <div className="grid h-full flex-1 gap-72 pb-24 md:pb-40">
            {children}
          </div>
          <div className="hidden min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}
