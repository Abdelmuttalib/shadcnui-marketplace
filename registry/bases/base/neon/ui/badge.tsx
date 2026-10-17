import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-neon-md border border-neon-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neon-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neon-primary text-neon-primary-foreground hover:bg-neon-primary/80",
        secondary:
          "border-transparent bg-neon-secondary text-neon-secondary-foreground hover:bg-neon-secondary/80",
        destructive:
          "border-transparent bg-neon-destructive text-neon-destructive-foreground hover:bg-neon-destructive/80",
        outline: "text-neon-foreground",
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
