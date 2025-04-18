import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-spctm-md animate-pulse bg-spctm-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
