"use client";

import { ExamplesTabsNav } from "@/components/draft";

import { StylesPreviews } from "./components/styles-preview-cards";

import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/landing/footer";
import { HalftoneBackground } from "@/components/landing/halftone-bg";
import { SignatureMark } from "@/components/landing/signature-mark";
import type { CommunityStats } from "@/lib/community-stats";
import { blocksRegistry } from "@/config/blocks-registry";
import { BlockCategory } from "@/registry/registry-blocks";

import { LineFieldBackground } from "@/components/landing/line-field-bg";
import { PageExampleSelect } from "@/components/common/page-example-select";

function StylesHero() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex w-full flex-col justify-center pt-6 pb-6 md:pt-10 lg:h-full lg:pb-0"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
            <span className="text-foreground/60 text-sm">Styles</span>
          </div>
          <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 md:text-3xl xl:text-4xl dark:text-neutral-200">
            Styles
            <br />
            <span className="text-foreground/50"> & Design Systems.</span>
          </h1>
          {/* <p className="text-foreground/70 dark:text-foreground/50 max-w-[260px] text-sm leading-relaxed">
            Explore a collection of beautifully crafted shadcn/ui blocks.
          </p> */}
          <div className="relative w-full py-2">
            <PageExampleSelect />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StylesPageClient() {
  return (
    <div className="relative min-h-dvh pt-14 lg:pt-0">
      <div className="text-foreground relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side — Community hero */}
          <div className="border-foreground/6 relative hidden w-full shrink-0 overflow-clip border-b px-5 sm:px-6 lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[30%] lg:border-r lg:border-b-0 lg:px-10">
            <div className="hidden lg:block">
              <LineFieldBackground />
            </div>
            <StylesHero />
            <div className="absolute right-6 bottom-4 left-10 z-3">
              <SignatureMark compact />
            </div>
          </div>

          {/* Right side — Stats & platforms */}
          <div className="no-scrollbar relative w-full overflow-x-hidden lg:w-[70%]">
            <div className="space-y-8 px-5 lg:p-8 lg:pt-20">
              {/* Mobile header */}
              <div className="border-foreground/6 relative -mx-5 mb-5 overflow-hidden border-b px-5 sm:-mx-6 sm:px-6 lg:hidden">
                <HalftoneBackground />
                <div className="relative space-y-2 py-16">
                  <div className="flex items-center gap-1.5">
                    {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
                    <span className="text-foreground/60 text-sm">Styles</span>
                  </div>
                  <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 md:text-3xl xl:text-4xl dark:text-neutral-200">
                    Styles{" "}
                    <span className="text-foreground/50">& Design Systems</span>
                  </h1>
                  {/* <p className="text-foreground/70 dark:text-foreground/50 text-sm leading-relaxed">
                    Explore a collection of beautifully crafted shadcn/ui
                    blocks.
                  </p> */}
                </div>
                <div className="relative w-full py-2">
                  <ExamplesTabsNav />
                </div>
              </div>

              <h2 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
                Styles
                <span className="bg-foreground/15 h-px flex-1" />
              </h2>

              <div className="relative w-full py-2">
                <StylesPreviews className="xl:grid-cols-1" />
              </div>
            </div>
            <div className="lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
