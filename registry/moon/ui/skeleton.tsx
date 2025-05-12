import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-moon-md bg-moon-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
