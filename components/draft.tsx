"use client";

import * as React from "react";

import { pageExampleTypes, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/utils/cn";

import { PageExampleSelect } from "./common/page-example-select";

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

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
            "bg-accent text-muted-foreground grid grid-cols-1 flex-wrap border p-1 sm:grid-cols-2 md:inline-flex md:h-10 md:flex-nowrap md:items-center md:justify-center md:p-0",
            className
          )}
          {...props}
        >
          {pageExampleTypes.map((_pageExampleType, index) => {
            return (
              <button
                key={_pageExampleType}
                className={cn(
                  "ring-offset-background focus-visible:ring-ring inline-flex h-full border border-transparent px-3 py-2 text-sm font-medium whitespace-nowrap capitalize transition-all focus-visible:ring-2 focus-visible:outline-none md:items-center md:justify-center md:py-0",
                  _pageExampleType === pageExampleType
                    ? "border-input bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-input/70"
                )}

                onClick={() => setPageExampleType(_pageExampleType)}
              >
                {_pageExampleType}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
                  "hover:bg-accent/80 hover:text-ring flex h-7 items-center justify-center rounded-md px-4 text-center text-sm transition-colors",
                  _pageExampleType === pageExampleType
                    ? "bg-accent text-ring font-medium"
                    : "text-muted-foreground"
                )}
                onClick={() => setPageExampleType(_pageExampleType)}
              >
                {_pageExampleType}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
