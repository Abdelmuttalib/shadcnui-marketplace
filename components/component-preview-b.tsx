"use client";

import { Cuboid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { StyleSelect } from "@/components/common/style-select";
import { Button } from "@/components/ui/button";
import { BlockPlan } from "@/config/types";
import { cn } from "@/utils/cn";

import { RichBadge } from "./ui/rich-badge";
import { Typography } from "./ui/typography";

function GradientEffect() {
  return (
    <div className="absolute left-0 right-0 top-0 -z-10 flex h-10 w-full flex-col gap-y-4 opacity-60 blur-3xl dark:bg-gray-500"></div>
  );
}

export function ComponentPreview({
  id,
  title,
  description,
  plan,
  category,
  component,
  fileName,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  plan?: BlockPlan;
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

  const [isFullScreen, setIsFullScreen] = React.useState(false);

  function onFullScreen() {
    setIsFullScreen((current) => !current);
  }

  function formatString(input: string) {
    // Use a regular expression to find numbers and prepend '#' to them
    // instead make numbers as 01, 02, 03, ..., 11, 12, 13, ...
    return input.replace(/\b(\d)\b/g, "0$1");
    // return input.replace(/\d+/g, "#$&");
  }

  return (
    <div className={cn("w-full max-w-[1440px] scroll-mt-12 pt-10")} id={id}>
      <div className="mb-4 space-y-3">
        <div className="flex items-center gap-2">
          <Typography as="h2" variant="xl/medium" className="tracking-tight">
            {/* {title} */}
            {formatString(title)}
          </Typography>

          <RichBadge variant={getPlanBadge()} className="capitalize">
            {plan}
          </RichBadge>
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
          "relative mb-6",
          "overflow-hidden rounded-2xl",
          {
            "fixed inset-0 z-50 h-screen w-screen bg-background": isFullScreen,
          }
          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        {/* <GradientEffect /> */}
        <div className="relative z-10 flex flex-col justify-between gap-1 overflow-x-auto">
          <div className="flex justify-between overflow-x-auto px-1 pb-1 pt-1">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex gap-0.5 rounded-lg outline-none">
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
              <div className="flex items-center gap-2">
                <div className="hidden gap-0.5 rounded-md outline-none sm:flex">
                  <StyleSelect />
                </div>
                <div className="hidden h-10 gap-0.5 rounded-md border border-input px-0.5 md:flex md:items-center">
                  {breakpoints.map((bp) => (
                    <Button
                      key={bp.label}
                      variant={breakpoint === bp.label ? "outline" : "ghost"}
                      size="icon-sm"
                      onClick={() => setBreakpoint(bp.label)}
                      className={cn("", {
                        " border-input bg-input/40": breakpoint === bp.label,
                      })}
                    >
                      {bp.icon}
                    </Button>
                  ))}
                </div>
                {/* <div className="hidden gap-0.5 rounded-md border-[0.5px] p-0.5 md:flex outline-none">
                  <Button
                    variant={"ghost"}
                    size="icon-sm"
                    onClick={onFullScreen}
                  >
                    <FullscreenIcon />
                  </Button>
                </div> */}
              </div>
            </div>
            {/* <div className="hidden items-center gap-0.5 lg:flex">sfdf</div> */}
          </div>
          <div className="flex h-full w-full gap-2 overflow-hidden">
            {preview ? (
              <div
                className={cn(
                  "h-fit w-full overflow-hidden rounded-lg border",
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
                    "h-full w-full": isFullScreen,
                  })}
                  // src={`${styleUrl}/examples/${category}/${component}`}
                ></iframe>
              </div>
            ) : (
              <div className="w-full">
                {/* {children} */}
                {plan === BlockPlan.Pro ? (
                  <div className="hide-scrollbar relative flex h-[45rem] max-h-[45rem] items-center justify-center overflow-hidden rounded-lg bg-card text-sm">
                    <Image
                      src="/images/code-placeholder.png"
                      alt="Pro Badge"
                      layout="fill"
                      className="mx-auto h-full w-full"
                    />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background/40 p-4 backdrop-blur-sm">
                      <Typography
                        as="p"
                        variant="lg/medium"
                        className="bg-card p-2 font-mono text-muted-foreground"
                      >
                        This block is only available for Pro users.
                      </Typography>
                      <Button asChild>
                        <Link href={"/pricing"}>Upgrade to Pro</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  children
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
