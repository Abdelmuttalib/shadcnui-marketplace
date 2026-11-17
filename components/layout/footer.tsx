import { GithubIcon, MailIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { Icons } from "@/components/icons";
import { LogoSvg } from "@/components/logo-svg";
import { ThemeModeRadio } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site-config";

// shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-100

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-border/50 relative flex flex-col border-t pt-40 pb-8"
    >
      {/* gradient */}
      {/* <div className="absolute bottom-0 h-32 w-full bg-linear-to-t from-accent/60 to-background"></div> */}
      <PageContainer className="relative pb-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="relative inline-flex items-center gap-2">
            <div>
              <LogoSvg className="size-7" />
            </div>
            <h3 className="text-xl">
              <span className="font-medium tracking-tight">
                shadcn{" "}
                <span className="from-foreground/90 to-primary dark:to-foreground/30 bg-linear-to-r bg-clip-text font-normal text-transparent italic">
                  marketplace
                  {/* styles */}
                </span>
              </span>
            </h3>
          </div>
          <nav className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-8">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="flex w-full flex-col justify-between border-t py-6 pb-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} shadcn marketplace. All rights
              reserved.
            </p>
          </div>
          <div>
            <div className="flex h-full flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2 sm:gap-1">
                <Button
                  variant={"ghost"}
                  size={"icon-sm"}
                  render={
                    <a
                      href={siteConfig.twitterUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Twitter link</span>
                      <Icons.twitter className="text-muted-foreground" />
                    </a>
                  }
                ></Button>
                <Button
                  variant={"ghost"}
                  size={"icon-sm"}
                  render={
                    <a
                      href={siteConfig.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Github link</span>
                      <Icons.gitHub className="text-muted-foreground" />
                    </a>
                  }
                ></Button>
                {/* <Button asChild variant={"ghost"} size={"icon-sm"}>
                  <a
                    href={siteConfig.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Twitter link</span>
                    <Icons.gitHub className="text-muted-foreground" />
                  </a>
                </Button>
                <Button asChild variant={"ghost"} size={"icon-sm"}>
                  <a
                    href={siteConfig.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Twitter link</span>
                    <MailIcon className="text-muted-foreground" />
                  </a>
                </Button> */}
              </div>
              <Separator orientation="vertical" />
              {/* <Separator orientation="horizontal" /> */}
              <div>
                <ThemeModeRadio />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

{
  /* <button className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-[transparent] bg-neutral-900 bg-linear-to-b from-[#2c2c30] to-[#1d1d20] px-4 py-2 text-sm font-medium text-white shadow-inner transition-all duration-150 ease-in-out before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] hover:bg-[#1f1f1f] hover:opacity-90 hover:shadow-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus-visible:outline-none">
                  <p className="text-sm">Sign up with Google</p>
                </button> */
}
