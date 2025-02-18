"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { StyleSelect } from "@/components/draft";
import { getStylesPath, getStylesPath2, useStyle } from "@/hooks/use-style";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Cuboid } from "lucide-react";
import { BlockPlan } from "@/config/data";
import { RichBadge } from "@/components/ui/rich-badge";

export function StylePreview({
  id,
  title,
  description,
  styleProp,
  plan,
  examplePage,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  styleProp?: string;
  plan?: BlockPlan;
  examplePage: string;
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

  const { styleCategory } = useStyle();

  function getPlanBadge() {
    switch (plan) {
      case BlockPlan.Free:
        return "green";
      case BlockPlan.Basic:
        return "default";
      case BlockPlan.Pro:
        return "blue";
      default:
        return "neutral";
    }
  }

  return (
    <div className={cn("w-full max-w-[1440px]")} id={id}>
      <div className="mb-6 space-y-2">
        <div className="flex items-center gap-2 border-y">
          <Typography
            as="h2"
            variant="5xl/medium"
            className="px-3 tracking-tighter bg-gradient-to-br from-foreground to-foreground dark:to-accent text-transparent bg-clip-text"
          >
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
          "relative mb-6 p-1 md:p-2 space-y-1",
          "overflow-hidden"
          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        <div className="flex items-center gap-2 px-0.5">
          <RichBadge variant="neutral" className="capitalize">
            {styleCategory}
          </RichBadge>
        </div>
        <div className="flex flex-col gap-2 justify-between overflow-x-auto p-2 bg-background rounded-2xl border">
          <div className="hidden  justify-between overflow-x-auto px-1">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="gap-0.5 rounded-lg flex outline-none">
                {/* <StyleSelect /> */}
                {/* <Button size={"sm"}>Get Access</Button> */}
              </div>
              <div className="flex gap-2">
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
                  src={`${getStylesPath2(
                    styleProp as string
                  )}/example/${examplePage}`}
                  // src={href}
                ></iframe>
              </div>
            ) : (
              <div className="w-full">
                {children}
                {/* {plan === BlockPlan.Pro ? (
                  <div className="relative flex items-center justify-center rounded-lg overflow-hidden bg-card text-sm h-[45rem] max-h-[45rem] hide-scrollbar">
                    <Image
                      src="/images/code-placeholder.png"
                      alt="Pro Badge"
                      layout="fill"
                      className="w-full mx-auto h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 bg-background/40 gap-4 backdrop-blur-sm rounded-lg overflow-hidden">
                      <Typography
                        as="p"
                        variant="lg/normal"
                        className="text-muted-foreground"
                      >
                        This block is only available for Pro users.
                      </Typography>
                      <Button>Upgrade to Pro</Button>
                    </div>
                  </div>
                ) : (
                  children
                )} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
