import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-material-md px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-material-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-material-primary/15 text-material-primary hover:bg-material-primary/80 hover:text-material-primary-foreground",
        secondary:
          "border-transparent bg-material-secondary/15 text-material-secondary-foreground hover:bg-material-secondary/80",
        destructive:
          "border-transparent bg-material-destructive/5 text-material-destructive hover:bg-material-destructive/80 hover:text-material-destructive-foreground",
        outline: "text-material-foreground",
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
