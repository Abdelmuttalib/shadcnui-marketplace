import * as React from "react";
import Container, { ScreenContainer } from "@/components/container";
import Head from "next/head";
import { applicationUIComponentsData } from "@/config/data";
import { ShowcaseCommingSoonSection2 } from "@/components/views/examples";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { STYLES, useStyle } from "@/hooks/use-style";
import Link from "next/link";

import { WaitlistDialog } from "@/components/waitlist-dialog";

// #030101
// #0300d6
// hsl(100, 9%, 93%)
// #edefec
// rgb(237, 239, 236)

export function ApplicationUI() {
  return (
    <section id="product-application-ui" className="scroll-mt-28">
      <ScreenContainer>
        <h2 className="text-xl font-bold text-foreground">
          shadcn ui Application UI Styles
        </h2>
        <p className="mt-3 text-sm/7 text-foreground-secondary">
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

export function Styles() {
  return (
    <div className="relative isolate mt-16 md:mt-32 pt-10 z-10" id="styles">
      <ScreenContainer>
        <div className="relative flex flex-col gap-4">
          <Typography variant="display-sm/semibold" className="">
            Styles
          </Typography>
          <Typography
            variant="xl/regular"
            className="text-foreground-secondary max-w-3xl"
          >
            Discover a wide range of examples and templates to help you quickly
            build your next project.
          </Typography>
        </div>
        <StyleExamplesProvider />
        <StylesShowcase />
      </ScreenContainer>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>shadcn ui styles</title>
        <meta
          name="description"
          content="shadcn ui styles, A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        <meta property="og:title" content="shadcn-ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn-ui components kits. Create beautiful and consistent web applications with a Design System that provides a collection of components, styles, and guidelines."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn,ui, shadcn ui style, shadcn ui components, design system, design, components, ui kit, ui components, ui kits, react, react ui kit, react ui components, react components, component library, component kit, component ui kit, component ui components, components library, components kit, design system components, design system kit, design system ui kit, design system ui components, design systems, design ui kits, design ui components, ui design kits, ui design components, ui design systems, ui ui kits, ui ui components, open source, open source components, open source design systems, open source ui kits, open source ui components, shadcn ui, shadcn ui style, shadcn ui components, shadcn design system, shadcn design ui kits, shadcn design ui components, shadcn ui new york, shadcn ui design, shadcn ui styles, new york, new york style, new york components, new york design system, new york ui kits, new york ui components"
        />

        <meta
          name="description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        <meta property="og:title" content="shadcn ui Marketplace" />
        <meta
          property="og:description"
          content="A marketplace for shadcn ui kits and styles. Discover premium shadcn ui styles and ui designs for your web applications."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="shadcn ui, shadcn ui Marketplace, UI Kits, UI Styles, shadcn ui Components, Web Design, Frontend UI, shadcn ui styles, shadcn ui kits, shadcn ui, shadcn ui Marketplace, Frontend UI, Design System, TailwindCSS, CSS, HTML, JavaScript, TypeScript"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="space-y-40 flex-grow h-full">
          {/* <Hero /> */}
          {/* <DemoShowcase /> */}
          <StyleExamplesProvider />
          {/* <ApplicationUI /> */}
        </main>
        <footer className="pt-8 pb-6 border-t border-border">
          <Container className="relative">
            <div className="relative text-center">
              <h3 className="text-foreground-secondary to-black h-fit">
                shadcn ui styles, beyond Default and New York
              </h3>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";
import { IconButton } from "@/components/ui/icon-button";
import ThemeSwitcher from "@/components/theme-select";

function StyleExamplesProvider({ children }: { children?: React.ReactNode }) {
  const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <div className="relative">
      <div className="relative flex flex-col bg-background z-20">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="sm:container sm:mx-auto flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary-500">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden sm:block">
                <ThemeSwitcher />
              </div>
              <WaitlistDialog />
            </div>
          </nav>
        </header>
        <div className="mx-auto flex max-w-screen-2xl w-full sm:px-4">
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,hsl(var(--border))_0,_hsl(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
          <section className="grid h-full flex-1 gap-8 pb-24 pt-14 md:pb-40">
            <div className="space-y-4 *:border-y *:border-border/80">
              <Typography
                as="h1"
                variant="display-xl/medium"
                className="border-y px-4 tracking-tight"
              >
                shadcn ui <span className="italic">styles</span>
              </Typography>
              <Typography
                as="p"
                variant="lg/regular"
                className="px-4 text-muted-foreground"
              >
                A dashboard example built using the components.
              </Typography>
            </div>

            <div className="border-y border-border/80 px-4">
              <ExamplesNav />
            </div>

            {/* <div className="mx-4 overflow-hidden rounded-[0.5rem] border border-y border-border/80 bg-background shadow"> */}
            {/* <iframe
                loading="lazy"
                title={"title"}
                className="block h-full min-h-[45rem] w-full dark"
                src={stylePath}
              ></iframe> */}
            <div className="mx-4 overflow-hidden">
              <ShowcaseIFrame title={"title"} href={stylePath} />
            </div>
            {/* </div> */}
          </section>
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,hsl(var(--border))_0,_hsl(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
        </div>
      </div>

      {/* < /> */}
    </div>
  );
}

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
            "my-4 flex gap-1 gap-y-3 flex-wrap items-center",
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
  ];

  const { style, setStyle } = useStyle();

  return (
    <div className="mt-16 md:mt-32 pt-10" id="examples">
      <ExamplesNav />
      <div className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0">
        <div className="space-y-2">
          <Typography as="h2" variant="display-xs/medium">
            {/* Landing Pages */}
            {title}
          </Typography>
          <Typography
            as="h2"
            variant="md/regular"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="mb-6 space-y-2 rounded-2xl border bg-gray-50 dark:bg-overlay-on-surface-background p-1">
        <div className="flex justify-between overflow-x-auto px-1 pt-1">
          <div className="flex items-center justify-between w-full gap-2">
            <div className="gap-0.5 rounded-lg border-[0.5px] bg-gray-100 p-0.5 flex dark:bg-gray-950/50 outline-none">
              <Select defaultValue={style} onValueChange={(e) => setStyle(e)}>
                <SelectTrigger className="w-36">
                  <SelectValue
                    placeholder="Select a style"
                    className="text-muted-foreground"
                  >
                    <span className="text-muted-foreground">style:</span>{" "}
                    <span className="capitalize font-medium">{style}</span>
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
            <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 sm:flex dark:bg-gray-950/50 outline-none">
              {breakpoints.map((bp) => (
                <IconButton
                  key={bp.label}
                  variant={breakpoint === bp.label ? "outline" : "ghost"}
                  size="xs"
                  onClick={() => setBreakpoint(bp.label)}
                >
                  {bp.icon}
                </IconButton>
              ))}
            </div>
          </div>
          <div className="hidden items-center gap-0.5 lg:flex"></div>
        </div>
        <div className="flex h-full w-full overflow-hidden gap-2">
          {preview ? (
            <div
              className={cn(
                "h-fit rounded-lg overflow-hidden border dark:shadow dark:shadow-gray-950 w-full",
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
                className="block h-full min-h-[45rem] w-full dark"
                src={href}
              ></iframe>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ShowcaseIFrame({ title, href }: { title: string; href: string }) {
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      onClick: (b: string) => setBreakpoint(b),
    },
  ];

  return (
    <div className="mb-6 space-y-2 rounded-2xl border bg-gray-50 dark:bg-overlay-on-surface-background p-1">
      <div className="flex justify-between overflow-x-auto px-1 pt-1">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="gap-0.5 rounded-lg border-[0.5px] bg-gray-100 p-0.5 flex dark:bg-gray-950/50 outline-none">
            <Select defaultValue={style} onValueChange={(e) => setStyle(e)}>
              <SelectTrigger className="w-36">
                <SelectValue
                  placeholder="Select a style"
                  className="text-muted-foreground"
                >
                  <span className="text-muted-foreground">style:</span>{" "}
                  <span className="capitalize font-medium">{style}</span>
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
          {/* <WaitlistForm /> */}
          {/* <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 sm:flex dark:bg-gray-950/50 outline-none">
            {breakpoints.map((bp) => (
              <IconButton
                key={bp.label}
                variant={breakpoint === bp.label ? "outline" : "ghost"}
                size="xs"
                onClick={() => setBreakpoint(bp.label)}
              >
                {bp.icon}
              </IconButton>
            ))}
          </div> */}
        </div>
        <div className="hidden items-center gap-0.5 lg:flex"></div>
      </div>
      <div className="flex h-full w-full overflow-hidden gap-2">
        <div
          className={cn(
            "h-fit rounded-lg overflow-hidden border dark:shadow dark:shadow-gray-950 w-full",
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
            className="block h-full aspect-video w-full"
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
      className="py-8 first:pt-0 sm:py-10 lg:py-12 z-10"
    >
      <div>
        <iframe
          // src="http://localhost:3000/source/music"
          src="http://localhost:3000/source/cards"
          // src="http://localhost:3002/source/cards"
          title="YouTube video player"
          className="w-full h-[45rem]"
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
          <p className="text-sm/6 text-muted-foreground capitalize">
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
        <div className="lg:relative grid lg:grid-cols-1 lg:col-span-2 lg:gap-4">
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
                  className="w-full rounded-xl bg-muted border"
                />
                {!index && (
                  <a
                    href="https://tailwindui.com/templates/catalyst"
                    className="absolute inset-0 lg:left-8 z-10"
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
        <div className="lg:relative grid lg:grid-cols-2 lg:gap-4 lg:col-span-3">
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
                  className="w-full rounded-xl bg-muted border"
                />
                {!index && (
                  <a
                    href="https://tailwindui.com/templates/catalyst"
                    className="absolute inset-0 lg:left-8 z-10"
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
      </div>
    </section>
  );
}
