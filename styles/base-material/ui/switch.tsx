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
        "group peer group/switch focus-visible:border-material-ring focus-visible:ring-material-ring/50 aria-invalid:border-material-destructive aria-invalid:ring-material-destructive/20 dark:aria-invalid:border-material-destructive/50 dark:aria-invalid:ring-material-destructive/40 data-checked:bg-material-primary data-unchecked:bg-material-input dark:data-unchecked:bg-material-input/80 relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 aria-invalid:ring-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-4 data-[size=default]:w-8 data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",

        "after:bg-material-primary/15 after:pointer-events-none after:absolute after:-inset-x-2.5 after:-inset-y-2.5 after:rounded-full after:opacity-0 after:transition-opacity after:content-['']",
        "hover:after:opacity-100 focus-visible:after:opacity-100",
        "aria-invalid:after:bg-material-destructive/15 aria-invalid:after:opacity-100",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="border-material-border pointer-events-none block rounded-full border bg-white ring-0 transition-transform group-hover:z-10 group-data-[size=default]/switch:size-5 group-data-[size=sm]/switch:size-4 aria-invalid:after:z-10 group-data-[size=default]/switch:data-checked:translate-x-3.5 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:-translate-x-0.5 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:border-none"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
