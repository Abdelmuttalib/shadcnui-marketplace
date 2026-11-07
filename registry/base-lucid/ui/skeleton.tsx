import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-lucid-muted rounded-lucid-md animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
