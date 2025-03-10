"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { PageContainer } from "@/components/common/page-container";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { ExamplesTabsNav } from "@/components/draft";
import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { StyleShowcaseCardLink } from "@/components/views/styles/style-showcase-card-link";
import { blocksRegistry } from "@/config/data";
import { STYLES, STYLES_LENGTH, stylesInfo, useStyle } from "@/hooks/use-style";

import { StylePreview } from "./components/style-preview";
import { StylesBreadcrumb } from "./components/styles-breadcrumb";

interface Props {
  params: { slug: string };
}

// export async function generateStaticParams() {
//   return Object.keys(blocksRegistry).map((slug) => ({ slug }));
// }

export default function StylesPage({ params }: Props) {
  const { slug } = params;
  const BLOCK_PAGE_NAME = slug;

  // Get the component dynamically based on slug
  const blocksData = blocksRegistry[slug];

  type ExamplePage =
    | "authentication"
    | "cards"
    | "dashboard"
    | "forms"
    | "mail"
    | "music"
    | "playground"
    | "tasks";

  const { styleCategory } = useStyle();

  return (
    <div>
      <div className="relative space-y-20 bg-gradient-to-b from-accent/80 to-background py-20">
        <PageContainer>
          <div className="space-y-4">
            <div>
              <StylesBreadcrumb />
            </div>

            <div className="flex items-center gap-2">
              <PageTitle as={"h1"}>Styles</PageTitle>
              <Badge>{STYLES_LENGTH} styles</Badge>
            </div>

            <div>
              <PageSubTitle className="max-w-2xl text-muted-foreground">
                Discover shadcn ui styles and UI kits, beyond Default and New
                York shadcn ui styles.
              </PageSubTitle>
            </div>
          </div>
        </PageContainer>

        <PageContainer>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {["default", "carbon", "linear", "catalyst", "material"]
              .filter((s) => s !== "default")
              .map((style, index) => {
                return (
                  <StyleCssWrapper key={style + index}>
                    <StyleFontWrapper style={style}>
                      <StyleShowcaseCardLink style={style} />
                    </StyleFontWrapper>
                  </StyleCssWrapper>
                );
              })}
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
        <div className="sticky top-16 z-30 w-full bg-background/[0.7] py-2 backdrop-blur-sm">
          <PageContainer className="flex flex-col gap-6">
            <ExamplesTabsNav />
          </PageContainer>
        </div>
        <div className="grid gap-10">
          {STYLES.filter((style) => style !== "default").map((style, index) => {
            return (
              <div key={style + index}>
                <div className="relative grid grid-cols-1 gap-4 lg:gap-10 xl:grid-cols-5">
                  <div className="relative xl:col-span-2">
                    <div className="sticky top-20 z-10 space-y-4 p-4 pt-10 xl:ml-auto xl:max-w-md xl:p-0 xl:pt-28">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                          <Typography
                            as={"h1"}
                            variant="4xl/semibold"
                            className="capitalize tracking-tighter"
                          >
                            {/* @ts-ignore */}
                            {stylesInfo[style as any].title}{" "}
                            <span className="text-3xl font-normal italic">
                              Style
                            </span>
                          </Typography>
                          {/* <Badge>Pro</Badge> */}
                        </div>

                        <div>
                          <Typography
                            as={"p"}
                            variant="lg/normal"
                            className="max-w-4xl text-muted-foreground"
                          >
                            {/* @ts-ignore */}
                            {stylesInfo[style].description}
                          </Typography>
                        </div>
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Button variant={"default"} size={"sm"} asChild>
                          <Link href={`/styles/${style}`}>
                            View Style
                            <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="grid p-4 py-0 lg:py-4 xl:col-span-3">
                    <StylePreview
                      key={style + index}
                      id={style}
                      title={""}
                      styleProp={style}
                      styleCat={styleCategory}
                      examplePage={styleCategory}
                      iframeClassName="min-h-[30rem] md:min-h-[33rem] lg:min-h-[39rem] xl:min-h-[45rem]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Custom 404 for /blocks
function BlocksNotFound({ slug }: { slug: string }) {
  const suggestedNotFoundLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Styles",
      href: "/styles",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <section className="">
        <div className="container mx-auto flex min-h-screen px-6 py-64">
          <div className="w-full ">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <Badge>
                <Typography
                  as="span"
                  variant="sm/medium"
                  className="font-mono text-primary"
                >
                  404 error
                </Typography>
              </Badge>
              <Typography
                as="p"
                variant="4xl/semibold"
                className="mt-4 tracking-tight text-foreground"
              >
                Page not found
              </Typography>
              <Typography
                as="p"
                variant="base/normal"
                className="mt-4 text-muted-foreground"
              >
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </Typography>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedNotFoundLinks.map((link) => (
                <div
                  key={link.title}
                  className="group relative flex flex-col gap-2 rounded-lg border bg-card p-3.5 py-1.5 hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    {/* <span className="text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </span> */}

                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-foreground">
                        {link.title}
                      </h3>

                      <ArrowRightIcon className="size-4 -rotate-45 text-muted-foreground/30 group-hover:text-primary" />
                    </div>
                  </div>

                  {/* <p className="text-sm text-muted-foreground">
                    Looks like you&apos;ve followed a broken link or entered a
                    URL
                  </p> */}

                  <Link
                    href={link.href}
                    className="absolute inset-0 mt-4 inline-flex items-center gap-x-2 text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Place this function at the **bottom** of the page.tsx file
// export async function generateStaticParams() {
//   return Object.keys(components).map((slug) => ({ slug }));
// }
