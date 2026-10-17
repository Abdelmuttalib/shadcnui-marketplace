"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-cb-input shadow-xs group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:not-data-checked:border-cb-input focus-visible:border-cb-ring focus-visible:ring-3 focus-visible:border-cb-ring/50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:border-cb-destructive/20 aria-invalid:aria-checked:border-cb-primary dark:border-cb-input/30 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:border-cb-destructive/40 data-checked:border-cb-primary data-checked:border-cb-primary data-checked:border-cb-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-cb-primary dark:data-checked:border-cb-primary peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 group-has-[:focus-visible]/field-label:ring-0",
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
