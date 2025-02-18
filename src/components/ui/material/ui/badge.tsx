import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-material-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-material-primary text-material-primary-foreground hover:bg-material-primary/80",
        secondary:
          "border-transparent bg-material-secondary text-secondary-foreground hover:bg-material-secondary/80",
        destructive:
          "border-transparent bg-material-destructive text-material-destructive-foreground hover:bg-material-destructive/80",
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
