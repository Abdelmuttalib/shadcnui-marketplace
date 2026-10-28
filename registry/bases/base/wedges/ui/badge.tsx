import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-wedges-md px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-wedges-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-wedges-primary/20 text-wedges-primary hover:bg-wedges-primary/80 hover:text-wedges-primary-foreground",
        secondary:
          "border-transparent bg-wedges-secondary/10 text-secondary-foreground hover:bg-wedges-secondary/80 hover:text-wedges-secondary-foreground",
        destructive:
          "border-transparent bg-wedges-destructive/20 text-wedges-destructive hover:bg-wedges-destructive/80 hover:text-wedges-destructive-foreground",
        outline:
          "text-wedges-foreground border border-wedges-border hover:bg-wedges-accent",
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
