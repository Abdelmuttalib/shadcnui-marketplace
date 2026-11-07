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
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // "aspect-square h-4 w-4 rounded-full border border-gray-600 text-wedges-primary ring-offset-wedges-background focus:outline-none focus-visible:ring-4 focus-visible:ring-wedges-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "aspect-square h-[18px] w-[18px] overflow-hidden rounded-full border-2 border-wedges-input text-wedges-primary ring-2 ring-transparent ring-offset-2 ring-offset-wedges-background focus:outline-none focus:outline-0 focus-visible:border-wedges-primary focus-visible:outline-0 focus-visible:ring-wedges-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-wedges-primary",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2 w-2 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    // </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
