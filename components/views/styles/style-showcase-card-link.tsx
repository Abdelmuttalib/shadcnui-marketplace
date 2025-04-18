"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { RichBadge } from "@/components/ui/rich-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";
import { Style } from "@/hooks/use-style-store";
import { loadComponentDemo } from "@/lib/component-loader";
import { getStyleBackgroundClassname } from "@/lib/styles";
import { cn } from "@/lib/utils";

type Components = {
  Badge: React.ComponentType;
  Button: React.ComponentType;
  Switch: React.ComponentType;
  Checkbox: React.ComponentType;
};

export function StyleShowcaseCardLink({ style }: { style: Style }) {
  const [components, setComponents] = useState<Components | {} | any>({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const Badge = await loadComponentDemo(style, "Badge");
        const Button = await loadComponentDemo(style, "Button");
        const Switch = await loadComponentDemo(style, "Switch");
        const Checkbox = await loadComponentDemo(style, "Checkbox");
        const Slider = await loadComponentDemo(style, "Slider");
        const Tabs = await loadComponentDemo(style, "Tabs");
        const Input = await loadComponentDemo(style, "Input");
        const Textarea = await loadComponentDemo(style, "Textarea");
        const Select = await loadComponentDemo(style, "Select");

        const loadedComponents = {
          Badge,
          Button,
          Switch,
          Checkbox,
          Slider,
          Tabs,
          Input,
          Textarea,
          Select,
        };

        setComponents(loadedComponents);

        setIsLoading(false);
        if (isError) {
          setIsError(false);
        }
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    loadComponents();
  }, [style]);

  if (isLoading) {
    return <StyleShowcaseCardLoaderUI />;
  }

  if (isError) {
    return (
      <RichBadge variant={"red"}>
        an error occured, kindly try refreshing the page
      </RichBadge>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      {/* <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-br from-transparent via-background/80 via-90% to-background group-hover:via-100%"></div> */}
      {/* <p className="group absolute right-2 top-2 z-20 inline-flex items-center gap-1.5 rounded-xl border bg-accent/40 px-1.5 py-1 text-sm capitalize text-foreground">
        {style}
        <ArrowRightIcon className="h-4 w-4 -rotate-45 text-muted-foreground group-hover:text-foreground" />
      </p> */}
      <div className="mb-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div>
          <Typography
            as="h3"
            variant="xl/semibold"
            className="max-w-xl capitalize tracking-tight"
          >
            {style}
          </Typography>
        </div>
        <div>
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href={`/styles/${style}`}>
              Live Preview
              <ArrowRightIcon className="-rotate-45" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-xl border bg-accent p-2 dark:bg-inherit">
        <div
          className={cn(
            "flex flex-col gap-4 rounded-lg border px-5 py-7",
            // bg-gradient-to-br from-accent via-accent/60 to-accent/30
            getStyleBackgroundClassname(style)
          )}
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            // background:
            //   "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 40%)",
          }}
        >
          <components.Button>Button</components.Button>
          <components.Select />
          <components.Input />
          <components.Textarea />
          <components.Badge>Badge</components.Badge>
          <components.Switch />
          <components.Slider />
          {/* <components.Tabs>
        <components.TabsList>
          <components.TabsTrigger value="tab1">Tab 1</components.TabsTrigger>
          <components.TabsTrigger value="tab2">Tab 2</components.TabsTrigger>
        </components.TabsList>
      </components.Tabs> */}
          <components.Checkbox />
          {/* <components.Tabs /> */}
        </div>
      </div>
    </div>
  );
}

