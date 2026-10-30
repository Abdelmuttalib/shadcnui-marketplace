"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "cn";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch border-spctm-input/80 hover:data-unchecked:border-spctm-input focus-visible:border-spctm-primary focus-visible:outline-spctm-ring aria-invalid:border-spctm-destructive aria-invalid:outline-spctm-destructive/20 dark:aria-invalid:border-spctm-destructive/50 dark:aria-invalid:outline-spctm-destructive data-checked:bg-spctm-primary data-checked:border-spctm-primary relative inline-flex shrink-0 items-center rounded-full border-2 shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:outline-2 aria-invalid:outline-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-4.5 data-[size=default]:w-7 data-[size=sm]:h-4 data-[size=sm]:w-6",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-spctm-background dark:data-checked:bg-spctm-primary-foreground dark:data-unchecked:bg-spctm-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-2.5 group-data-[size=sm]/switch:size-2 group-data-[size=default]/switch:data-checked:translate-x-3 group-data-[size=sm]/switch:data-checked:translate-x-2.5 group-data-[size=default]/switch:data-unchecked:translate-x-0.5 group-data-[size=sm]/switch:data-unchecked:translate-x-0.5"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
