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
      "peer inline-flex h-3 w-7 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent ring-4 ring-transparent ring-offset-2 ring-offset-transparent transition-colors hover:ring-material-secondary hover:ring-offset-material-background focus-visible:outline-none focus-visible:ring-material-ring/40 focus-visible:ring-offset-material-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-material-primary data-[state=unchecked]:bg-material-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full border border-material-border bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:-translate-x-0.5 dark:border-none"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
