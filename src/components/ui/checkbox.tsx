import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/utils/cn";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // "peer h-4 w-4 shrink-0 rounded-sm border border-input-border focus-visible:outline-none focus:ring-1 focus:ring-red-500 focus:border-primary focus-visible:border-primary focus:ring-offset-2 focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-foreground",
      "h-[18px] w-[18px] shrink-0 rounded-sm border border-input-border text-primary-600 focus:ring-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-background data-[state=checked]:border-primary",
      "focus-visible:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
