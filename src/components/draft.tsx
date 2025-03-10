"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { ScreenContainer } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import { ShowcaseCommingSoonSection2 } from "@/components/views/examples";
import { applicationUIComponentsData } from "@/config/data";
import { STYLES, useStyle } from "@/hooks/use-style";

// #030101
// #0300d6
// hsl(100, 9%, 93%)
// #edefec
// rgb(237, 239, 236)

export function StyleSelect({
  defaultStyle,
  onChange,
}: {
  defaultStyle?: any;
  onChange?: any;
}) {
  // update search params, 'style'

  const { style, setStyle, stylePath, styleUrl } = useStyle();

  function onStyleChange(e: any) {
    setStyle(e);
  }

  return (
    <Select defaultValue={style || defaultStyle} onValueChange={onStyleChange}>
      <SelectTrigger className="w-36">
        <SelectValue
          placeholder="select a style"
          className="text-muted-foreground"
        >
          <span className="text-muted-foreground">style:</span>{" "}
          <span className="font-medium capitalize">
            {style || defaultStyle}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {STYLES.map((style) => (
            <SelectItem value={style} key={style} className="capitalize">
              {style}
            </SelectItem>
          ))}
          {/* <SelectItem value="default">Default</SelectItem>
          <SelectItem value="carbon">Carbon</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function ApplicationUI() {
  return (
    <section id="product-application-ui" className="scroll-mt-28">
      <ScreenContainer>
        <h2 className="text-xl font-bold text-foreground">
          shadcn ui Application UI Styles
        </h2>
        <p className="text-foreground-secondary mt-3 text-sm/7">
          {/* Form layouts, tables, modal dialogs — everything you need to build
          beautiful responsive web applications. */}
          Button styles, tables, badges and everything of shadcn ui components
          with multiple styles to choose from.
        </p>
        <div className="mt-4">
          {applicationUIComponentsData.map((section) => (
            <ShowcaseCommingSoonSection2
              key={section.title}
              title={section.title}
              components={section.components}
            />
          ))}
        </div>
      </ScreenContainer>
    </section>
  );
}

export function MainNavLinks() {
  const links = siteConfig.mainNavLinks;

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className={cn(
              "rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground",
              {
                "border bg-accent text-foreground": pathname === link.href,
              }
            )}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
}

export function Styles() {
  return (
    <div className="relative isolate z-10 mt-16 pt-10 md:mt-32" id="styles">
      <ScreenContainer>
        <div className="relative flex flex-col gap-4">
          <Typography variant="3xl/semibold">Styles</Typography>
          <Typography
            variant="xl/normal"
            className="text-foreground-secondary max-w-3xl"
          >
            Discover a wide range of examples and templates to help you quickly
            build your next project.
          </Typography>
        </div>
        <StylesShowcase />
      </ScreenContainer>
    </div>
  );
}

import { BookmarkIcon, MailIcon, Timer } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

import {
  DataTableDemo,
  DropdownMenuDemo,
  NotificationsCard,
  WaitlistForm,
} from "./demo";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

const DEFAULT_EXAMPLES_PATH = "/example";

const examples = [
  {
    name: "Mail",
    href: `${DEFAULT_EXAMPLES_PATH}/mail`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail",
  },
  {
    name: "Dashboard",
    href: `${DEFAULT_EXAMPLES_PATH}/dashboard`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard",
  },
  {
    name: "Cards",
    href: `${DEFAULT_EXAMPLES_PATH}/cards`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/cards",
  },
  {
    name: "Tasks",
    href: `${DEFAULT_EXAMPLES_PATH}/tasks`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks",
  },
  {
    name: "Playground",
    href: `${DEFAULT_EXAMPLES_PATH}/playground`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground",
  },
  {
    name: "Forms",
    href: `${DEFAULT_EXAMPLES_PATH}/forms`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms",
  },
  {
    name: "Music",
    href: `${DEFAULT_EXAMPLES_PATH}/music`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music",
  },
  {
    name: "Authentication",
    href: `${DEFAULT_EXAMPLES_PATH}/authentication`,
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication",
  },
];

