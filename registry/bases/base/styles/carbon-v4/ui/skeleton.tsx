import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-cb-md bg-cb-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
