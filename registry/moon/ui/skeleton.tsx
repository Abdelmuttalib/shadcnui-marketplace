import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-moon-md bg-moon-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
