"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "dark:border-wedges-gray-600 peer relative size-[1.125rem] shrink-0 rounded-wedges-md border-2 border-wedges-input bg-transparent ring-transparent ring-offset-wedges-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedges-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-wedges-primary data-[state=checked]:bg-wedges-primary data-[state=checked]:text-wedges-primary-foreground data-[state=checked]:dark:border-wedges-primary",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
  // </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
