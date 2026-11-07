"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-spctm-input/80 hover:data-unchecked:border-spctm-input group-has-[:focus-visible]/field-label:not-data-checked:border-spctm-input focus-visible:border-spctm-primary focus-visible:outline-spctm-ring aria-invalid:border-spctm-destructive aria-invalid:outline-spctm-destructive/20 aria-invalid:aria-checked:border-spctm-primary dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:outline-spctm-destructive data-checked:border-spctm-primary data-checked:bg-spctm-primary data-checked:text-spctm-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-spctm-primary dark:data-checked:bg-spctm-primary relative flex size-4.5 shrink-0 items-center justify-center rounded-[4px] border-2 shadow-xs outline-offset-2 transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-2 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid",
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
