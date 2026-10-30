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
        "group/radio-group-item peer border-spctm-input/80 hover:data-unchecked:border-spctm-input group-has-[:focus-visible]/field-label:not-data-checked:border-spctm-input focus-visible:border-spctm-primary focus-visible:outline-spctm-ring aria-invalid:border-spctm-destructive aria-invalid:outline-spctm-destructive/20 aria-invalid:aria-checked:border-spctm-primary dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:outline-spctm-destructive data-checked:border-spctm-primary data-checked:bg-spctm-primary data-checked:text-spctm-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-spctm-primary dark:data-checked:bg-spctm-primary relative flex aspect-square size-4.5 shrink-0 rounded-full border-2 outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="bg-spctm-primary-foreground absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
