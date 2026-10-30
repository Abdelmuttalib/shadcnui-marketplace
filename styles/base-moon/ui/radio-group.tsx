"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "cn";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item peer border-moon-input group-has-[:focus-visible]/field-label:not-data-checked:border-moon-input focus-visible:border-moon-ring focus-visible:ring-moon-ring/50 aria-invalid:border-moon-destructive aria-invalid:ring-moon-destructive/20 aria-invalid:aria-checked:border-moon-primary dark:bg-moon-input/30 dark:aria-invalid:border-moon-destructive/50 dark:aria-invalid:ring-moon-destructive/40 data-checked:border-moon-primary data-checked:bg-moon-primary data-checked:text-moon-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-moon-primary dark:data-checked:bg-moon-primary relative flex aspect-square size-4 shrink-0 rounded-full border outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="bg-moon-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
