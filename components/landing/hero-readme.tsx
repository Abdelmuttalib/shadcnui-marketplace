"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExamplePreview } from "../common/example-preview";
import { siteConfig } from "@/config/site-config";
import Glow from "../ui/glow";
import { StyleSelectorInline } from "../common/style-select";
import { ExampleSelectorInline } from "../common/example-preview/example-selector";
import { PaletteSelectorInline } from "../common/theme-palette-select";
import { InstallDialog } from "@/app/(www)/customize/components/install-dialog";

export function HeroReadMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className="relative isolate flex w-full flex-col"
    >
      <div className="relative isolate">
        <Glow
          variant="top"
          className="animate-appear-zoom opacity-100 delay-1000"
        />
      </div>
      <div className="no-scrollbar flex-1 overflow-x-hidden">
        <div className="p-4 py-2 sm:px-6">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="fade-bottom no-scrollbar flex flex-col gap-4 pt-6 pb-0"
          >
            <div className="flex flex-col justify-between gap-6 px-px py-2 md:flex-row md:items-center">
              <div className="flex flex-wrap items-center gap-1 backdrop-blur-2xl md:inline-flex md:flex-row md:gap-0 md:border md:border-white/20 md:bg-white/10 md:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)] md:dark:border-white/10 md:dark:bg-white/[0.035]">
                <div className="flex md:items-center">
                  <StyleSelectorInline />
                </div>

                <div className="bg-border/70 md:h-5 md:w-px dark:bg-white/10" />

                <div className="flex md:items-center">
                  <ExampleSelectorInline />
                </div>

                <div className="bg-border/70 md:h-5 md:w-px dark:bg-white/10" />

                <div className="flex md:items-center">
                  <PaletteSelectorInline />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <InstallDialog size={"sm"} />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="overflow-hidden" suppressHydrationWarning>
                <div className="glass-4 z-20 p-2">
                  <ExamplePreview aspectRatio="2528 / 1440" />
                </div>

                <div
                  className="pointer-events-none absolute top-0 bottom-0 z-0"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100vw",
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
                    <svg className="h-full w-full">
                      <filter id="infra-grain">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.85"
                          numOctaves="4"
                          stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                      </filter>
                      <rect
                        width="100%"
                        height="100%"
                        filter="url(#infra-grain)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-10 overflow-hidden pt-8 pb-16">
              {/* Dot grid */}
              <div
                className="pointer-events-none absolute inset-0 select-none"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
                  backgroundSize: "24px 24px",
                  opacity: 0.03,
                }}
              />

              <div className="relative space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={siteConfig.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:bg-foreground/4 text-foreground/50 dark:text-foreground/50 flex items-center gap-1.5 rounded-sm px-2.5 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[11px] -translate-y-px"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="font-mono text-xs">2 stars</span>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                  <Link
                    href="/styles"
                    className="inline-flex items-center gap-1.5 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-100 transition-colors hover:opacity-90 sm:px-5 sm:text-sm dark:bg-neutral-100 dark:text-neutral-900"
                  >
                    Explore Styles
                  </Link>
                  <Link
                    href="/customize"
                    className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors sm:px-5 sm:text-sm dark:text-neutral-300"
                  >
                    <span
                      className="absolute inset-0 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 4px,
                  currentColor 4px,
                  currentColor 5px
                )`,
                      }}
                    />
                    <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute top-0 -right-[6px] -left-[6px] h-px transition-colors" />
                    <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -right-[6px] bottom-0 -left-[6px] h-px transition-colors" />
                    <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] -bottom-[6px] left-0 w-px transition-colors" />
                    <span className="bg-foreground/20 group-hover:bg-foreground/30 absolute -top-[6px] right-0 -bottom-[6px] w-px transition-colors" />
                    <span className="text-foreground/40 dark:text-foreground/50 absolute -right-[6px] -bottom-[6px] translate-x-1/2 translate-y-1/2 font-mono text-[8px] leading-none select-none">
                      +
                    </span>
                    <span className="relative">Customize Your UI</span>
                  </Link>
                </div>
              </div>

              <div className="mt-10">
                {" "}
                <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
                  Built by{" "}
                  <a
                    href={siteConfig.links.creator.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:decoration-brand hover:text-brand font-medium underline underline-offset-4"
                  >
                    Abdelmuttalib
                  </a>{" "}
                  . The source code is available on{" "}
                  <a
                    href={siteConfig.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground hover:decoration-foreground font-medium underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  .
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.div>
  );
}
