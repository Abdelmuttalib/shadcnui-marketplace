import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-lucid-md bg-lucid-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
