import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-linear-md bg-linear-muted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
