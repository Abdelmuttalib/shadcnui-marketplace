import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-catalyst-muted rounded-catalyst-md animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
