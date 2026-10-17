import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-moon-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-moon-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-moon-primary text-moon-primary-foreground hover:bg-moon-primary/80",
        secondary:
          "border-transparent bg-moon-secondary text-moon-secondary-foreground hover:bg-moon-secondary/80",
        destructive:
          "border-transparent bg-moon-destructive text-moon-destructive-foreground hover:bg-moon-destructive/80",
        outline: "text-moon-foreground",
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
