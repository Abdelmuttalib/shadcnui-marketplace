"use client";

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
import { Code } from "./views/docs/code";
import React from "react";
import { ExamplesNav, StyleSelect } from "./draft";
import { useStyle } from "@/hooks/use-style";
import { Typography } from "./ui/typography";
import Badge from "./ui/badge";
import { Button } from "./ui/button";
import { Cuboid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ComponentPreview({
  title,
  description,
  category,
  component,
  fileName,
  children,
}: {
  title: string;
  description?: string;
  category: string;
  component: string;
  fileName: string;
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

  const { style, setStyle, stylePath, styleUrl } = useStyle();

  function onStyleChange(e: any) {
    setStyle(e);
  }

  return (
    <div className="mt-16 md:mt-32 pt-10" id="examples">
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
            <div className="gap-0.5 rounded-lg border-[0.5px] bg-gray-100 p-0.5 flex dark:bg-gray-950/30 outline-none">
              {/* <Tabs defaultValue="React" className="max-w-fit">
              <TabsList className="grid w-full grid-cols-2 w-56">
                <TabsTrigger value="React" title="React">
                  React
                </TabsTrigger>
                <TabsTrigger value="HTML" title="HTML">
                  HTML
                </TabsTrigger>
              </TabsList>

              <TabsContent value="React">
                <div className="relative w-full">
                  <iframe src="/" height={960}>
                  </iframe>
                </div>
              </TabsContent>
              <TabsContent value="HTML">
                <Code code={exampleCode} />
              </TabsContent>
            </Tabs> */}

              <Button
                className={cn("bg-transparent", {
                  "border-none": !preview,
                })}
                variant={preview ? "outline" : "outline"}
                onClick={() => setPreview(true)}
                size="sm"
                iconLeft={<Cuboid />}
              >
                Preview
              </Button>
              <Button
                className={cn("bg-transparent", {
                  "border-none": preview,
                })}
                variant={!preview ? "outline" : "outline"}
                onClick={() => setPreview(false)}
                size="sm"
                iconLeft={
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
                    className="lucide lucide-code flex-shrink-0 size-[1.125rem]"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                }
                // disabled
                // iconRight={<Badge variant="neutral">Coming Soon</Badge>}
              >
                Code
              </Button>
            </div>
            {/* <div className="gap-0.5 rounded-lg border-[0.5px] bg-gray-100 p-0.5 flex dark:bg-gray-950/50 outline-none">
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
            </div> */}
            <div className="flex gap-2">
              <div className="hidden gap-0.5 rounded-md sm:flex outline-none">
                <StyleSelect defaultValue={style} onChange={onStyleChange} />
              </div>
              <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 md:flex dark:bg-gray-950/50 outline-none">
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
                className={cn("block h-full min-h-[45rem] w-full", {
                  // "w-screen h-screen fixed inset-0": fullScreen,
                })}
                // https://shadcn-carbon.vercel.app
                src={`${styleUrl}/examples/${category}/${component}`}
                // src={href}
              ></iframe>
            </div>
          ) : (
            <div className="w-full">
              {children}
              {/* <Code /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
