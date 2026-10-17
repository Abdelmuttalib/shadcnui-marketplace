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
        "group/switch rounded-cb-full shadow-xs focus-visible:border-cb-ring focus-visible:ring-3 focus-visible:border-cb-ring/50 aria-invalid:border-cb-destructive aria-invalid:ring-3 aria-invalid:border-cb-destructive/20 dark:aria-invalid:border-cb-destructive/50 dark:aria-invalid:border-cb-destructive/40 data-checked:border-cb-primary data-unchecked:border-cb-input dark:data-unchecked:border-cb-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50 peer relative inline-flex shrink-0 items-center border border-transparent outline-none transition-all after:absolute after:-inset-x-3 after:-inset-y-2 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 data-[size=default]:h-[18.4px] data-[size=sm]:h-[14px] data-[size=default]:w-[32px] data-[size=sm]:w-[24px]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="rounded-cb-full bg-cb-background group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-cb-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-cb-foreground pointer-events-none block ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
