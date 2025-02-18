"use client";

import { StyleSelect } from "@/components/draft";
import { ButtonDemo } from "@/components/showcase";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import { Cuboid } from "lucide-react";
import { useState } from "react";

export function ComponentPreviewCode({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [preview, setPreview] = useState(true);

  return (
    <div className={cn("pt-28 w-full max-w-[1440px]")} id={id}>
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2 border-y">
          <Typography
            as="h2"
            variant="xl/medium"
            className="px-3 tracking-tight"
          >
            {title}
            {/* {formatString(title)} */}
          </Typography>

          {/* <RichBadge variant={getPlanBadge()} className="capitalize">
            {plan}
          </RichBadge> */}
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
          "relative mb-6 p-1 md:p-2",
          "overflow-hidden"

          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        {/* <GradientEffect /> */}
        <div className="flex flex-col gap-1 justify-between overflow-x-auto p-2 py-1.5 bg-background rounded-2xl border">
          <div className="flex justify-between overflow-x-auto px-1 pt-1 pb-1">
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
              <div className="flex gap-2 items-center">
                <div className="hidden gap-0.5 rounded-md sm:flex outline-none">
                  <StyleSelect />
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
          <div className="flex h-full w-full overflow-hidden gap-2">
            {preview ? (
              <div
                className={cn("h-fit rounded-lg overflow-hidden border w-full")}
              >
                <ButtonDemo />
                {/* <iframe
                  loading="lazy"
                  title={title}
                  className={cn("block h-full min-h-[45rem] w-full", {
                    "w-full h-full": isFullScreen,
                  })}
                  src={`${styleUrl}/examples/${category}/${component}`}
                ></iframe> */}
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
