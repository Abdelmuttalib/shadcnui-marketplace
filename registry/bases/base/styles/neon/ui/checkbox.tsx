"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon, Dot } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-neon-input outline-offset-transparent group-has-[:focus-visible]/field-label:not-data-checked:border-neon-input focus-visible:outline-neon-ring aria-invalid:border-neon-destructive aria-invalid:outline-neon-destructive aria-invalid:aria-checked:border-neon-primary bg-neon-input/40 data-checked:border-neon-primary data-checked:bg-neon-primary data-checked:text-neon-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-neon-primary rounded-neon-sm relative flex size-4 shrink-0 items-center justify-center border shadow-xs outline-offset-2 transition-shadow outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:outline-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-solid",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-1.5"
      >
        {/* <CheckIcon /> */}
        <Dot className="bg-neon-primary-foreground" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
