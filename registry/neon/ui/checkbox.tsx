"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Dot } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-neon-sm border border-neon-input bg-neon-input/40 ring-offset-neon-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neon-primary data-[state=checked]:bg-neon-primary data-[state=checked]:text-neon-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {/* <Check className="h-4 w-4" /> */}
      <span className="h-1.5 w-1.5 bg-neon-primary-foreground"></span>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
