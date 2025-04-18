"use client";

import { ArrowRight, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { blocksRegistry } from "@/config/data";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Typography } from "./ui/typography";

export function SuggestedComponentsSection({ exclude }: { exclude?: string }) {
  const excluded = exclude || "";

  const suggestedComponentsData = Object.entries(blocksRegistry)
    .map(([k, v]) => {
      if (k === excluded) {
        return;
      }
      return {
        title: k.replace(/-/g, " "),
        href: `/blocks/${k}`,
        examplesCount: v.length,
        image: `/images/blocks/${k}-preview`,
      };
    })
    .filter((e) => e) as {
    title: string;
    href: string;
    examplesCount: number;
    image: string;
  }[];

  return (
    <div className="mb-24 space-y-2 lg:mt-72">
      <div className="space-y-2">
        <Typography as="h2" variant="lg/medium" className="tracking-tight">
          Explore more blocks
        </Typography>
      </div>
      <nav className="mt-10 py-4">
        <ul
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
          // className="overflow-hidden p-2 px-3 flex flex-wrap gap-8"
        >
          {suggestedComponentsData.map((block) => {
            return (
              <Link
                key={block.title}
                href={block.href}
                target="_blank"
                // href={category.href}
                className="group"
              >
                <Card
                  className={`overflow-hidden border-border/60 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5`}
                  // className={`overflow-hidden transition-all duration-300 ${
                  //   category.featured ? "md:col-span-2 md:row-span-2" : ""
                  // } hover:shadow-lg hover:shadow-foreground/5`}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden bg-accent/50 dark:bg-background">
                      <Image
                        src={`${block.image}-light.png`}
                        width={1919 / 2}
                        height={963 / 2}
                        quality={100}
                        alt={block.title}
                        className="ml-4 mt-11 block rounded-md border transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:hidden"
                      />
                      <Image
                        src={`${block.image}-dark.png`}
                        width={1919 / 2}
                        height={963 / 2}
                        quality={100}
                        alt={block.title}
                        className="ml-4 mt-11 hidden rounded-md border transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:block"
                      />
                      {/* <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-background to-transparent via-background h-20"></div> */}
                      <div className="absolute left-4 right-4 top-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold capitalize tracking-tight text-foreground">
                            {block.title}
                          </h3>
                          <Badge className="">
                            {block.examplesCount}{" "}
                            {block.examplesCount > 1 ? "Blocks" : "Block"}
                            {/* 4 Blocks */}
                            {/* 4 Examples */}
                          </Badge>
                        </div>
                        <div className="hidden rounded-md bg-accent p-1 group-hover:block">
                          <ArrowRight className="size-4 -rotate-45 text-muted-foreground" />
                        </div>
                        {/* <div className="flex items-center">
                          <category.icon className="size-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">
                            Explore blocks
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              // <li
              //   key={block.title}
              //   className="relative flex items-center gap-2 group"
              // >
              //   <Link
              //     href={block.href}
              //     target="_blank"
              //     rel="noopener noreferrer"
              //     className="absolute inset-0"
              //   >
              //     <span className="sr-only">
              //       view {block.title}
              //       blocks
              //     </span>
              //   </Link>
              //   <Typography
              //     as="h4"
              //     variant="lg/normal"
              //     className="capitalize tracking-tight"
              //   >
              //     {block.title.replace("-", " ")}
              //   </Typography>
              //   <ArrowRight className="h-4 w-4 text-muted-foreground/60 -rotate-45 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
              // </li>
            );
          })}
        </ul>
      </nav>
      {/* <div className="space-y-2">
        <Typography as="h2" variant="lg/medium">
          Explore more examples
        </Typography>
      </div>
      <div>
        <section
          className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
        >
          <div className="bg-accent p-2">
            <ul className="relative col-span-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
              {suggestedComponentsData.map((block, index) => (
                <li key={block.title + index}>
                  <SuggestionLinkCard {...block} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export function SuggestionLinkCard({
  title,
  description,
  href,
  examplesCount,
}: {
  title: string;
  description?: string;
  href: string;
  examplesCount: number;
}) {
  return (
    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border bg-background py-6 lg:col-span-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/40 group-hover:to-30%"></div>

      <div className="group relative flex shrink-0 flex-col overflow-hidden rounded px-4">
        <Typography
          as="h2"
          variant="xl/medium"
          className="inline-flex h-full w-full overflow-hidden rounded-md object-cover capitalize"
        >
          {title}
          <ArrowRightIcon className="z-40 hidden size-5 -rotate-45 text-muted-foreground group-hover:block" />
        </Typography>
      </div>
      <div className="border-t pt-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className="absolute -inset-2.5 z-10"></span>
        </a>

        <Badge className="text-foreground-subtle relative text-sm font-medium">
          {examplesCount} examples
        </Badge>
      </div>
    </div>
  );
}
