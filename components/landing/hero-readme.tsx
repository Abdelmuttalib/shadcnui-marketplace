"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ContributorInfo } from "@/lib/community-stats";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import {
  DatabaseSection,
  IntegrationsSection,
  PluginEcosystem,
  ServerClientTabs,
  SocialProvidersSection,
} from "./framework-sections";
import { TrustedBy } from "./trusted-by";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { ThemePaletteSelect } from "../common/theme-palette-select";
import { Button } from "../ui/button";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { ExamplePreview } from "../common/example-preview";
import { siteConfig } from "@/config/site-config";
import { StylePaletteCommand } from "../style-palette-command";
import { Braces, Code, CodeXml } from "lucide-react";
import {
  ExampleSelector,
  ExampleSelectorInline,
} from "../common/example-preview/example-selector";
import { DEFAULT_STYLE } from "@/registry/styles";

const EMPTY_CONTRIBUTORS: ContributorInfo[] = [];

type CommunityHeroStats = {
  npmDownloads: number;
  npmWeeklyHistory: number[];
  githubStars: number;
  contributors: number;
};

/**
 * Below-the-fold media (contributor avatars, the demo video) never competes
 * with the initial load. Once the page has loaded, a fast connection fetches
 * it right away so it's ready before anyone scrolls to it; slow or
 * data-saver connections wait until it's close to the viewport.
 */
function useBelowFoldMedia() {
  const [state, setState] = useState({ loaded: false, prefetch: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onLoad = () => {
      const prefetch = !isSlowConnection();
      // Give the browser a beat after `load` before starting any fetches.
      timer = setTimeout(() => setState({ loaded: true, prefetch }), 300);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timer);
    };
  }, []);

  return state;
}

function isSlowConnection() {
  // Chromium only; Safari and Firefox don't expose the Network Information API.
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType) {
    return /^(slow-2g|2g|3g)$/.test(connection.effectiveType);
  }
  // Everywhere else, judge by how long this page took to load.
  const [navigation] = performance.getEntriesByType(
    "navigation"
  ) as PerformanceNavigationTiming[];
  return (navigation?.loadEventStart || performance.now()) > 4000;
}

function ReadmeFooter() {
  const githubStars = 2;
  return (
    <div className="relative mt-10 overflow-hidden pt-8 pb-16">
      {/* Watermark logo */}
      <div
        className="pointer-events-none absolute top-1/2 -right-10 -translate-y-1/2 opacity-[0.03] select-none dark:opacity-[0.04]"
        aria-hidden="true"
      >
        <svg
          width="300"
          height="225"
          viewBox="0 0 60 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
            className="fill-foreground"
          />
        </svg>
      </div>

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

      {/* CTA */}
      <div className="relative space-y-6">
        {/* <p className="text-foreground/60 dark:text-foreground/50 text-center text-lg tracking-tight text-balance">
          Roll your own auth with confidence in minutes.
        </p> */}

        <div className="flex items-center justify-center gap-2">
          {githubStars > 0 && (
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
                <span className="font-mono text-xs">{githubStars} stars</span>
              </div>
            </a>
          )}
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
    </div>
  );
}

export function HeroReadMe() {
  const { style, setStyle } = useStyleStore();

  function onStyleChange(e: any) {
    setStyle(e);
  }

  const defaultStyle = DEFAULT_STYLE.name;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className="flex w-full flex-col"
    >
      {/* Markdown content */}
      <div className="no-scrollbar flex-1 overflow-x-hidden">
        <div className="p-5 lg:px-8 lg:pt-20">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="no-scrollbar pb-0"
          >
            {/* <h1 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
              README
              <span className="bg-foreground/15 h-px flex-1" />
            </h1>

            <p className="text-foreground/80 mb-4 text-sm leading-relaxed sm:mb-4 sm:text-[15px]">
              Explore multiple interpretations of{" "}
              <span className="text-foreground/90 dark:text-foreground/80 font-medium">
                shadcn/ui
              </span>
              , inspired by established design systems.
            </p> */}

            <div className="relative mt-2 pt-6 pb-2">
              {/* Grain noise background — full bleed with fade edges */}
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

              <div className="relative z-10 mb-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 xl:grid-cols-9">
                  <div className="xl:col-span-4">
                    <Select
                      defaultValue={style || defaultStyle}
                      onValueChange={onStyleChange}
                    >
                      <SelectTrigger
                        aria-label="Select style"
                        className={cn("w-full rounded-none")}
                      >
                        <SelectValue
                          placeholder="select a style"
                          className="text-muted-foreground"
                        >
                          <span className="text-muted-foreground">style:</span>{" "}
                          <span className="mr-2 font-medium capitalize">
                            {style || defaultStyle}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className={"rounded-none"}>
                        <SelectGroup>
                          {stylesDataList.map((style) => {
                            const hoverBgColor = `hover:bg-${getStyleVariablesPrefix(
                              style.name
                            )}-primary`;
                            const hoverTextColor = `hover:text-${getStyleVariablesPrefix(
                              style.name
                            )}-primary-foreground`;

                            const focusBgColor = `focus:bg-${getStyleVariablesPrefix(
                              style.name
                            )}-primary`;
                            const focusTextColor = `focus:text-${getStyleVariablesPrefix(
                              style.name
                            )}-primary-foreground`;

                            return (
                              <SelectItem
                                value={style.name}
                                key={style.name}
                                className={`${hoverBgColor} ${hoverTextColor} ${focusBgColor} ${focusTextColor} rounded-none capitalize`}
                              >
                                {style.title}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="xl:col-span-4">
                    <ThemePaletteSelect />
                  </div>
                  <div className="xl:col-span-1">
                    <Button
                      variant="outline"
                      className="w-full rounded-none font-mono font-normal uppercase"
                    >
                      <Code />
                      Get Code
                    </Button>
                  </div>
                </div>

                <div className="">
                  <StylePaletteCommand />
                </div>
              </div>

              {/* Dashboard video */}
              <div className="border-foreground/8 relative z-10 overflow-hidden border">
                <div className="bg-foreground/2 border-foreground/6 flex items-center justify-between border-b px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-foreground/10 size-2 rounded-full" />
                      <span className="bg-foreground/10 size-2 rounded-full" />
                      <span className="bg-foreground/10 size-2 rounded-full" />
                    </div>
                    <span className="text-foreground/30 ml-2 font-mono text-[10px]">
                      {style || defaultStyle}.shadcnmarketplace.com
                    </span>
                  </div>
                  <div>
                    <ExampleSelectorInline />
                  </div>
                </div>
                <div className="overflow-hidden" suppressHydrationWarning>
                  <ExamplePreview aspectRatio="2528 / 1440" />
                </div>
              </div>
            </div>

            <ReadmeFooter />
          </motion.article>
        </div>
      </div>
    </motion.div>
  );
}
