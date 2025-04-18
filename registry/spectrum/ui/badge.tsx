import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-spctm-md border border-spctm-border px-1.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-spctm-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-spctm-primary/40 bg-spctm-primary/15 text-spctm-primary hover:bg-spctm-primary/30",
        secondary:
          "border-spctm-input bg-spctm-secondary text-spctm-secondary-foreground hover:bg-spctm-secondary/80",
        destructive:
          "border-spctm-destructive/40 bg-spctm-destructive/15 text-spctm-destructive hover:bg-spctm-destructive/30",
        outline:
          "border-spctm-input text-spctm-foreground hover:bg-spctm-accent hover:text-spctm-accent-foreground",
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
