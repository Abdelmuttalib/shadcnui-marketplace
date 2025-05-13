"use client";

import React from "react";

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
import { getStyleVariablesPrefix } from "@/registry/styles";

export function StylesPreviewCards() {
  const { pageExampleType } = useStyleStore();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
      {STYLES.filter((s) => s !== "default" && s !== "material").map(
        (style, index) => {
          const s = `--${getStyleVariablesPrefix(style)}-primary`;
          const c = `--${getStyleVariablesPrefix(style)}`;
          return (
            <StyleCssWrapper key={style + index}>
              <StyleFontWrapper sStyle={style}>
                {/* <StyleShowcaseCardLink style={style} /> */}
                <div className="group relative flex max-h-[30rem] min-h-[30rem] w-full flex-col gap-2 overflow-hidden rounded-md border bg-gradient-to-r from-transparent to-accent p-6">
                  {/* <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-transparent to-accent"></div> */}
                  <div className="z-20 flex w-full items-center justify-between">
                    <Typography
                      variant="3xl/semibold"
                      className="capitalize tracking-tight"
                    >
                      {style}
                    </Typography>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-2">
                        <RichBadge variant="neutral" className="capitalize">
                          Palette
                        </RichBadge>
                        <div className="flex rounded-sm border">
                          {mainPaletteColorsKeys.map((color, index) => (
                            <div
                              key={`light-${color}`}
                              className={cn("size-6", {
                                "rounded-l-sm": index === 0,
                                "rounded-r-sm":
                                  index === mainPaletteColorsKeys.length - 1,
                              })}
                              style={{
                                // backgroundColor: `oklch(${palette.light[color]})`,
                                backgroundColor: `oklch(var(${c}-${color}))`,
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
                      // bg-blue-500/30
                      className="absolute left-0 top-0 z-10 flex size-[29rem] items-center justify-center opacity-40 blur-xl transition-all duration-200 ease-in-out group-hover:size-96 group-hover:opacity-50 group-hover:blur-lg"
                      style={{
                        backgroundColor: `oklch(var(${s}))`,
                      }}
                    ></div>
                    <StylePageExamplePreview
                      id="dashboard"
                      styleProp={style}
                      pageExampleTypeProp={pageExampleType || "dashboard"}
                      hideBadge={true}
                      className="absolute left-0 top-0 z-20 w-[70vw] max-w-[70vw]"
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

export function StylesPagesExamplesPreviews() {
  return (
    <div className="grid gap-10">
      {stylesDataList
        .filter((styleData) => styleData.name !== "default")
        .map((styleData, index) => {
          const s = `--${getStyleVariablesPrefix(styleData.name)}-primary`;
          const c = `--${getStyleVariablesPrefix(styleData.name)}`;

          return (
            <div key={styleData.name + index}>
              <div className="relative grid grid-cols-1 gap-4 lg:gap-8 xl:grid-cols-6">
                <div className="relative xl:col-span-2">
                  <div className="sticky top-20 z-10 space-y-8 p-4 pt-10 xl:ml-auto xl:max-w-md xl:p-0 xl:pt-28">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <Typography
                          as={"h1"}
                          variant="4xl/semibold"
                          className="capitalize tracking-tighter"
                        >
                          {/* @ts-ignore */}
                          {styleData.title}{" "}
                          <span className="text-3xl font-normal italic">
                            Style
                          </span>
                        </Typography>
                        {/* <Badge>Pro</Badge> */}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col gap-2">
                            {/* <RichBadge
                                      variant="neutral"
                                      className="w-fit capitalize"
                                    >
                                      Default {styleData.title} Palette
                                    </RichBadge> */}
                            <p className="text-sm text-muted-foreground">
                              Default {styleData.title} Palette
                            </p>
                            <div className="flex w-fit rounded-sm border">
                              {mainPaletteColorsKeys.map((color, index) => (
                                <div
                                  key={`light-${color}`}
                                  className={cn("size-7", {
                                    "rounded-l-sm": index === 0,
                                    "rounded-r-sm":
                                      index ===
                                      mainPaletteColorsKeys.length - 1,
                                  })}
                                  style={{
                                    // backgroundColor: `oklch(${palette.light[color]})`,
                                    backgroundColor: `oklch(var(${c}-${color}))`,
                                  }}
                                  title={`${color}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-2 flex gap-2">
                              <Button variant={"default"} size={"sm"} asChild>
                                <Link href={styleData.styleSitePath}>
                                  View Style
                                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                                </Link>
                              </Button>
                              <Button variant={"secondary"} size={"sm"} asChild>
                                <Link href={styleData.styleSitePath}>
                                  <Brush className="h-4 w-4" />
                                  Customize
                                </Link>
                              </Button>
                            </div> */}
                  </div>
                </div>
                <div className="grid p-4 py-0 lg:py-4 xl:col-span-4">
                  <StylePageExamplePreview
                    id="dashboard"
                    styleProp={styleData.name}
                    pageExampleTypeProp="dashboard"
                    hideBadge={true}
                    className="overflow-auto"
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
              pageExampleTypeProp="dashboard"
              hideBadge={true}
              className={`sticky top-32 overflow-auto`}
              coloredEdge
            />
          );
        })}
    </>
  );
}
