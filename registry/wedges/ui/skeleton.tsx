import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-wedges-md bg-wedges-muted animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
