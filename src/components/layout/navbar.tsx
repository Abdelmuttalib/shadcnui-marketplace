"use client";

import Link from "next/link";

import { ThemeToggle } from "@/components/common/theme";

import { PageContainer } from "../common/page-container";
import { MainNavLinks } from "./main-nav-links";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
      <PageContainer>
        <nav className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="pr-2 text-lg font-medium tracking-tight">
              shadcn{" "}
              <span className="bg-gradient-to-r from-foreground/90 to-primary bg-clip-text font-normal italic text-transparent dark:to-foreground/30">
                styles
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex">
              <ul className="inline-flex gap-2">
                <MainNavLinks />
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* <UserMenu /> */}
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}