export function ExamplesTabsNav({ className, ...props }: ExamplesNavProps) {
  // const pathname = usePathname();

  const pathname = "/example/mail";

  const { styleCategory, setStyleCategory } = useStyle();

  return (
    <div className="relative">
      <div className="max-w-[600px] lg:max-w-none">
        <div
          className={cn(
            // "my-4 flex gap-1 gap-y-3 flex-wrap items-center",
            "grid grid-cols-1 flex-wrap rounded-md border bg-accent p-1 text-muted-foreground sm:grid-cols-2 md:inline-flex md:h-10 md:flex-nowrap md:items-center md:justify-center md:p-0",
            className
          )}
          {...props}
        >
          {examples.map((example, index) => {
            const caseExampleName = example.name.toLowerCase();
            return (
              <button
                key={example.href}
                className={cn(
                  "data-[state=active]: data-[state=active]: data-[state=active]: data-[state=active]: inline-flex h-full whitespace-nowrap rounded-sm border border-transparent px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:items-center md:justify-center md:py-0",
                  styleCategory === caseExampleName
                    ? "border-border bg-background text-foreground shadow-sm"
                    : "text-muted-foreground"
                )}
                // className={cn(
                //   "flex h-7 items-center justify-center rounded-md px-4 text-center text-sm transition-colors hover:bg-accent/80 hover:text-ring",
                //   styleCategory === caseExampleName
                //     ? "bg-accent font-medium text-ring"
                //     : "text-muted-foreground"
                // )}
                onClick={() => setStyleCategory(caseExampleName)}
              >
                {example.name}
              </button>
            );
          })}
        </div>
        {/* <ScrollBar orientation="horizontal"  /> */}
      </div>
    </div>
  );
}

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  // const pathname = usePathname();

  const pathname = "/example/mail";

  const { styleCategory, setStyleCategory } = useStyle();

  return (
    <div className="relative">
      <div className="max-w-[600px] lg:max-w-none">
        <div
          className={cn(
            "my-4 flex flex-wrap items-center gap-1 gap-y-3",
            className
          )}
          {...props}
        >
          {examples.map((example, index) => {
            const caseExampleName = example.name.toLowerCase();
            return (
              <button
                key={example.href}
                className={cn(
                  "flex h-7 items-center justify-center rounded-md px-4 text-center text-sm transition-colors hover:bg-accent/80 hover:text-ring",
                  styleCategory === caseExampleName
                    ? "bg-accent font-medium text-ring"
                    : "text-muted-foreground"
                )}
                onClick={() => setStyleCategory(caseExampleName)}
              >
                {example.name}
              </button>
            );
          })}
        </div>
        {/* <ScrollBar orientation="horizontal"  /> */}
      </div>
    </div>
  );
}

