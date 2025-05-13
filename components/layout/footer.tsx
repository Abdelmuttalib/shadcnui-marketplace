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
      className="relative flex flex-col border-t border-border/50 pb-8 pt-40"
    >
      {/* gradient */}
      {/* <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-accent/60 to-background"></div> */}
      <PageContainer className="relative pb-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="relative inline-flex items-center gap-2">
            <div>
              <LogoSvg className="size-7" />
            </div>
            <h3 className="text-xl">
              <span className="font-medium tracking-tight">
                shadcn{" "}
                <span className="bg-gradient-to-r from-foreground/90 to-primary bg-clip-text font-normal italic text-transparent dark:to-foreground/30">
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
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} shadcn marketplace. All rights
              reserved.
            </p>
          </div>
          <div>
            <div className="flex h-full flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2 sm:gap-1">
                <Button asChild variant={"ghost"} size={"icon-sm"}>
                  <a
                    href={siteConfig.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Twitter link</span>
                    <Icons.twitter className="text-muted-foreground" />
                  </a>
                </Button>
                <Button asChild variant={"ghost"} size={"icon-sm"}>
                  <a
                    href={siteConfig.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Twitter link</span>
                    {/* <GithubIcon className="text-muted-foreground" /> */}
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
                </Button>
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

// <button className="text-sm font-medium relative border border-[transparent] dark:text-black bg-neutral-900 dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] px-4 py-2 text-white shadow-inner before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] hover:bg-[#1f1f1f] hover:shadow-none"><img alt="Sign up with Google" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="h-4 w-4" src="https://www.datocms-assets.com/77432/1729797489-google.svg" style="color: transparent;"><p className="text-sm">Sign up with Google</p></button>

function ThemeRadio() {
  return (
    <fieldset className="tailwind theme-switcher_root__DrzBE" data-small="">
      <legend className="sr-only">Select a display theme:</legend>
      <span>
        <input
          aria-label="system"
          id="theme-switch-system-«r3r»"
          type="radio"
          value="system"
          checked
        />
        <label htmlFor="theme-switch-system-«r3r»">
          <span className="sr-only">system</span>
          <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.5 3.25C0.5 1.45507 1.95507 0 3.75 0H8.25C10.0449 0 11.5 1.45507 11.5 3.25V11.25V12H10.75H1.25H0.5V11.25V3.25ZM3.75 1.5C2.7835 1.5 2 2.2835 2 3.25V10.5H10V3.25C10 2.2835 9.2165 1.5 8.25 1.5H3.75ZM3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V7H3V3.5ZM6.5 9.5H9V8H6.5V9.5Z"
              fill="currentColor"
              transform="translate(2.5, 2)"
            ></path>{" "}
          </svg>
        </label>
      </span>
      <span>
        <input
          aria-label="light"
          id="theme-switch-light-«r3r»"
          type="radio"
          value="light"
        />
        <label htmlFor="theme-switch-light-«r3r»">
          <span className="sr-only">light</span>
          <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 1V0.25H6.25V1V1.25V2H7.75V1.25V1ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5ZM7.75 12V12.75V13V13.75H6.25V13V12.75V12H7.75ZM12 6.25H12.75H13H13.75V7.75H13H12.75H12V6.25ZM1 6.25H0.25V7.75H1H1.25H2V6.25H1.25H1ZM10.0052 2.93414L10.5355 2.40381L10.7123 2.22703L11.2426 1.6967L12.3033 2.75736L11.773 3.28769L11.5962 3.46447L11.0659 3.9948L10.0052 2.93414ZM2.22703 10.7123L1.6967 11.2426L2.75736 12.3033L3.28769 11.773L3.46447 11.5962L3.9948 11.0659L2.93414 10.0052L2.40381 10.5355L2.22703 10.7123ZM2.93414 3.9948L2.40381 3.46447L2.22703 3.28769L1.6967 2.75736L2.75736 1.6967L3.28769 2.22703L3.46447 2.40381L3.9948 2.93414L2.93414 3.9948ZM10.7123 11.773L11.2426 12.3033L12.3033 11.2426L11.773 10.7123L11.5962 10.5355L11.0659 10.0052L10.0052 11.0659L10.5355 11.5962L10.7123 11.773Z"
              fill="currentColor"
              transform="translate(1.25, 1.25)"
            ></path>
          </svg>
        </label>
      </span>
      <span>
        <input
          aria-label="dark"
          id="theme-switch-dark-«r3r»"
          type="radio"
          value="dark"
        />
        <label htmlFor="theme-switch-dark-«r3r»">
          <span className="sr-only">dark</span>
          <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 0.25V1V1.5H11L11.75 1.5V3H11H10.5V3.5V4.25H9V3.5V3H8.5H7.75V1.5H8.5H9V1V0.25H10.5ZM3.25514 2.75496C2.33413 3.53491 1.75 4.69972 1.75 6C1.75 8.34721 3.65279 10.25 6 10.25C7.30029 10.25 8.4651 9.66587 9.24505 8.74485C9.16377 8.74827 9.08207 8.74999 9 8.74999C5.82436 8.74999 3.25 6.17563 3.25 2.99999C3.25 2.91792 3.25172 2.83623 3.25514 2.75496ZM0.25 6C0.25 3.51072 1.83142 1.39271 4.042 0.592193L5.00256 1.55275C4.83933 2.00347 4.75 2.49047 4.75 2.99999C4.75 5.3472 6.65279 7.24999 9 7.24999C9.50953 7.24999 9.99653 7.16065 10.4473 6.99743L11.4078 7.95798C10.6073 10.1686 8.48929 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6Z"
              fill="currentColor"
              transform="translate(2.25, 2.25)"
            ></path>
          </svg>
        </label>
      </span>
    </fieldset>
  );
}
