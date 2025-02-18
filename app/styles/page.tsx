"use client";

import Link from "next/link";

import { blocksRegistry } from "@/config/data";
import { SuggestedComponentsSection } from "@/components/suggestion-blocks";
import { Typography } from "@/components/ui/typography";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { StylePreview } from "./components/style-preview";
import React from "react";
import { StylesBreadcrumb } from "./components/styles-breadcrumb";
import { STYLES, useStyle } from "@/hooks/use-style";
import { ExamplesTabsNav, StyleSelect } from "@/components/draft";
import { ExamplesNav } from "./components/examples-nav";

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

  const styleNames = {
    default: "Default Style",
    carbon: "Carbon IBM inspired design system style",
    linear: "Linear Design System style",
    material: "Material Design style",
  };

  return (
    <div className="bg-gradient-to-r from-accent/40 to-background">
      <div className="pt-20 pb-4">
        <div className="space-y-4">
          <div className="border-y px-3">
            <div>
              <StylesBreadcrumb />
            </div>
          </div>
          <div className="border-y flex items-center gap-2">
            <Typography
              as={"h1"}
              variant="5xl/semibold"
              className="tracking-tighter capitalize px-3"
            >
              Styles
            </Typography>
            <Badge>3 styles</Badge>
          </div>

          {/* {stylePath}
          {styleUrl} */}

          <div className="border-y">
            <Typography
              as={"p"}
              variant="lg/normal"
              className="text-muted-foreground max-w-4xl px-3"
            >
              Discover shadcn ui styles and UI kits, beyond Default and New York
              shadcn ui styles.
            </Typography>
          </div>
        </div>
      </div>
      <div className="space-y-20 overflow-hidden">
        {/* <StyleSelect /> */}
        <div className="border-y px-3 py-2">
          <ExamplesTabsNav />
        </div>
        {STYLES.filter((style) => style !== "default").map((style, index) => {
          return (
            <StylePreview
              key={style + index}
              id={style}
              // @ts-ignore
              title={styleNames[style]}
              styleProp={style}
              // description="Carbon IBM inspired design system style for shadcn ui"
              examplePage={styleCategory}
              // component={block.id}
            >
              <></>
            </StylePreview>
          );
        })}

        {/* suggestion */}
        {/* <div>
          <SuggestedComponentsSection exclude={BLOCK_PAGE_NAME} />
        </div> */}
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
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="">
        <div className="container flex py-64 min-h-screen px-6 mx-auto">
          <div className="w-full ">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <Badge>
                <Typography
                  as="span"
                  variant="sm/medium"
                  className="text-primary font-mono"
                >
                  404 error
                </Typography>
              </Badge>
              <Typography
                as="p"
                variant="4xl/semibold"
                className="mt-4 text-foreground tracking-tight"
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

            <div className="grid w-full max-w-6xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedNotFoundLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative group p-3.5 py-1.5 hover:border-primary rounded-lg bg-card border flex flex-col gap-2"
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
                    className="absolute inset-0 inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
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
