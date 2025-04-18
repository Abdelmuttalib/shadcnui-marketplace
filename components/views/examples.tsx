"use client";

import { ArrowRightIcon, Cuboid, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

import { ScreenContainer } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { UICustomizer } from "@/components/ui-customizer";
import { blocksRegistry, initialExamplesRegistry } from "@/config/data";
import { cn } from "@/utils/cn";

import { GradientBackground } from "../gradient";

export function FeaturesExamples() {
  const examples = blocksRegistry.features;
  return (
    <div>
      {examples.map((example, index) => (
        <ExamplesLayout
          key={index}
          title={example.title}
          description={example.description}
          href={example.href}
          code={example.code}
          codePath={example.codePath}
          // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
        />
      ))}
    </div>
  );
}

export function FeaturesPage() {
  return (
    <div className="mt-16 pt-10 md:mt-32" id="features">
      <ScreenContainer>
        <div>
          <UICustomizer />
          <div className="relative flex flex-col items-center justify-center gap-4 text-center">
            <GradientBackground />
            <Typography variant="5xl/medium" className="tracking-tight">
              Examples & Templates
            </Typography>
            <Typography
              variant="xl/normal"
              className="text-foreground-secondary max-w-3xl"
            >
              Discover a wide range of examples and templates to help you
              quickly build your next project.
            </Typography>
          </div>
          <FeaturesExamples />
        </div>
        <SuggestedComponentsSection />
      </ScreenContainer>
    </div>
  );
}

export function ComponentShowcaseCard({
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
    <div className="max-lg:rounded-b-4xl lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-card/80 shadow-sm ring-1 ring-border lg:col-span-4">
      <div className="group relative flex h-28 shrink-0 flex-col overflow-hidden rounded bg-muted dark:bg-background/80">
        <Typography
          as="h2"
          variant="3xl/medium"
          className="ml-10 mt-10 inline-flex h-full w-full overflow-hidden rounded-md object-cover"
        >
          {title}
          <ArrowRightIcon className="text-foreground-subtle z-40 hidden size-5 -rotate-45 group-hover:block" />
          {/* Explore more examples */}
        </Typography>

        {/* <Typography
          as="h2"
          variant="md/normal"
          className="text-foreground-secondary"
        >
          description
        </Typography> */}
        {/* <Image
          src="/images/xx.png"
          alt="x"
          className="ml-6 mt-6 overflow-hidden w-full h-full rounded-md object-cover bg-red-400"
          width={851}
          height={344}
        /> */}
        {/* bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat */}
        {/* <div className="pl-10 pt-10 overflow-hidden">{component}</div> */}
        <div className="from-overlay-on-surface-background absolute inset-0 bg-gradient-to-t to-100%"></div>
      </div>
      <div className="p-4">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span className="absolute -inset-2.5 z-10"></span>
        </a>

        <p className="text-foreground-subtle relative text-sm font-medium">
          {examplesCount} examples
        </p>
      </div>
    </div>
  );
}

export function ComponentShowcaseCard2({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
  component,
}: {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  componentCount: number;
  pro?: boolean;
  component: React.ReactNode;
}) {
  return (
    <div className="max-lg:rounded-b-4xl lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-card/80 shadow-sm ring-1 ring-border lg:col-span-4">
      <div className="group relative h-52 shrink-0 overflow-hidden rounded bg-background/80">
        {/* bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat */}
        <div className="overflow-hidden pl-10 pt-10">{component}</div>
        <div className="from-overlay-on-surface-background absolute inset-0 bg-gradient-to-t to-100%"></div>
      </div>
      <div className="p-4">
        {/* <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-foreground-subtle"
        >
          Engagement
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-foreground">
          Become a thought leader
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-foreground-secondary">
          RadiantAI automatically writes LinkedIn posts that relate current
          events to B2B sales, helping you build a reputation as a thought
          leader.
        </p> */}
        <h4 className="text-lg/5 font-medium tracking-tight text-foreground">
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative inline-flex items-center gap-1">
            {title}
            <ArrowRightIcon className="text-foreground-subtle hidden size-4 -rotate-45 group-hover:block" />
          </span>
        </h4>
        <p className="text-foreground-subtle relative mt-1.5 text-sm font-medium">
          9 Blocks
        </p>
        {pro && (
          <p className="pointer-events-none absolute right-1.5 top-1.5 z-10">
            <Badge variant="default" className="ml-2">
              Pro
            </Badge>
          </p>
        )}
      </div>
    </div>
  );
}

export function ShowcaseCommingSoonCard({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
  componentPreview,
}: {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  componentCount: number;
  pro?: boolean;
  componentPreview?: React.ReactNode;
}) {
  return (
    <div className="before:bg-base-25/50 group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:opacity-0 hover:before:opacity-100 dark:before:bg-card">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-card ring-1 ring-border">
        <img
          // "https://tailwindui.com/plus/img/category-thumbnails/application-ui/stacked.png"
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <h4 className="mt-4 text-sm font-medium text-foreground group-hover:text-primary">
        <a href="https://tailwindui.com/components/application-ui/application-shells/stacked">
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative">
            {/* Stacked Layouts */}
            {title}

            {/* {pro && (
              <Badge variant="blue" className="ml-2">
                Pro
              </Badge>
            )} */}
          </span>
        </a>
      </h4>
      <p className="text-foreground-subtle relative mt-1.5 text-xs font-medium">
        {/* 9 components */}
        {componentCount} blocks
      </p>
      {pro && (
        <p className="pointer-events-none absolute right-1.5 top-1.5 z-10">
          <Badge variant="default" className="ml-2">
            Pro
          </Badge>
        </p>
      )}
    </div>
  );
}

export function ShowcaseCommingSoonSection2({
  title,
  components,
}: {
  title: string;
  components: {
    title: string;
    description: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
    component: React.ReactNode;
    componentCount: number;
  }[];
}) {
  return (
    <section
      // id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
    >
      {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
      <ul className="relative col-span-3 grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 md:grid-cols-4">
        <div className="absolute inset-0 z-20 h-full w-full rounded-2xl border bg-gradient-to-b from-background/70 to-background">
          <div className="mt-32 flex h-full w-full p-5 md:mt-0 md:items-center md:justify-center md:p-0">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Timer />
                <h2 className="font-medium">Coming soon</h2>
              </div>
              <p className="text-foreground-secondary mt-3 text-sm">
                We are working hard to bring you this styles. Stay tuned!
              </p>
            </div>
          </div>
        </div>
        {components.map((component, index) => (
          <li key={component.title + index}>
            <ComponentShowcaseCard2 {...component} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ShowcaseCommingSoonSection({
  title,
  components,
}: {
  title: string;
  components: {
    title: string;
    description: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
    component: React.ReactNode;
    componentCount: number;
  }[];
}) {
  return (
    <section
      // id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
    >
      {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
      <ul className="relative col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {/* <div className="absolute inset-0 h-full bg-gradient-to-b from-background/70 border to-background z-20 rounded-2xl w-full">
          <div className="w-full h-full flex p-5 md:p-0 mt-32 md:mt-0 md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Timer />
                <h2 className="font-medium">Coming soon</h2>
              </div>
              <p className="mt-3 text-sm text-foreground-secondary">
                We are working hard to bring you this styles. Stay tuned!
              </p>
            </div>
          </div>
        </div> */}
        {components.map((component, index) => (
          <li key={component.title + index}>
            <ComponentShowcaseCard2 {...component} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const suggestedComponentsData = [
  {
    title: "Landing Pages",
    description: "Landing Pages are used to promote a product or service.",
    href: "/examples/landing-pages",
    examplesCount: 1,
  },
];

function SuggestedComponentsSection() {
  return (
    <div className="mb-24 lg:mt-72">
      <div className="space-y-2">
        <Typography as="h2" variant="2xl/medium">
          {/* Landing Pages */}
          Explore more examples
        </Typography>
        {/* <Typography
          as="h2"
          variant="md/normal"
          className="text-foreground-secondary"
        >
          description
        </Typography> */}
      </div>
      <div>
        <section
          // id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
          className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-6"
        >
          {/* <h3 className="text-base font-semibold text-foreground">{title}</h3> */}
          <ul className="relative col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {suggestedComponentsData.map((component, index) => (
              <li key={component.title + index}>
                <ComponentShowcaseCard {...component} />
              </li>
            ))}
            {/* {suggestedComponentsData.map((section) => (
              <ShowcaseCommingSoonSection
                key={section.title}
                title={section.title}
                // components={section.components}
              />
            ))} */}
          </ul>
        </section>
      </div>
    </div>
  );
}

export function ExamplesLayout({
  title,
  description,
  href,
  code,
  codePath,
  children,
}: {
  title: string;
  description?: string;
  href: string;
  code: React.ReactNode;
  codePath: string;
  children?: React.ReactNode;
}) {
  const [preview, setPreview] = useState(true);
  const [breakpoint, setBreakpoint] = useState("lg");

  const breakpoints = [
    {
      label: "sm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-smartphone"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
    {
      label: "md",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-tablet"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <line x1="12" x2="12.01" y1="18" y2="18"></line>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
    {
      label: "lg",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
  ];

  const [_code, setCode] = useState<any>();

  // Example usage of blocksRegistry
  const fetchCode = async () => {
    const cccode = await code; // Await the Promise to get the resolved string
    setCode(cccode);
  };

  useEffect(() => {
    fetchCode();
  }, []);

  return (
    <div className="mt-16 pt-10 md:mt-32" id="examples">
      <div className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0">
        <div className="space-y-2">
          <Typography as="h2" variant="2xl/medium">
            {/* Landing Pages */}
            {title}
          </Typography>
          <Typography
            as="h2"
            variant="md/normal"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="mb-6 space-y-2 rounded-2xl border bg-gray-50 p-1 dark:bg-card">
        <div className="flex justify-between overflow-x-auto px-1 pt-1">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex gap-0.5 rounded-lg border-[0.5px] bg-gray-100 p-0.5 outline-none dark:bg-gray-950/50">
              <Button
                variant={preview ? "outline" : "ghost"}
                onClick={() => setPreview(true)}
                size="sm"
              >
                <Cuboid />
                Preview
              </Button>
              <Button
                variant={!preview ? "outline" : "ghost"}
                onClick={() => setPreview(false)}
                size="sm"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code size-[1.125rem] flex-shrink-0"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Code
                <Badge variant="outline">Coming Soon</Badge>
              </Button>
            </div>
            <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 outline-none dark:bg-gray-950/50 sm:flex">
              {breakpoints.map((bp) => (
                <Button
                  key={bp.label}
                  variant={breakpoint === bp.label ? "outline" : "ghost"}
                  size="icon-sm"
                  onClick={() => setBreakpoint(bp.label)}
                >
                  {bp.icon}
                </Button>
              ))}
            </div>
          </div>
          <div className="hidden items-center gap-0.5 lg:flex"></div>
        </div>
        <div className="flex h-full w-full gap-2 overflow-hidden">
          {preview ? (
            <div
              className={cn(
                "h-fit w-full overflow-hidden rounded-lg border dark:shadow dark:shadow-gray-950",
                {
                  "max-w-md": breakpoint === "sm",
                  "max-w-screen-md": breakpoint === "md",
                  "max-w-full": breakpoint === "lg",
                }
              )}
            >
              <iframe
                loading="lazy"
                title={title}
                className="dark block h-full min-h-[45rem] w-full"
                src={href}
              ></iframe>
            </div>
          ) : (
            <div className="flex w-full overflow-hidden rounded-lg">
              <div className="relative w-full rounded-lg backdrop-blur-xl">
                <div className="w-full overflow-auto">
                  <div className="min-w-full">
                    {/* <Code code={_code} /> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
