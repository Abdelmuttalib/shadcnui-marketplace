"use client";

import React from "react";

import { PageContainer } from "@/components/common/page-container";
import {
  PageHeader,
  PageSubTitle,
  PageTitle,
} from "@/components/common/page-header";
import { ExamplesTabsNav } from "@/components/draft";
import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { Badge } from "@/components/ui/badge";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import {
  STYLES,
  STYLES_LENGTH,
  stylesDataList,
  useStyleStore,
} from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { mainPaletteColorsKeys } from "@/registry/registry-palettes";
import { getStyleVariablesPrefix } from "@/registry/styles";

interface Props {
  params: { slug: string };
}

// export async function generateStaticParams() {
//   return Object.keys(blocksRegistry).map((slug) => ({ slug }));
// }

// components/Logo.tsx

type LogoProps = {
  size?: "sm" | "md" | "lg" | number; // or allow custom px size
};

const sizeMap = {
  sm: 6,
  md: 10,
  lg: 14,
};

const Logo: React.FC<LogoProps> = ({ size = "md" }) => {
  const pxSize = typeof size === "number" ? size : sizeMap[size];

  const outerSize = `${pxSize * 1.1}px`; // circle
  const boxHeight = `${pxSize}px`;
  const boxWidth = `${pxSize * 1.1}px`;
  const line1Height = `${pxSize * 0.8}px`;
  const line2Height = `${pxSize * 0.5}px`;

  const line1Left = `${pxSize * 0.55}px`; // manually tuned
  const line2Left = `${pxSize * 0.73}px`;

  return (
    <div className="flex flex-col items-center" style={{ width: boxWidth }}>
      <div
        className="-mb-4 rounded-full border-2 border-foreground bg-transparent"
        style={{ width: outerSize, height: outerSize }}
      ></div>
      <div
        className="relative rounded bg-foreground"
        style={{ height: boxHeight, width: boxWidth }}
      >
        <div
          className="absolute rotate-[49deg] rounded-md bg-background"
          style={{
            height: line1Height,
            width: "4px",
            bottom: "4px",
            left: line1Left,
          }}
        ></div>
        <div
          className="absolute rotate-[49deg] rounded-md bg-background"
          style={{
            height: line2Height,
            width: "4px",
            bottom: "2px",
            left: line2Left,
          }}
        ></div>
      </div>
    </div>
  );
};

export default function StylesPage() {
  const { pageExampleType } = useStyleStore();

  return (
    <div className="relative">
      {/* <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div> */}
      <div className="relative space-y-20 py-20">
        <PageContainer>
          {/* <div>
            <Logo />
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="-mb-4 size-7 rounded-full border-2 border-foreground bg-transparent"></div>
              <div className="relative h-10 w-11 rounded bg-foreground">
                <div className="absolute bottom-1 mx-auto ml-[19px] h-[80%] w-1 rotate-[49deg] rounded-md bg-background"></div>
                <div className="absolute bottom-0.5 mx-auto ml-[26px] h-[50%] w-1 rotate-[49deg] rounded-md bg-background"></div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-y-4">
            {/* <Typography
              variant="5xl/medium"
              className="max-w-md font-[490] tracking-tighter"
            >
              Delight the web with Motion
            </Typography>
            <Typography
              variant="5xl/medium"
              className="max-w-md tracking-tighter"
            >
              Styles
            </Typography> */}
            <PageHeader
              title="Styles"
              description="Discover shadcn ui styles and UI kits, beyond Default and New York shadcn ui styles."
              badge={<Badge>{STYLES_LENGTH} styles</Badge>}
              actions={
                <div className="mt-4">
                  <ExamplesTabsNav />
                </div>
              }
            />
            {/* <div>
              <ExamplesTabsNav />
            </div> */}
          </div>
        </PageContainer>

        <PageContainer size="full">
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
                              <RichBadge
                                variant="neutral"
                                className="capitalize"
                              >
                                Palette
                              </RichBadge>
                              <div className="flex rounded-sm border">
                                {mainPaletteColorsKeys.map((color, index) => (
                                  <div
                                    key={`light-${color}`}
                                    className={cn("size-6", {
                                      "rounded-l-sm": index === 0,
                                      "rounded-r-sm":
                                        index ===
                                        mainPaletteColorsKeys.length - 1,
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
        </PageContainer>
      </div>
      <div className="flex flex-col gap-8 py-20">
        <div className="mt-10">
          <PageContainer className="flex flex-col gap-4">
            <PageTitle as={"h2"}>See it in action</PageTitle>

            <PageSubTitle className="max-w-2xl text-muted-foreground">
              Preview custom shadcn styles in different examples and see how
              they look
            </PageSubTitle>
          </PageContainer>
        </div>
        <div className="sticky top-14 z-30 w-full bg-background/[0.7] py-2 backdrop-blur-sm">
          <PageContainer className="flex flex-col gap-6">
            <ExamplesTabsNav />
          </PageContainer>
        </div>
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
        <div className="mt-28">
          <PageContainer size={"xl"}>
            <div className="relative grid h-full min-h-screen grid-cols-1 gap-8 py-4">
              <div>
                <PageTitle
                  as={"h2"}
                  className="text-5xl font-[490] tracking-tighter"
                >
                  <span className="lowercase text-foreground/70">
                    same shadcn,
                  </span>
                  <br />
                  <span>different styles</span>
                </PageTitle>
              </div>
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
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}
