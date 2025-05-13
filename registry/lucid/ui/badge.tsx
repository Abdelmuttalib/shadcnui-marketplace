import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lucid-md border border-lucid-border px-2 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-lucid-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-lucid-primary text-lucid-primary-foreground hover:bg-lucid-primary/80",
        secondary:
          "border-transparent bg-lucid-secondary text-lucid-secondary-foreground hover:bg-lucid-secondary/80",
        destructive:
          "border-transparent bg-lucid-destructive text-lucid-destructive-foreground hover:bg-lucid-destructive/80",
        outline: "text-lucid-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