export function SourceExamplesLayout({
  title,
  description,
  href,
  children,
}: {
  title: string;
  description?: string;
  href: string;
  children?: React.ReactNode;
}) {
  const [preview, setPreview] = React.useState(true);
  const [breakpoint, setBreakpoint] = React.useState("lg");

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

  const { style, setStyle } = useStyle();

  return (
    <div className="mt-16 pt-10 md:mt-32" id="examples">
      <ExamplesNav />
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
              <Select defaultValue={style} onValueChange={(e) => setStyle(e)}>
                <SelectTrigger className="w-36">
                  <SelectValue
                    placeholder="Select a style"
                    className="text-muted-foreground"
                  >
                    <span className="text-muted-foreground">style:</span>{" "}
                    <span className="font-medium capitalize">{style}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="carbon">Carbon</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
            <div>
              {children}
              {/* <Code /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ShowcaseIFrame({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const { style, setStyle } = useStyle();

  const [breakpoint, setBreakpoint] = React.useState("lg");

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

  return (
    <div className="mb-6 space-y-2 rounded-lg border bg-background sm:rounded-2xl sm:p-1">
      <div className="flex justify-between overflow-x-auto px-1 pt-1">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex gap-0.5 rounded-lg pb-1 outline-none">
            <Select defaultValue={style} onValueChange={(e) => setStyle(e)}>
              <SelectTrigger className="h-8 sm:h-10 sm:w-36">
                <SelectValue
                  placeholder="Select a style"
                  className="text-muted-foreground"
                >
                  <span className="text-muted-foreground">style:</span>{" "}
                  <span className="font-medium capitalize">{style}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {STYLES.map((style) => (
                    <SelectItem
                      value={style}
                      key={style}
                      className="capitalize"
                    >
                      {style}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full gap-2 overflow-hidden px-1">
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
            className="block aspect-video h-full w-full"
            src={href}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function StylesShowcase() {
  return (
    <section
      id="product-carbon"
      className="z-10 py-8 first:pt-0 sm:py-10 lg:py-12"
    >
      <div>
        <iframe
          // src="http://localhost:3000/source/music"
          src="http://localhost:3000/source/cards"
          // src="http://localhost:3002/source/cards"
          title="YouTube video player"
          className="h-[45rem] w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="sm:pt-2 lg:relative lg:flex-none">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-foreground">
              <a href="https://tailwindui.com/templates/catalyst">
                <span className="absolute inset-0 lg:left-8"></span>Catalyst
              </a>
            </h2>
          </div>
          <p className="text-sm/6 capitalize text-muted-foreground">
            Application UI kit
          </p>
          <p className="mt-3 text-sm/6 text-muted-foreground">
            Modern application UI components to kickstart your design system.
          </p>
          <div className="mt-4 h-px w-6 bg-border"></div>
          <p className="mt-4 text-sm/6 text-muted-foreground">
            <strong className="font-semibold text-foreground">
              $<span>1</span>
              <span>4</span>
              <span>9</span>
            </strong>{" "}
            or included with all-access
          </p>
        </div>
        <div className="grid lg:relative lg:col-span-2 lg:grid-cols-1 lg:gap-4">
          {/* <div className="sticky left-0 z-10 hidden w-8 flex-none bg-linear-to-r from-white lg:block"></div> */}
          {/* <a
              tabIndex={-1}
              className="hidden lg:absolute lg:inset-y-0 lg:right-8 lg:-left-8 lg:z-10 lg:block"
              href="https://tailwindui.com/templates/catalyst"
            >
              <span className="sr-only">View Catalyst template</span>
            </a> */}
          {[
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-01.png",
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-02.png",
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-03.png",
            ...Array(2).fill(2),
          ].map((src, index) => {
            const imgSrc = `/images/styles/carbon-${src + index + 1}.png`;

            return (
              <>
                <Image
                  key={index}
                  src={imgSrc}
                  alt="This is a preview image"
                  // width="560"
                  // height="380"
                  width={1280}
                  height={720}
                  className="w-full rounded-xl border bg-muted"
                />
                {!index && (
                  <a
                    href="https://tailwindui.com/templates/catalyst"
                    className="absolute inset-0 z-10 lg:left-8"
                  >
                    <span className=" sr-only">Carbon</span>
                  </a>
                )}
              </>
            );
          })}
          {/* <img
              src="https://tailwindui.com/plus/img/templates/catalyst/preview-01.png"
              alt="This is a preview image"
              width="560"
              height="380"
              className="w-full rounded-xl bg-muted "
            />
            <img
              src="https://tailwindui.com/plus/img/templates/catalyst/preview-02.png"
              alt="This is a preview image"
              width="560"
              height="380"
              className="w-full rounded-xl bg-muted hidden lg:block"
            />
            <img
              src="https://tailwindui.com/plus/img/templates/catalyst/preview-03.png"
              alt="This is a preview image"
              width="560"
              height="380"
              className="w-full rounded-xl bg-muted hidden lg:block"
            /> */}
        </div>
        <div className="grid lg:relative lg:col-span-3 lg:grid-cols-2 lg:gap-4">
          {/* <div className="sticky left-0 z-10 hidden w-8 flex-none bg-linear-to-r from-white lg:block"></div> */}
          {/* <a
              tabIndex={-1}
              className="hidden lg:absolute lg:inset-y-0 lg:right-8 lg:-left-8 lg:z-10 lg:block"
              href="https://tailwindui.com/templates/catalyst"
            >
              <span className="sr-only">View Catalyst template</span>
            </a> */}
          {[
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-01.png",
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-02.png",
            // "https://tailwindui.com/plus/img/templates/catalyst/preview-03.png",
            ...Array(6).fill(0),
          ].map((src, index) => {
            const imgSrc = `/images/styles/carbon-${index + 1}.png`;

            return (
              <>
                <Image
                  key={index}
                  src={imgSrc}
                  alt="This is a preview image"
                  // width="560"
                  // height="380"
                  width={1280}
                  height={720}
                  className="w-full rounded-xl border bg-muted"
                />
                {!index && (
                  <a
                    href="https://tailwindui.com/templates/catalyst"
                    className="absolute inset-0 z-10 lg:left-8"
                  >
                    <span className=" sr-only">Carbon</span>
                  </a>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function H() {
  return (
    <>
      <div className="relative -mt-[5.75rem] overflow-hidden bg-gray-200/50 pt-12 md:pt-[5.75rem]">
        <ScreenContainer>
          <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/publichttps://tailwindui.com/plus/img/avatar-1.jpg')] bg-[length:1000px_700px] bg-[position:calc(50%_+_190px)_-50px] bg-no-repeat lg:block"></div>
          <div className="max-w-container mx-auto flex flex-col px-4 pt-4 sm:px-6 lg:flex-row lg:px-8">
            <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
              <h1 className="text-base/7 font-semibold text-primary">
                Powered by shadcn ui
              </h1>

              <Typography
                as="p"
                variant="5xl/bold"
                className="mt-4 tracking-tight text-foreground"
              >
                {/* Beautiful UI components, crafted with shadcn ui and Tailwind
                CSS. */}
                shadcn ui <span className="italic">styles</span>
              </Typography>
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="text-foreground-secondary flex items-center text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-6 w-6 text-foreground"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="208"
                      y1="128"
                      x2="128"
                      y2="208"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    ></line>
                    <line
                      x1="192"
                      y1="40"
                      x2="40"
                      y2="192"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    ></line>
                  </svg>
                  {/* <svg
                  className="size-8 flex-none stroke-current text-foreground-subtle"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="13"
                    ry="5"
                    transform="rotate(60 16 16)"
                  ></ellipse>
                  <ellipse
                    rx="13"
                    ry="5"
                    transform="matrix(-.5 .86603 .86603 .5 16 16)"
                  ></ellipse>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg> */}
                  <span className="ml-2.5">shadcn ui</span>
                </div>
                <div className="text-foreground-secondary flex items-center text-sm font-medium">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 36 36"
                    className="mt-2 inline-flex h-6 w-6 items-center justify-center"
                    fill="none"
                  >
                    <path
                      d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                      className="fill-sky-400"
                    ></path>
                  </svg>

                  <span className="ml-2.5">Tailwind CSS</span>
                </div>
              </div>

              <p className="text-foreground-secondary mt-4 text-base/7">
                {/* Over 500+ professionally designed, fully responsive, expertly
                crafted component examples you can drop into your Tailwind
                projects and customize to your heart’s content. */}
                Style Your Way, Redefining shadcn UI for Custom Interfaces
              </p>
              <div className="mt-8 flex gap-4">
                <WaitlistForm />
                {/* <ButtonLink
                  href="/preview"
                  iconRight={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Live preview
                </ButtonLink>
                <ButtonLink
                  href="/documentation"
                  variant="ghost"
                  iconRight={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Documentation
                </ButtonLink> */}
              </div>
            </div>
            <div className="relative z-10 mt-12 select-none lg:flex">
              <div className="z-20 flex flex-col">
                <div className="relative p-4">
                  <div className="absolute bottom-0 left-11 right-0 top-8 bg-slate-900/[0.03]"></div>
                  <div className="text-foreground-secondary pointer-events-auto relative z-10 w-full rounded-lg bg-card text-[0.8125rem]/5 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <div>
                      <div className="text-foreground-secondary flex items-center px-3.5 py-2.5">
                        <svg
                          className="stroke-foreground-subtle mr-2 size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        Search projects...
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="text-foreground-subtle mb-1.5 text-[0.6875rem] font-semibold">
                          Recent searches
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="stroke-foreground-subtle mr-2.5 size-5 flex-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Tailwind Labs / Website Redesign
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="stroke-foreground-subtle mr-2.5 size-5 flex-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Laravel LLC / Conference Branding
                        </div>
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="stroke-foreground-subtle mr-2.5 size-5 flex-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          Add new file...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="stroke-foreground-subtle mr-2.5 size-5 flex-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                          </svg>
                          Add new folder...
                        </div>
                        <div className="flex items-center rounded-md bg-primary p-1.5 text-white">
                          <svg
                            className="mr-2.5 size-5 flex-none stroke-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                          </svg>
                          Add hashtag...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="stroke-foreground-subtle mr-2.5 size-5 flex-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                          </svg>
                          Add label...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-end gap-4 p-2 md:p-4">
                  <div className="relative">
                    <DropdownMenuDemo />
                  </div>
                  <div className="relative">
                    <Switch id="accept" />
                  </div>
                  <div className="relative">
                    <Button variant="outline" className="shadow-xs">
                      <svg className="fill-foreground-subtle mr-2.5 size-5 flex-none">
                        <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                      </svg>
                      Bookmark
                    </Button>

                    {/* <div className="pointer-events-auto relative inline-flex rounded-md bg-background text-[0.8125rem]/5 font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-card hover:text-foreground">
                      <div className="flex px-3 py-2">
                        <svg className="mr-2.5 size-5 flex-none fill-foreground-subtle">
                          <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                        </svg>
                        Bookmark
                      </div>
                      <div className="border-l border-slate-400/20 px-2.5 py-2">
                        12k
                      </div>
                    </div> */}
                    <div className="z-0">
                      <div className="absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                      <div className="absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    </div>
                  </div>
                </div>
                <div className="relative ml-6 flex items-center justify-end">
                  <div className="relative p-4">
                    <DataTableDemo />
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-8">
                <div className="relative md:p-4">
                  <div className="absolute inset-0 z-20"></div>
                  {/* <div className="w-full h-full z-10 absolute"></div> */}
                  <NotificationsCard />
                </div>
                <div className="relative mt-4 pb-4 md:p-4">
                  <NotificationAlert />
                  {/* <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-card text-[0.8125rem]/5 text-foreground ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
                    <div className="flex items-center p-4">
                      <img
                        src="https://tailwindui.com/plus/img/avatar-1.jpg"
                        alt=""
                        className="size-10 flex-none rounded-full"
                      />
                      <div className="ml-4 flex-auto">
                        <div className="font-medium">Leonard Krasner</div>
                        <div className="mt-1 text-foreground-secondary">
                          @leonardkrasner
                        </div>
                      </div>
                      <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
                        View
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <img
                        src="https://tailwindui.com/plus/img/avatar-1.jpg"
                        alt=""
                        className="size-10 flex-none rounded-full"
                      />
                      <div className="ml-4 flex-auto">
                        <div className="font-medium">Floyd Miles</div>
                        <div className="mt-1 text-foreground-secondary">
                          @floydmiles
                        </div>
                      </div>
                      <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-foreground-secondary ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
                        View
                      </div>
                    </div>
                    <div className="p-4">
                      <Button variant="secondary" className="w-full shadow-xs">
                        View all
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative z-20 sm:z-auto">
            <div className="max-w-container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
              <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      500+ Components
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Beautifully designed, expertly crafted components that
                      follow all accessibility best practices and are easy to
                      customize.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M22.25 11.75l-4.5 16.5"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      shadcn ui & Tailwind CSS
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Interactive examples for React and Next.js powered by
                      shadcn ui, and Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <svg
                      className="size-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                      viewBox="0 0 40 40"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                        className="fill-indigo-50 stroke-indigo-500"
                      ></path>
                      <path
                        d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
                        className="stroke-indigo-500/50"
                      ></path>
                      <path
                        d="M31.5 8.5l-23 23"
                        className="stroke-indigo-500"
                      ></path>
                      <path
                        d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
                        className="stroke-indigo-500"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm/6 font-semibold text-foreground">
                      Fully Responsive
                    </h2>
                    <p className="mt-2 text-sm/6 text-foreground-secondary">
                      Every example is fully responsive and carefully designed
                      and implemented to look great at any screen size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
        </ScreenContainer>
      </div>
    </>
  );
}

function ShowcaseCard({
  title,
  description,
  image,
  href,
  componentCount,
  pro = false,
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

      {/* <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
          <span className="sr-only">
            PNG previews only, upgrade to get the code.
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </p> */}
    </div>
  );
}

function ShowcaseSection({
  title,
  cards,
}: {
  title: string;
  cards: {
    title: string;
    description: string;
    href: string;
    image: {
      src: string;
      alt: string;
    };
    componentCount: number;
  }[];
}) {
  return (
    <section
      id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
    >
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
        {cards.map((card, index) => (
          <li key={card.title + index}>
            <ShowcaseCommingSoonCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ComponentShowcaseCard({
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
    <div
      data-dark="true"
      className="max-lg:rounded-b-4xl lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-border lg:col-span-4"
    >
      <div className="relative h-52 shrink-0 overflow-hidden bg-background/80">
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
          {/* <a href={href}> */}
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative inline-flex items-center gap-1">
            {title}
            {/* {pro && (
              <Badge variant="blue" className="ml-2">
                Pro
              </Badge>
            )} */}
            {/* <ArrowRightIcon className="hidden group-hover:block size-4 -rotate-45 text-foreground-subtle" /> */}
          </span>
          {/* </a> */}
        </h4>
        <p className="text-foreground-subtle relative mt-1.5 text-sm font-medium">
          9 Blocks
          {/* {componentCount} blocks */}
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

function ShowcaseCommingSoonCard({
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

      {/* <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900/30 p-1 text-white">
          <span className="sr-only">
            PNG previews only, upgrade to get the code.
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </p> */}
    </div>
  );
}

function ShowcaseCommingSoonSection({
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
      id={`product-application-ui-${title.toLowerCase().replace(/\s/g, "-")}`}
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
        {components.map((component) => (
          <li key={component.title}>
            <ComponentShowcaseCard {...component} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function NotificationAlert() {
  return (
    <div
      className="max-w-xs rounded-xl border bg-card shadow-lg"
      role="alert"
      tabIndex={-1}
      aria-labelledby="hs-toast-stack-toggle-label"
    >
      <div className="flex p-4">
        <div className="shrink-0">
          <svg
            className="text-foreground-subtle mt-1 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </div>
        <div className="ms-4">
          <h3
            id="hs-toast-stack-toggle-label"
            className="font-semibold text-foreground"
          >
            App notifications
          </h3>
          <div className="text-foreground-subtle mt-1 text-sm">
            enable notifications to receive updates from the app.
          </div>
          <div className="mt-4">
            <div className="flex gap-x-2">
              <Button size="sm" variant="secondary">
                Don&apos;t allow
              </Button>
              <Button size="sm">Allow</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="destructive-outline">
        <BookmarkIcon />
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">
        <MailIcon />
      </Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

// function BadgesDemo() {
//   return (
//     <div className="flex flex-wrap gap-4">
//       <Badge variant="neutral">Default</Badge>
//       <Badge variant="green">Default</Badge>
//       <Badge variant="blue">Default</Badge>
//       <Badge variant="red">Default</Badge>
//       <Badge variant="yellow">Default</Badge>
//     </div>
//   );
// }

// export const applicationUIComponentsData = [
//   {
//     title: "Application Shells",
//     components: [
//       {
//         title: "Buttons",
//         description: "Buttons are used to perform an action.",
//         href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
//         image: {
//           src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
//           alt: "Data Table",
//         },
//         componentCount: 8,
//         component: <ButtonsDemo />,
//       },

//       {
//         title: "Data Table",
//         description: "Display tabular data.",
//         href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
//         image: {
//           src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
//           alt: "Data Table",
//         },
//         componentCount: 1,
//         component: <DataTableDemo />,
//       },
//       {
//         title: "Badges",
//         description: "Badges are used to highlight an item's status.",
//         href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
//         image: {
//           src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
//           alt: "Data Table",
//         },
//         componentCount: 8,
//         component: <BadgesDemo />,
//       },
//       {
//         title: "Alert",
//         description:
//           "Alerts are used to communicate a state that affects the entire system.",
//         href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
//         image: {
//           src: "https://tailwindui.com/plus/img/category-thumbnails/application-ui/data-display/data-tables.png",
//           alt: "Data Table",
//         },
//         componentCount: 1,
//         component: <NotificationAlert />,
//       },
//     ],
//   },
// ];

// export function ApplicationUI() {
//   return (
//     <section id="product-application-ui" className="scroll-mt-28">
//       <ScreenContainer>
//         <h2 className="text-xl font-bold text-foreground">
//           shadcn ui Application UI Styles
//         </h2>
//         <p className="mt-3 text-sm/7 text-foreground-secondary">
//           Button styles, tables, badges and everything of shadcn ui components
//           with multiple styles to choose from.
//         </p>
//         <div className="mt-4">
//           {applicationUIComponentsData.map((section) => (
//             <ShowcaseCommingSoonSection
//               key={section.title}
//               title={section.title}
//               components={section.components}
//             />
//           ))}
//         </div>
//       </ScreenContainer>
//     </section>
//   );
// }
