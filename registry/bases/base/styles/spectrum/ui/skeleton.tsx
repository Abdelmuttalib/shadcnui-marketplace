import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-spectrum-muted rounded-spectrum-md animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
