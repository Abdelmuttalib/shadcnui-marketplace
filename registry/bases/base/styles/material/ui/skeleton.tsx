import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-material-muted rounded-material-md animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
