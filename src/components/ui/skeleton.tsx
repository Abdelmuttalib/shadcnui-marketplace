import { cn } from "@/utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse cursor-wait rounded-md bg-accent-hover",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
