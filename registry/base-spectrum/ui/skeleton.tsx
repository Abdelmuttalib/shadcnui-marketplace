import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-spctm-muted rounded-spctm-md animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
