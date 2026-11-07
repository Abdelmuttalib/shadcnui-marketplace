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
        "group/radio-group-item peer border-libelle-primary group-has-[:focus-visible]/field-label:not-data-checked:border-libelle-input focus-visible:border-libelle-ring focus-visible:ring-libelle-ring/50 aria-invalid:border-libelle-destructive aria-invalid:ring-libelle-destructive/20 aria-invalid:aria-checked:border-libelle-primary dark:bg-libelle-input/30 dark:aria-invalid:border-libelle-destructive/50 dark:aria-invalid:ring-libelle-destructive/40 data-checked:border-libelle-primary data-checked:bg-libelle-primary data-checked:text-libelle-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-libelle-primary dark:data-checked:bg-libelle-primary relative flex aspect-square size-5 shrink-0 rounded-full border outline-none group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-5 items-center justify-center"
      >
        <span className="bg-libelle-primary-foreground absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
