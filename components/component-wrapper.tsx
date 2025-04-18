"use client";

import * as React from "react";

import { Style } from "@/hooks/use-style-store";
import { getStyleBackgroundClassname } from "@/lib/styles";
import { cn } from "@/lib/utils";

import { getStyleFontClassname } from "./style-font-wrapper";

export function ComponentWrapper({
  className,
  name,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { name: string }) {
  return (
    <ComponentErrorBoundary name={name}>
      <div
        id={name}
        data-name={name.toLowerCase()}
        className={cn(
          "flex h-fit min-w-96 scroll-mt-16 flex-col rounded-lg border",
          className
        )}
        {...props}
      >
        <div className="border-b px-4 py-3">
          <div className="text-sm font-medium">{getComponentName(name)}</div>
        </div>
        <div className="flex flex-1 items-center gap-2 p-4">{children}</div>
      </div>
    </ComponentErrorBoundary>
  );
}

class ComponentErrorBoundary extends React.Component<
  { children: React.ReactNode; name: string },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; name: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in component ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          Something went wrong in component: {this.props.name}
        </div>
      );
    }

    return this.props.children;
  }
}

function getComponentName(name: string) {
  // convert kebab-case to title case
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function ComponentShowcaseWrapper({
  className,
  name,
  style,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { name: string; style: Style }) {
  return (
    <ComponentErrorBoundary name={name}>
      <div
        id={name}
        data-name={name.toLowerCase()}
        className={cn(
          "flex max-h-72 min-h-72 scroll-mt-16 flex-col overflow-hidden rounded-lg border",
          //  bg-accent
          getStyleBackgroundClassname(style),
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex flex-1 items-center gap-2 overflow-hidden p-4",
            getStyleFontClassname(style)
          )}
        >
          {children}
        </div>
        <div className="flex-shrink-0 border-t bg-background px-4 py-3">
          <div className="text-sm font-medium">{getComponentName(name)}</div>
        </div>
      </div>
    </ComponentErrorBoundary>
  );
}
