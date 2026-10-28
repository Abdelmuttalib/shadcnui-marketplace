"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-material-input hover:border-material-primary group-has-[:focus-visible]/field-label:not-data-checked:border-material-input focus-visible:ring-material-ring/50 aria-invalid:border-material-destructive aria-invalid:ring-material-destructive/60 aria-invalid:aria-checked:border-material-primary bg-material-background data-checked:border-material-primary data-checked:bg-material-primary data-checked:text-material-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-material-primary rounded-material-sm relative flex size-5 shrink-0 items-center justify-center border shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1",

        "after:bg-material-primary/15 after:absolute after:-inset-2.5 after:rounded-full after:opacity-0 after:transition-opacity",
        "hover:after:opacity-100 focus-visible:after:opacity-100",
        className
      )}
      {...props}
    >
      {/* <span className="bg-material-primary/15 absolute -inset-2.5 z-10 hidden rounded-full group-hover:block group-focus-visible:block"></span> */}

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
