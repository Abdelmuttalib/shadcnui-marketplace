import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-snow-md bg-snow-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
