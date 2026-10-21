import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-linear-muted rounded-linear-md animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
