"use client";

import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { STYLES, stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { mainPaletteColorsKeys } from "@/registry/registry-palettes";
import {
  getStyleRadius,
  getStyleVariablesPrefix,
} from "@/registry/styles-components";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export function StylePreview({
  className,
  s,
  ...props
}: {
  className?: string;
  s: string;
}) {
  const { pageExampleType } = useStyleStore();

  return (
    <StylePageExamplePreview
      id={pageExampleType || "dashboard"}
      styleProp={s}
      pageExampleTypeProp={pageExampleType || "dashboard"}
      hideBadge={true}
      className="overflow-auto"
      screenWidth
      {...props}
    />
  );
}

export function StylesPreviews({ className }: { className?: string }) {
  const { pageExampleType } = useStyleStore();

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6 xl:gap-y-20",
        className
      )}
    >
      {STYLES.filter((s) => s !== "default" && s !== "material").map(
        (style, index) => {
          const s = `--${getStyleVariablesPrefix(style)}-primary`;
          const c = `--${getStyleVariablesPrefix(style)}`;
          return (
            <StyleFontWrapper
              sStyle={style}
              className="group relative"
              style={{
                borderRadius: getStyleRadius(style),
              }}
            >
              {/* <div
                className="absolute top-0 left-0 z-10 flex size-144 h-[90%] w-full items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:h-full group-hover:w-full group-hover:opacity-10 group-hover:blur-3xl dark:opacity-10 dark:blur-3xl"
                style={{
                  backgroundColor: `var(${s})`,
                }}
              ></div> */}
              <div className="group relative z-20 flex max-h-250 min-h-120 w-full flex-col gap-2 overflow-x-auto overflow-y-hidden lg:gap-4">
                <div className="z-20 flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="3xl/medium"
                      className="tracking-tight capitalize"
                    >
                      {style}{" "}
                      <span className="text-2xl font-normal italic">Style</span>
                    </Typography>{" "}
                    <Link
                      href={`/styles/${style}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${style} style`}
                      className="group/link p-2 hover:bg-transparent/60 hover:backdrop-blur-xl"
                    >
                      <ArrowRightIcon className="text-foreground/40 group-hover/link:text-foreground size-4 group-hover/link:-rotate-45" />
                      <span className="sr-only"></span>
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2">
                      <StyleCssWrapper
                        key={style + index}
                        className="inline-flex"
                      >
                        <RichBadge
                          variant="neutral"
                          className="rounded-none capitalize"
                        >
                          Palette
                        </RichBadge>
                      </StyleCssWrapper>

                      <div className="flex border">
                        {mainPaletteColorsKeys.map((color, index) => (
                          <div
                            key={`light-${color}`}
                            className={cn("size-6 xl:w-7", {
                              "rounded-l-none": index === 0,
                              "rounded-r-none":
                                index === mainPaletteColorsKeys.length - 1,
                            })}
                            style={{
                              // backgroundColor: `oklch(${palette.light[color]})`,
                              backgroundColor: `var(${c}-${color})`,
                            }}
                            title={`Light ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <StylePageExamplePreview
                    id={pageExampleType || "dashboard"}
                    styleProp={style}
                    pageExampleTypeProp={pageExampleType || "dashboard"}
                    hideBadge={true}
                    className="overflow-auto"

                    screenWidth
                  />
                </div>
              </div>
            </StyleFontWrapper>
          );
        }
      )}
    </div>
  );
}

export function StylesPreviewCards({ className }: { className?: string }) {
  const { pageExampleType } = useStyleStore();

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6",
        className
      )}
    >
      {STYLES.filter((s) => s !== "default" && s !== "material").map(
        (style, index) => {
          const s = `--${getStyleVariablesPrefix(style)}-primary`;
          const c = `--${getStyleVariablesPrefix(style)}`;
          return (
            <StyleCssWrapper key={style + index} className="reltative">
              <StyleFontWrapper sStyle={style}>
                <div className="to-accent group relative flex max-h-120 min-h-120 w-full flex-col gap-2 overflow-hidden border bg-linear-to-r from-transparent p-6">
                  <div className="z-20 flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Typography
                        variant="3xl/medium"
                        className="tracking-tight capitalize"
                      >
                        {style}{" "}
                        <span className="text-2xl font-normal italic">
                          Style
                        </span>
                      </Typography>{" "}
                      <Link
                        href={`/styles/${style}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${style} style`}
                        className="group/link p-2 hover:bg-transparent/60 hover:backdrop-blur-xl"
                      >
                        <ArrowRightIcon className="text-foreground/40 group-hover/link:text-foreground size-4 group-hover/link:-rotate-45" />
                        <span className="sr-only"></span>
                      </Link>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2">
                        <StyleCssWrapper
                          key={style + index}
                          className="inline-flex"
                        >
                          <RichBadge
                            variant="neutral"
                            className="rounded-none capitalize"
                          >
                            Palette
                          </RichBadge>
                        </StyleCssWrapper>

                        <div className="flex border">
                          {mainPaletteColorsKeys.map((color, index) => (
                            <div
                              key={`light-${color}`}
                              className={cn("size-6 xl:w-7", {
                                "rounded-l-none": index === 0,
                                "rounded-r-none":
                                  index === mainPaletteColorsKeys.length - 1,
                              })}
                              style={{
                                // backgroundColor: `oklch(${palette.light[color]})`,
                                backgroundColor: `var(${c}-${color})`,
                              }}
                              title={`Light ${color}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative -ml-2">
                    <div
                      className="absolute top-0 left-0 z-10 flex size-144 w-full items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-120 group-hover:opacity-50 group-hover:blur-2xl dark:opacity-80 dark:blur-3xl"
                      style={{
                        backgroundColor: `var(${s})`,
                      }}
                    ></div>
                    <StylePageExamplePreview
                      id={pageExampleType || "dashboard"}
                      styleProp={style}
                      pageExampleTypeProp={pageExampleType || "dashboard"}
                      hideBadge={true}
                      className="absolute top-0 left-0 z-20 rounded-none"
                    />
                  </div>
                </div>
              </StyleFontWrapper>
            </StyleCssWrapper>
          );
        }
      )}
    </div>
  );
}

export function StylePreviewCard({ style }: { style: string }) {
  const { pageExampleType } = useStyleStore();

  const s = `--${getStyleVariablesPrefix(style)}-primary`;
  const c = `--${getStyleVariablesPrefix(style)}`;

  return (
    <StyleCssWrapper key={style} className="reltative rounded-xl">
      <StyleFontWrapper sStyle={style}>
        <div className="to-accent group relative flex max-h-120 min-h-120 w-full flex-col gap-2 overflow-hidden rounded-xl border bg-linear-to-r from-transparent p-6">
          <div className="z-20 flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Typography
                variant="3xl/semibold"
                className="tracking-tight capitalize"
              >
                {style}
              </Typography>{" "}
              <Link
                href={`/styles/${style}`}
                className="group/link rounded p-2 hover:bg-transparent/60 hover:backdrop-blur-xl"
              >
                <ArrowRightIcon className="text-foreground/40 group-hover/link:text-foreground size-4 group-hover/link:-rotate-45" />
                <span className="sr-only">View {style} style</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2">
                <StyleCssWrapper
                  key={style}
                  className="inline-flex rounded-full"
                >
                  <RichBadge
                    variant="neutral"
                    className="capitalize backdrop-blur-xl"
                  >
                    Palette
                  </RichBadge>
                </StyleCssWrapper>

                <div className="flex rounded-sm border">
                  {mainPaletteColorsKeys.map((color, index) => (
                    <div
                      key={`light-${color}`}
                      className={cn("size-6 xl:w-7", {
                        "rounded-l-sm": index === 0,
                        "rounded-r-sm":
                          index === mainPaletteColorsKeys.length - 1,
                      })}
                      style={{
                        // backgroundColor: `oklch(${palette.light[color]})`,
                        backgroundColor: `var(${c}-${color})`,
                      }}
                      title={`Light ${color}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative -ml-2">
            <div
              className="absolute top-0 left-0 z-10 flex size-144 items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-120 group-hover:opacity-50 group-hover:blur-2xl dark:opacity-80 dark:blur-3xl"
              style={{
                backgroundColor: `var(${s})`,
              }}
            ></div>
            <StylePageExamplePreview
              id={pageExampleType || "dashboard"}
              styleProp={style as any}
              pageExampleTypeProp={pageExampleType || "dashboard"}
              hideBadge={true}
              className="absolute top-0 left-0 z-20 w-[70vw] max-w-[70vw]"
            />
          </div>
        </div>
      </StyleFontWrapper>
    </StyleCssWrapper>
  );
}

export function StylesPagesExamplesPreviews() {
  const { pageExampleType } = useStyleStore();

  return (
    <div className="grid gap-10">
      {stylesDataList
        .filter((styleData) => styleData.name !== "default")
        .map((styleData, index) => {
          const s = `--${getStyleVariablesPrefix(styleData.name)}-primary`;
          const c = `--${getStyleVariablesPrefix(styleData.name)}`;

          return (
            <div key={styleData.name + index}>
              <div className="relative grid grid-cols-1 gap-4 lg:gap-6 xl:grid-cols-7">
                <div className="relative xl:col-span-2">
                  <div className="sticky top-20 z-10 space-y-8 p-4 pt-10 xl:ml-auto xl:max-w-md xl:p-0 xl:px-6 xl:pt-28">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <Typography
                          as={"h1"}
                          variant="4xl/semibold"
                          className="tracking-tighter capitalize"
                        >
                          {/* @ts-ignore */}
                          {styleData.title}{" "}
                          <span className="text-3xl font-normal italic">
                            Style
                          </span>
                        </Typography>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col gap-2">
                            <p className="text-muted-foreground text-sm">
                              Default {styleData.title} Palette
                            </p>
                            <div className="flex w-fit border">
                              {mainPaletteColorsKeys.map((color, index) => (
                                <div
                                  key={`light-${color}`}
                                  className={cn("size-7", {
                                    "rounded-l-none": index === 0,
                                    "rounded-r-none":
                                      index ===
                                      mainPaletteColorsKeys.length - 1,
                                  })}
                                  style={{
                                    // backgroundColor: `oklch(${palette.light[color]})`,
                                    backgroundColor: `var(${c}-${color})`,
                                  }}
                                  title={`${color}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid overflow-scroll p-4 py-0 lg:py-4 xl:col-span-5">
                  <StylePageExamplePreview
                    id="dashboard"
                    styleProp={styleData.name}
                    pageExampleTypeProp={pageExampleType || "dashboard"}
                    hideBadge={true}
                    className="overflow-auto"
                    screenWidth
                    // iframeClassName="min-h-[30rem] md:min-h-[33rem] lg:min-h-[39rem] xl:min-h-[45rem] xl:max-h-[45rem]"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export function StylesExamples() {
  const { pageExampleType } = useStyleStore();

  return (
    <>
      {stylesDataList
        .filter((_styleData) => _styleData.name !== "default")
        .map((styleData, index) => {
          // const baseTopSpace = 128;
          // const baseDiffSpace = 96;
          // const topStickySpace =
          //   index === 0
          //     ? baseTopSpace
          //     : index * baseDiffSpace + baseTopSpace;
          // const tClass = `top-[${topStickySpace}px]`;
          return (
            <StylePageExamplePreview
              key={styleData.title + styleData.name + index}
              id="dashboard"
              styleProp={styleData.name}
              pageExampleTypeProp={pageExampleType || "dashboard"}
              hideBadge={true}
              className={`sticky top-32 overflow-auto`}
              coloredEdge
            />
          );
        })}
    </>
  );
}
