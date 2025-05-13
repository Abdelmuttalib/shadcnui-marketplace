"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-material-muted">
      <SliderPrimitive.Range className="absolute h-full bg-material-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="group relative block size-4 rounded-full bg-material-primary transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
      <span className="absolute -inset-2.5 -z-10 hidden rounded-full bg-material-primary/15 group-hover:block group-focus-visible:block"></span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
