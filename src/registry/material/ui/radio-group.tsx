"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    // <div className="group relative inline-flex items-center justify-center">
    //   <span
    //     className={cn(
    //       "absolute hidden rounded-full bg-material-primary/15 p-4 group-hover:block"
    //     )}
    //   />

    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // "aspect-square h-4 w-4 rounded-full border border-gray-600 text-material-primary ring-offset-material-background focus:outline-none focus-visible:ring-4 focus-visible:ring-material-ring/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "aspect-square h-[22px] w-[22px] overflow-hidden rounded-full border-2 border-gray-400 text-material-primary ring-4 ring-transparent ring-offset-material-background hover:ring-secondary focus:outline-none focus:outline-0 focus-visible:border-material-primary focus-visible:outline-0 focus-visible:ring-material-ring/60 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-material-primary dark:border-gray-600 data-[state=checked]:dark:border-material-primary",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    // </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
