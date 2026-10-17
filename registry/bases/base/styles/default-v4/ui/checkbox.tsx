"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-dft-input shadow-xs group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:not-data-checked:border-dft-input focus-visible:border-dft-ring focus-visible:ring-3 focus-visible:border-dft-ring/50 aria-invalid:border-dft-destructive aria-invalid:ring-3 aria-invalid:border-dft-destructive/20 aria-invalid:aria-checked:border-dft-primary dark:border-dft-input/30 dark:aria-invalid:border-dft-destructive/50 dark:aria-invalid:border-dft-destructive/40 data-checked:border-dft-primary data-checked:border-dft-primary data-checked:border-dft-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-dft-primary dark:data-checked:border-dft-primary peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 group-has-[:focus-visible]/field-label:ring-0",
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
