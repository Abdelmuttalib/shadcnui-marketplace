"use client";

import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { UserMenu } from "@/components/common/user-menu";
import { ComponentLoad } from "@/components/component-loader";
import { StyleSelect } from "@/components/draft";
import ThemeSwitcher from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useStyle } from "@/hooks/use-style";
import { cn } from "@/lib/utils";

import { CarbonUI } from "./components/carbon-heroui";
import { DefaultUI } from "./components/default-heroui";
import { HeroUI } from "./components/heroui";
import { MaterialUI } from "./components/material-heroui";

export default function UIHero() {
  const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <PageContainer
      size="xl"
      className={cn("bg-gradient-to-r from-accent/40 to-background", {
        // "from-dft-background": style === "default",
        // "from-cb-background": style === "carbon",
        // "from-background": style === "linear",
        // "from-material-background": style === "material",
        //
        // "bg-gradient-to-r from-dft-background to-dft-accent/60":
        //   style === "default",
        // "bg-gradient-to-r from-cb-background to-cb-accent/60":
        //   style === "carbon",
        // "bg-gradient-to-r from-background to-accent/60": style === "linear",
        // "bg-gradient-to-r from-material-background to-material-accent/60":
        //   style === "material",
      })}
    >
      <div className="relative -mt-[5.75rem] overflow-hidden pb-16">
        {/* <img
          src="https://tailwindui.com/plus-assets/img/beams-home@95.jpg"
          alt=""
          className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"
        /> */}
        <div className="max-w-container relative mx-auto mt-16 grid w-full grid-cols-1 border-y px-4 sm:mt-20  xl:mt-32">
          <Typography
            as={"h1"}
            variant="6xl/medium"
            className="col-start-1 row-start-1 mt-4 max-w-[36rem] tracking-tighter"
          >
            shadcn ui styles
          </Typography>

          <Typography
            as="p"
            variant="lg/normal"
            className="col-start-1 row-start-2 mt-4 max-w-xl text-muted-foreground"
          >
            Discover the best shadcn ui kits and styles for modern web
            interfaces.
          </Typography>
          <div className="z-20 col-start-1 row-start-3 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            {/* <Button size={"lg"} asChild>
              <Link href="#">
                <span>
                  Browse components{" "}
                  <span aria-hidden="true" className="hidden sm:inline">
                    →
                  </span>
                </span>
              </Link>
            </Button> */}
            <StyleSelect />
            {/* <Button size={"lg"} variant={"outline"} asChild>
              <Link href="#">
                <span>
                  Explore templates{" "}
                  <span aria-hidden="true" className="hidden sm:inline">
                    →
                  </span>
                </span>
              </Link>
            </Button> */}
          </div>

          {/* pointer-events-none  */}
          {style === "default" ? <DefaultUI /> : null}
          {style === "linear" ? <HeroUI /> : null}
          {style === "carbon" ? <CarbonUI /> : null}
          {style === "material" ? <MaterialUI /> : null}
        </div>
      </div>
    </PageContainer>
  );
}

function LandingPageLayout({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { style, setStyle, stylePath, setStylePath } = useStyle();

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Styles",
      href: "/styles",
    },
  ];

  return (
    <div className="relative">
      <div className="relative z-20 flex flex-col bg-background">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="flex w-full items-center justify-between gap-2 px-4 sm:container sm:mx-auto">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden items-center gap-4 sm:flex">
                <nav>
                  <ul className="inline-flex gap-6">
                    {links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <ThemeSwitcher />
              </div>
              <UserMenu />
              {/* <WaitlistDialog /> */}
            </div>
          </nav>
        </header>
        <div className="mx-auto flex w-full max-w-screen-2xl sm:px-4">
          <div className="hidden min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" />
          <div
            className={cn(
              "grid h-full flex-1 gap-72 pb-24 pt-14 md:pb-40",
              className
            )}
          >
            {children}
          </div>
          <div className="hidden min-h-screen w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed sm:block md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}
