import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-wedges-md bg-wedges-muted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
