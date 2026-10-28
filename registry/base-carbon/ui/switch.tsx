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
        "group peer group/switch focus-visible:border-cb-ring focus-visible:ring-cb-ring aria-invalid:border-cb-destructive aria-invalid:ring-cb-destructive data-checked:bg-cb-primary data-unchecked:bg-cb-muted-foreground/50 focus-visible:ring-offset-cb-background aria-invalid:ring-offset-cb-background relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 focus-visible:ring-offset-1 aria-invalid:ring-2 aria-invalid:ring-offset-1 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[size=default]:h-6 data-[size=default]:w-12 data-[size=sm]:h-5 data-[size=sm]:w-10",
        // [size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="data-checked:bg-cb-primary-foreground data-unchecked:bg-cb-foreground pointer-events-none block rounded-full bg-white ring-0 transition-transform group-data-[size=default]/switch:size-5 group-data-[size=sm]/switch:size-4 group-data-[size=default]/switch:data-checked:translate-x-[25px] group-data-[size=sm]/switch:data-checked:translate-x-[21.5px] group-data-[size=default]/switch:data-unchecked:translate-x-[1px] group-data-[size=sm]/switch:data-unchecked:translate-x-[1px]"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
