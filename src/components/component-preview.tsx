"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { StyleSelect } from "./draft";
import { useStyle } from "@/hooks/use-style";
import { Typography } from "./ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cuboid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code } from "./views/docs/code";

function GradientEffect() {
  return (
    <div className="bg-gray-500 absolute -top-10 -left-10 rounded-full blur-3xl p-4 flex flex-col gap-y-4 w-20 h-20 opacity-50 -z-20"></div>
  );
}

export function ComponentPreview({
  id,
  title,
  description,
  category,
  component,
  fileName,
  children,
}: {
  id: string;
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

  const { styleUrl } = useStyle();

  return (
    <div className={cn("pt-10 w-full max-w-[1440px]")} id={id}>
      <div className="mb-6 space-y-3 px-4 lg:mb-8 lg:px-0">
        <div className="space-y-2">
          <Typography as="h2" variant="2xl/medium" className="border-y px-3">
            {/* Landing Pages */}
            {title}
          </Typography>
          {/* <Typography
            as="h2"
            variant="md/normal"
            className="text-foreground-secondary"
          >
            {description}
          </Typography> */}
        </div>
      </div>
      <div
        className={cn(
          "relative mb-6 p-1 md:p-2 bg-accent",
          "overflow-hidden"
          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        <GradientEffect />
        <div className="flex flex-col gap-2 justify-between overflow-x-auto p-2 bg-background rounded-2xl border">
          <div className="flex justify-between overflow-x-auto px-1">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="gap-0.5 rounded-lg flex outline-none">
                <Button
                  className={cn("bg-transparent", {
                    "border-none text-muted-foreground": !preview,
                  })}
                  variant={preview ? "outline" : "ghost"}
                  onClick={() => setPreview(true)}
                  size="sm"
                >
                  <Cuboid />
                  Preview
                </Button>
                <Button
                  className={cn("bg-transparent", {
                    "border-none text-muted-foreground": preview,
                  })}
                  variant={!preview ? "outline" : "ghost"}
                  onClick={() => setPreview(false)}
                  size="sm"
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
                    className="lucide lucide-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
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
                  <StyleSelect />
                </div>
                <div className="hidden gap-0.5 rounded-md border-[0.5px] bg-gray-100 p-0.5 md:flex dark:bg-gray-950/50 outline-none">
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
    </div>
  );
}
