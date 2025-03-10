"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import {
  ExamplesTabsNav,
  ShowcaseIFrame,
  StyleSelect,
} from "@/components/draft";
import { StyleFontWrapper } from "@/components/style-font-wrapper";
import { Button } from "@/components/ui/button";
import { RichBadge } from "@/components/ui/rich-badge";
import { Typography } from "@/components/ui/typography";
import { BlockCategoryPreviewCardLink } from "@/components/views/blocks/block-category-preview-card";
import { StyleShowcaseCardLink } from "@/components/views/styles/style-showcase-card-link";
import { blocksPreviewImagesData } from "@/config/data";
import { STYLES, useStyle } from "@/hooks/use-style";
import { cn } from "@/lib/utils";

import { CarbonUI } from "./ui/components/carbon-heroui";
import { CatalystUI } from "./ui/components/catalyst-heroui";
import { DefaultUI } from "./ui/components/default-heroui";
import { LinearUI } from "./ui/components/linear-heroui";
import { MaterialUI } from "./ui/components/material-heroui";

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="relative mx-auto flex w-full max-w-screen-2xl">
        <div className="grid h-full flex-1 gap-72 pb-24 pt-14 md:pb-40">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { style, setStyle, stylePath, setStylePath, styleCategory } =
    useStyle();

  const styleNames = {
    default: "Default Style",
    carbon: "Carbon IBM inspired design system style for shadcn ui",
    linear: "Linear Design System style for shadcn ui",
    catalyst: "Catalyst Design System style for shadcn ui",
    material: "Material Design style for shadcn ui",
  };

  const lightStylesShowcaseImages = [
    {
      name: "Carbon",
      src: "/images/showcase/carbon-light.png",
      alt: "Carbon IBM Style",
    },
    {
      name: "Linear",
      src: "/images/showcase/linear-light.png",
      alt: "Linear Design System Style",
    },
    {
      name: "Material",
      src: "/images/showcase/material-light.png",
      alt: "Material Design Style",
    },
  ];
  const darkStylesShowcaseImages = [
    {
      name: "Carbon",
      src: "/images/showcase/carbon-dark.png",
      alt: "Carbon IBM Style",
    },
    {
      name: "Linear",
      src: "/images/showcase/linear-dark.png",
      alt: "Linear Design System Style",
    },
    {
      name: "Material",
      src: "/images/showcase/material-dark.png",
      alt: "Material Design Style",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main>
          {/* <PageContainer size="xl"> */}
          <div
            className={cn(
              "relative min-h-screen w-full rounded-b-2xl bg-gradient-to-b pb-56",
              {
                // "bg-dft-background": style === "default",
                // "bg-cb-background": style === "carbon",
                // "bg-linear-background": style === "linear",
                // "bg-material-background": style === "material",
                // "bg-catalyst-background": style === "catalyst",
                "from-dft-background via-dft-background to-background":
                  style === "default",
                "from-cb-background via-cb-background to-background":
                  style === "carbon",
                "from-linear-background via-linear-background to-background":
                  style === "linear",
                "from-material-background via-material-background to-background":
                  style === "material",
                "from-catalyst-background via-catalyst-background to-background":
                  style === "catalyst",
              }
            )}
          >
            <div
              className={cn("absolute bottom-0 left-0 right-0 h-24 w-full ", {
                "from-dft-background": style === "default",
                "from-cb-background": style === "carbon",
                "from-linear-background": style === "linear",
                "from-material-background": style === "material",
                "from-catalyst-background": style === "catalyst",
                // "from-background via-dft-background to-dft-background":
                //   style === "default",
                // "from-background via-cb-background to-cb-background":
                //   style === "carbon",
                // "from-background to-linear-background": style === "linear",
                // "from-background to-material-background": style === "material",
                // "from-background to-catalyst-background": style === "catalyst",
              })}
            ></div>
            <PageContainer>
              <div className="max-w-container relative mx-auto grid w-full grid-cols-1 pt-16 sm:pt-20 xl:pt-28">
                <Typography
                  as={"h1"}
                  variant="6xl/semibold"
                  className="col-start-1 row-start-1 max-w-[36rem] font-[490] tracking-tighter"
                >
                  shadcn ui marketplace
                </Typography>

                <Typography
                  as="p"
                  variant="lg/normal"
                  className="col-start-1 row-start-2 mt-4 max-w-xl text-muted-foreground"
                >
                  Discover the best shadcn ui kits and styles for modern web
                  interfaces.
                </Typography>
                <div className="z-20 col-start-1 row-start-3 mt-6 flex w-fit flex-col gap-y-4 rounded-lg p-0.5 sm:gap-x-4 sm:gap-y-4">
                  <StyleSelect />
                  {/* <div className="flex flex-col gap-2 md:flex-row">
                    <Button>Get Started</Button>
                    <Button variant={"secondary"}>See Previews</Button>
                  </div> */}
                </div>
                {/* pointer-events-none  */}
                <StyleFontWrapper
                  style={style}
                  className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"
                >
                  {style === "default" ? <DefaultUI /> : null}
                  {style === "linear" ? <LinearUI /> : null}
                  {style === "carbon" ? <CarbonUI /> : null}
                  {style === "catalyst" ? <CatalystUI /> : null}
                  {style === "material" ? <MaterialUI /> : null}
                </StyleFontWrapper>
              </div>
            </PageContainer>
          </div>
          <section className="grid gap-8 py-32">
            <PageContainer>
              <div className="space-y-4">
                <Typography
                  as={"h2"}
                  variant="5xl/semibold"
                  className="font-[490] tracking-tighter"
                >
                  See it in action
                </Typography>

                <Typography
                  as="p"
                  variant="lg/normal"
                  className="text-muted-foreground"
                >
                  Preview shadcn blocks in different styles and see how they
                  look
                </Typography>
              </div>
            </PageContainer>
            <PageContainer>
              <div className="py-4">
                <ExamplesTabsNav />
              </div>
            </PageContainer>

            <div className="overflow-hidden">
              <PageContainer size="xl">
                <ShowcaseIFrame title={"title"} href={stylePath} />
              </PageContainer>
            </div>
          </section>

          <section className="relative bg-gradient-to-b from-background via-accent to-background py-32">
            <PageContainer>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
                <div className="col-span-1 md:col-span-2 xl:col-span-4">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div>
                        <RichBadge>Styles</RichBadge>
                      </div>
                      {/* <span className="inline-flex items-center gap-2 text-sm">
                        <span className="size-3 rounded-sm bg-green-500"></span>
                        <span>Project and long-term planning</span>
                        <ChevronRightIcon className="h-4 w-4" />
                      </span> */}
                      <Typography
                        as={"h2"}
                        variant="5xl/semibold"
                        className="font-[490] tracking-tighter"
                      >
                        Preview shadcn styles in action
                      </Typography>
                    </div>
                    <Typography
                      as={"p"}
                      variant="lg/medium"
                      className="max-w-lg"
                    >
                      <span className="inline-block">
                        Beyond Default and New York shadcn ui styles.
                        <span className="text-muted-foreground">
                          {" "}
                          Discover custom shadcn styles and ui kits, inspired by
                          popular design systems. Easily download all custom
                          styled{" "}
                          <span className="rounded bg-accent p-1 font-mono text-sm">
                            /ui/*
                          </span>{" "}
                          components directly into your project.
                        </span>
                      </span>
                    </Typography>
                  </div>
                </div>

                {STYLES.filter((s) => s !== "default").map((style) => (
                  <div
                    key={style}
                    className="relative col-span-1 grid gap-4 overflow-hidden md:col-span-2 xl:col-span-2"
                  >
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                      <Typography
                        as="h3"
                        variant="2xl/semibold"
                        className="max-w-xl capitalize tracking-tight"
                      >
                        {style}
                      </Typography>
                      <div>
                        <Button size={"sm"} asChild>
                          <Link href={`/styles/${style}`}>
                            Live Preview
                            <ArrowRightIcon className="-rotate-45" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <StyleShowcaseCardLink style={style} />
                  </div>
                ))}
              </div>
            </PageContainer>
          </section>

          <section className="relative py-32">
            <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div>
            <div className="grid gap-16">
              <PageContainer>
                <div className="">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div>
                        <RichBadge>Blocks</RichBadge>
                      </div>
                      {/* <span className="inline-flex items-center gap-2 text-sm">
                        <span className="size-3 rounded-sm bg-green-500"></span>
                        <span>Project and long-term planning</span>
                        <ChevronRightIcon className="h-4 w-4" />
                      </span> */}
                      <Typography
                        as={"h2"}
                        variant="5xl/semibold"
                        className="font-[490] tracking-tighter"
                      >
                        Premium shadcn blocks
                      </Typography>
                    </div>
                    <Typography
                      as={"p"}
                      variant="lg/medium"
                      className="max-w-lg"
                    >
                      <span className="inline-block">
                        Discover premium shadcn blocks, well crafted, tested,
                        and developed with shadcn ui & tailwindcss.
                        <span className="text-muted-foreground">
                          {" "}
                          Copy & Paste blocks directly to your project.
                        </span>
                      </span>
                    </Typography>
                  </div>
                </div>
              </PageContainer>
              <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:gap-8 lg:px-6">
                {blocksPreviewImagesData.map((blockPreviewImage, idx) => (
                  <div
                    key={blockPreviewImage.title + idx}
                    className="group relative"
                  >
                    {/* <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-br from-transparent via-accent/90 via-90% to-background"></div> */}
                    <BlockCategoryPreviewCardLink
                      block={{
                        name: blockPreviewImage.title,
                        href: blockPreviewImage.href,
                        image: blockPreviewImage.imageSrc,
                        count: blockPreviewImage.blocksCount,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* </PageContainer> */}
        </main>
      </div>
    </>
  );
}
