"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-linear-foreground/40 group-has-[:focus-visible]/field-label:not-data-checked:border-linear-foreground/40 focus-visible:ring-linear-ring aria-invalid:border-linear-destructive aria-invalid:ring-linear-destructive aria-invalid:aria-checked:border-linear-primary dark:bg-linear-input/30 data-checked:border-linear-primary data-checked:bg-linear-primary data-checked:text-linear-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-linear-primary dark:data-checked:bg-linear-primary focus-visible:border-linear-primary rounded-linear-sm ring-offset-linear-background hover:border-linear-primary relative flex size-5 shrink-0 items-center justify-center border shadow-xs ring-offset-1 transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2",
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
