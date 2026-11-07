"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spctm-ring focus-visible:ring-offset-2 focus-visible:ring-offset-spctm-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-spctm-primary data-[state=unchecked]:bg-spctm-muted",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3.5 w-3.5 rounded-full border-2 bg-spctm-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 data-[state=checked]:border-spctm-primary data-[state=unchecked]:border-spctm-input"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
