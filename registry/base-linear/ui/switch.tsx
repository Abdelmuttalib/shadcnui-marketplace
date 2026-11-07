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
        "peer group/switch focus-visible:border-linear-ring focus-visible:ring-linear-ring aria-invalid:border-linear-destructive aria-invalid:ring-linear-destructive/60 data-checked:bg-linear-primary data-unchecked:bg-linear-muted-foreground/40 relative inline-flex shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 aria-invalid:ring-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-6 data-[size=default]:w-9 data-[size=sm]:h-5 data-[size=sm]:w-7.5",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-linear-background dark:data-checked:bg-linear-primary-foreground dark:data-unchecked:bg-linear-foreground pointer-events-none block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3.5 group-data-[size=default]/switch:data-checked:translate-x-3.5 group-data-[size=sm]/switch:data-checked:translate-x-2.5 group-data-[size=default]/switch:data-unchecked:translate-x-0.5 group-data-[size=sm]/switch:data-unchecked:translate-x-0.5"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
