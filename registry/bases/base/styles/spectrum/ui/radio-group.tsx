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
        "group/radio-group-item peer border-spctm-input group-has-[:focus-visible]/field-label:not-data-checked:border-spctm-input focus-visible:border-spctm-ring focus-visible:ring-spctm-ring/50 aria-invalid:border-spctm-destructive aria-invalid:ring-spctm-destructive/20 aria-invalid:aria-checked:border-spctm-primary dark:bg-spctm-input/30 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:ring-spctm-destructive/40 data-checked:border-spctm-primary data-checked:bg-spctm-primary data-checked:text-spctm-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-spctm-primary dark:data-checked:bg-spctm-primary relative flex aspect-square size-4 shrink-0 rounded-full border outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="bg-spctm-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
