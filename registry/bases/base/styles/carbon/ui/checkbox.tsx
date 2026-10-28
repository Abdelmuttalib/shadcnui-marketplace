"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-cb-foreground group-has-[:focus-visible]/field-label:not-data-checked:border-cb-input focus-visible:border-cb-ring focus-visible:ring-cb-ring aria-invalid:border-cb-destructive aria-invalid:ring-cb-destructive aria-invalid:aria-checked:border-cb-primary data-checked:bg-cb-foreground data-checked:text-cb-background group-has-[:focus-visible]/field-label:data-checked:ring-cb-ring rounded-cb-md relative flex size-5 shrink-0 items-center justify-center border shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-offset-1 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-4"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
