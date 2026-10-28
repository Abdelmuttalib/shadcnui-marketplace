"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { CheckIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-libelle-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-libelle-ring focus-visible:ring-offset-2 focus-visible:ring-offset-libelle-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-libelle-primary",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "peer pointer-events-none block h-6 w-6 rounded-full border border-libelle-primary bg-libelle-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:-translate-x-0.5 data-[state=checked]:bg-libelle-primary-foreground"
      )}
    />
    <CheckIcon className="absolute right-0.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-libelle-primary peer-data-[state=checked]:block peer-data-[state=unchecked]:hidden" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
