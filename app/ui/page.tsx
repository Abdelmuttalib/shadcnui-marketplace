"use client";

import ThemeSwitcher from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { useStyle } from "@/hooks/use-style";
import Link from "next/link";
import { UserMenu } from "../components/user-menu";
import { cn } from "@/lib/utils";
import { HeroUI } from "./components/heroui";
import { CarbonUI } from "./components/carbon-heroui";
import { StyleSelect } from "@/components/draft";
import { DefaultUI } from "./components/default-heroui";
import { MaterialUI } from "./components/material-heroui";
import { Typography } from "@/components/ui/typography";

export default function UIHero() {
  const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <LandingPageLayout
      className={cn("bg-gradient-to-r to-background from-accent/40", {
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
        <div className="max-w-container relative mx-auto mt-16 grid w-full grid-cols-1 px-4 sm:mt-20 xl:mt-32  border-y">
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
            className="text-muted-foreground col-start-1 row-start-2 mt-4 max-w-xl"
          >
            Discover the best shadcn ui kits and styles for modern web
            interfaces.
          </Typography>
          <div className="col-start-1 row-start-3 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 z-20">
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
    </LandingPageLayout>
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
      <div className="relative flex flex-col bg-background z-20">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="sm:container sm:mx-auto flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden sm:flex items-center gap-4">
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
        <div className="mx-auto flex max-w-screen-2xl w-full sm:px-4">
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
          <div
            className={cn(
              "grid h-full flex-1 gap-72 pb-24 pt-14 md:pb-40",
              className
            )}
          >
            {children}
          </div>
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}
