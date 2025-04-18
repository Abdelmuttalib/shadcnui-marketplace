import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lucid-md bg-lucid-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
