"use client";

import * as React from "react";

import { ScreenContainer } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import {
  pageExampleTypes,
  Style,
  useStyleStore,
} from "@/hooks/use-style-store";
import { cn } from "@/utils/cn";

import { PageExampleSelect } from "./common/page-example-select";

export function ExamplesTabsNav({ className, ...props }: ExamplesNavProps) {
  const { pageExampleType, setPageExampleType } = useStyleStore();

  return (
    <div className="relative">
      <div className="block md:hidden">
        <PageExampleSelect />
      </div>
      <div className="hidden max-w-[600px] md:block lg:max-w-none">
        <div
          className={cn(
            // "my-4 flex gap-1 gap-y-3 flex-wrap items-center",
            "grid grid-cols-1 flex-wrap rounded-md border bg-accent p-1 text-muted-foreground sm:grid-cols-2 md:inline-flex md:h-10 md:flex-nowrap md:items-center md:justify-center md:p-0",
            className
          )}
          {...props}
        >
          {pageExampleTypes.map((_pageExampleType, index) => {
            return (
              <button
                key={_pageExampleType}
                className={cn(
                  "inline-flex h-full whitespace-nowrap rounded-sm border border-transparent px-3 py-2 text-sm font-medium capitalize ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:items-center md:justify-center md:py-0",
                  _pageExampleType === pageExampleType
                    ? "border-input bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-input/70"
                )}
                // className={cn(
                //   "flex h-7 items-center justify-center rounded-md px-4 text-center text-sm transition-colors hover:bg-accent/80 hover:text-ring",
                //   pageExampleType === caseExampleName
                //     ? "bg-accent font-medium text-ring"
                //     : "text-muted-foreground"
                // )}
                onClick={() => setPageExampleType(_pageExampleType)}
              >
                {_pageExampleType}
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
  const { pageExampleType, setPageExampleType } = useStyleStore();

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
          {pageExampleTypes.map((_pageExampleType, index) => {
            return (
              <button
                key={_pageExampleType + index}
                className={cn(
                  "flex h-7 items-center justify-center rounded-md px-4 text-center text-sm transition-colors hover:bg-accent/80 hover:text-ring",
                  _pageExampleType === pageExampleType
                    ? "bg-accent font-medium text-ring"
                    : "text-muted-foreground"
                )}
                onClick={() => setPageExampleType(_pageExampleType)}
              >
                {_pageExampleType}
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

  const { style, setStyle } = useStyleStore();

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
              <Select
                defaultValue={style}
                onValueChange={(e: Style) => setStyle(e)}
              >
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
