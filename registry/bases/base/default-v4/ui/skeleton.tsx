import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-dft-md bg-dft-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
