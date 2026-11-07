import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-dft-md bg-dft-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
