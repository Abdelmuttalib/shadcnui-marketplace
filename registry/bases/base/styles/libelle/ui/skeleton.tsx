import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-libelle-muted rounded-libelle-md animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
