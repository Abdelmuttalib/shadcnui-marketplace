import { cn } from "cn";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "rounded-cb-sm bg-cb-muted bg-cb-muted-foreground in-data-[slot=tooltip-content]:bg-cb-background/20 in-data-[slot=tooltip-content]:bg-cb-background dark:in-data-[slot=tooltip-content]:bg-cb-background/10 pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
