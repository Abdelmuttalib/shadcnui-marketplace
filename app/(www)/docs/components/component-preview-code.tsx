"use client";

import { Cuboid } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

import { StyleSelect } from "@/components/common/style-select";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";
import { useStyleStore } from "@/hooks/use-style-store";
import { loadComponent } from "@/lib/component-loader";
import { RegistryIndex } from "@/registry/registry-index";
import { cn } from "@/utils/cn";

function GradientEffect() {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-14 w-14 flex-col gap-y-4 opacity-40 blur-3xl dark:bg-gray-500"></div>
  );
}

export function ComponentPreviewCode({
  id,
  title,
  description,
  component,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  component: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [preview, setPreview] = useState(true);
  const { style, setStyle } = useStyleStore();
  const [components, setComponents] = useState({});

  // @ts-expect-error - dynamic loadable imported component
  const c = RegistryIndex[style][component];
  // c.demo, dynamic loadable imported component
  const Component = c.demo;
  console.log("c", Component, component, c, RegistryIndex);

  useEffect(() => {
    const loadComponents = async () => {
      const Component = await loadComponent(style, component);

      setComponents({
        Component,
      });
    };

    loadComponents();
  }, []);

  console.log("components", components);

  return (
    <div className={cn("w-full max-w-[1440px] pt-28", className)} id={id}>
      <div className="mb-4 space-y-3">
        <div className="flex items-center gap-2">
          <Typography
            as="h2"
            variant="xl/medium"
            className="capitalize tracking-tight"
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
          "relative mb-6",
          "overflow-hidden",
          "rounded-2xl"
          // "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]",
          // "relative overflow-hidden",
          // "h-full w-full rounded-xl shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
        )}
      >
        {/* <GradientEffect /> */}
        <div className="flex flex-col justify-between gap-1 overflow-x-auto rounded-2xl border bg-background p-2 py-1.5">
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
                  "z-20 flex h-fit min-h-80 w-full items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-br from-accent/20 to-background p-4"
                )}
              >
                {/* {!Component && <div>Loading...</div>}
                {Component && <Component>Component</Component>} */}
                <Suspense
                  fallback={
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <Skeleton className="h-8 w-1/5" />
                      <Skeleton className="h-8 w-1/3" />
                      <Skeleton className="h-8 w-1/5" />
                    </div>
                  }
                >
                  <Component />
                </Suspense>
                {/* {!components.Component && <div>Loading...</div>}
                {components.Component && (
                  <components.Component>Component</components.Component>
                )} */}

                {/* <ButtonDemo /> */}
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
