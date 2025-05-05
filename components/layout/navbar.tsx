"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

import { PageContainer } from "@/components/common/page-container";
import { ThemeToggle } from "@/components/common/theme";
import { UserMenu } from "@/components/common/user-menu";

import { LogoSvg } from "../logo-svg";
import { MainNavLinks } from "./main-nav-links";

function Banner({
  setShowBanner,
}: {
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-accent px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-primary opacity-10"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-primary opacity-10"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-foreground">
          <strong className="font-semibold">Tailwind v4 support</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          coming soon.
        </p>
        {/* <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a> */}
      </div>
      <div className="flex flex-1 justify-end lg:pr-10">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setShowBanner(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}

export function Navbar() {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <>
      {/* {showBanner ? <Banner setShowBanner={setShowBanner} /> : null} */}
      <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-background/[0.7] backdrop-blur-sm">
        <PageContainer>
          <nav className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1 pr-2 text-lg font-medium tracking-tight"
              >
                <span className="mb-1">
                  <LogoSvg className="size-6" />
                </span>
                <span>
                  shadcn{" "}
                  <span className="bg-gradient-to-r from-foreground/90 to-primary bg-clip-text font-normal italic text-transparent dark:to-foreground/30">
                    marketplace
                    {/* styles */}
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden lg:flex">
                <ul className="inline-flex gap-2">
                  <MainNavLinks />
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <UserMenu />
            </div>
          </nav>
        </PageContainer>
      </header>
    </>
  );
}
