"use client";

import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { Typography } from "./ui/typography";
import { blocksRegistry } from "@/config/data";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function SuggestedComponentsSection({ exclude }: { exclude?: string }) {
  const excluded = exclude || "";

  const suggestedComponentsData = Object.entries(blocksRegistry)
    .map(([k, v]) => {
      console.log("k", k);
      console.log("v", v);
      if (k === excluded) {
        return;
      }
      return {
        title: k.replace(/-/g, " "),
        href: `/blocks/${k}`,
        examplesCount: v.length,
      };
    })
    .filter((e) => e) as {
    title: string;
    href: string;
    examplesCount: number;
  }[];

  return (
    <div className="lg:mt-72 mb-24 space-y-2 py-16 bg-gradient-to-r from-accent/40 to-background">
      <div className="space-y-2 border-y px-3">
        <Typography as="h2" variant="lg/medium">
          Explore more examples
        </Typography>
      </div>
      <nav className="border-y mt-10">
        <ul className="overflow-hidden p-2 px-3 flex flex-wrap gap-8">
          {suggestedComponentsData.map((block) => {
            return (
              <li
                key={block.title}
                className="relative flex items-center gap-2 group"
              >
                <Link
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                >
                  <span className="sr-only">
                    view {block.title}
                    blocks
                  </span>
                </Link>
                <Typography
                  as="h4"
                  variant="lg/normal"
                  className="capitalize tracking-tight"
                >
                  {block.title.replace("-", " ")}
                </Typography>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 -rotate-45 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <div className="space-y-2 border-y px-3">
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
    <div className="border lg:col-span-4 group relative flex flex-col overflow-hidden rounded-xl bg-background gap-4 py-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-accent/40 group-hover:to-30%"></div>

      <div className="relative shrink-0 overflow-hidden rounded group flex flex-col px-4">
        <Typography
          as="h2"
          variant="xl/medium"
          className="overflow-hidden w-full h-full rounded-md object-cover inline-flex capitalize"
        >
          {title}
          <ArrowRightIcon className="hidden group-hover:block size-5 -rotate-45 text-muted-foreground z-40" />
        </Typography>
      </div>
      <div className="border-t pt-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className="absolute -inset-2.5 z-10"></span>
        </a>

        <Badge className="relative text-sm font-medium text-foreground-subtle">
          {examplesCount} examples
        </Badge>
      </div>
    </div>
  );
}