export function StyleShowcaseCardPlain({ style }: { style: Style }) {
  const [components, setComponents] = useState<Components | {} | any>({});

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const Badge = await loadComponentDemo(style, "Badge");
        const Button = await loadComponentDemo(style, "Button");
        const Switch = await loadComponentDemo(style, "Switch");
        const Checkbox = await loadComponentDemo(style, "Checkbox");
        const Slider = await loadComponentDemo(style, "Slider");
        const Tabs = await loadComponentDemo(style, "Tabs");
        const Input = await loadComponentDemo(style, "Input");
        const Textarea = await loadComponentDemo(style, "Textarea");
        const Select = await loadComponentDemo(style, "Select");

        const loadedComponents = {
          Badge,
          Button,
          Switch,
          Checkbox,
          Slider,
          Tabs,
          Input,
          Textarea,
          Select,
        };

        setComponents(loadedComponents);

        setIsLoading(false);
        if (isError) {
          setIsError(false);
        }
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    loadComponents();
  }, [style]);

  if (isLoading) {
    return <StyleShowcaseCardLoaderUI />;
  }

  if (isError) {
    return (
      <RichBadge variant={"red"}>
        an error occured, kindly try refreshing the page
      </RichBadge>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      <div className="flex flex-col gap-2 rounded-xl border bg-accent p-2 dark:bg-inherit">
        <div
          className={cn(
            "flex flex-col gap-4 rounded-lg border px-5 py-7",
            // bg-gradient-to-br from-accent via-accent/60 to-accent/30
            getStyleBackgroundClassname(style)
          )}
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            // background:
            //   "linear-gradient(134deg, hsla(0, 0%, 100%, .08), hsla(0, 0%, 100%, .02), hsla(0, 0%, 100%, 0) 40%)",
          }}
        >
          <components.Button>Button</components.Button>
          <components.Select />
          <components.Input />
          <components.Textarea />
          <components.Badge>Badge</components.Badge>
          <components.Switch />
          <components.Slider />
          {/* <components.Tabs>
        <components.TabsList>
          <components.TabsTrigger value="tab1">Tab 1</components.TabsTrigger>
          <components.TabsTrigger value="tab2">Tab 2</components.TabsTrigger>
        </components.TabsList>
      </components.Tabs> */}
          <components.Checkbox />
          {/* <components.Tabs /> */}
        </div>
      </div>
    </div>
  );
}

export function StyleShowcaseCardLoaderUI({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn("group relative overflow-hidden rounded-2xl", className)}
    >
      <span className="sr-only">loading Style</span>
      <div className="rounded-2xl border bg-background p-2">
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl border px-5 py-7">
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <Skeleton key={m} className="h-10 w-20 border"></Skeleton>
            ))}
          </div>
          <Skeleton className="h-10 w-32 border"></Skeleton>
          <Skeleton className="h-10 w-full border"></Skeleton>
          <Skeleton className="h-28 w-full border"></Skeleton>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((m, idx) => (
              <Skeleton
                key={m + idx}
                className="h-6 w-16 rounded-full border"
              ></Skeleton>
            ))}
          </div>
          <Skeleton className="h-8 w-16 border"></Skeleton>
          <Skeleton className="h-6 w-1/2 border"></Skeleton>
          <Skeleton className="h-6 w-10 border"></Skeleton>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-br from-transparent via-background/80 via-90% to-background group-hover:via-100%"></div>
      <Link
        href={`/styles/${style}`}
        target="_blank"
        className="absolute inset-0 z-20 rounded-2xl group-hover:border group-hover:bg-accent/10"
      >
        <span className="sr-only">View {style} Style</span>
      </Link>
      <p className="group absolute right-2 top-2 z-20 inline-flex items-center gap-1.5 rounded-xl border bg-accent/40 px-1.5 py-1 text-sm capitalize text-foreground">
        {style}
        <ArrowRightIcon className="h-4 w-4 -rotate-45 text-muted-foreground group-hover:text-foreground" />
      </p>
      <div className="rounded-2xl border p-2">
        <div
          className="flex flex-col gap-4 rounded-xl border border-gray-600/50 bg-gradient-to-br from-accent via-accent/60 to-accent/30 px-5 py-7"
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",

          }}
        >
          <components.Button>Button</components.Button>
          <components.Select />
          <components.Input />
          <components.Textarea />
          <components.Badge>Badge</components.Badge>
          <components.Switch />
          <components.Slider />

          <components.Checkbox />
        </div>
      </div>
    </div> */
}
