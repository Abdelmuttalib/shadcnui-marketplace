"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-linear-input group-has-[:focus-visible]/field-label:not-data-checked:border-linear-input focus-visible:border-linear-ring focus-visible:ring-linear-ring/50 aria-invalid:border-linear-destructive aria-invalid:ring-linear-destructive/20 aria-invalid:aria-checked:border-linear-primary dark:bg-linear-input/30 dark:aria-invalid:border-linear-destructive/50 dark:aria-invalid:ring-linear-destructive/40 data-checked:border-linear-primary data-checked:bg-linear-primary data-checked:text-linear-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-linear-primary dark:data-checked:bg-linear-primary relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
