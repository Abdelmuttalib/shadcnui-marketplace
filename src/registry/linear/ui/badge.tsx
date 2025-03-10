import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-linear-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-linear-primary/10 text-linear-primary border-linear-primary/10 dark:text-linear-primary-500 dark:bg-linear-primary-500/10",
        secondary:
          "border-transparent bg-linear-secondary/50 text-linear-foreground/80 border-secondary dark:text-linear-foreground/80",
        destructive:
          "border-transparent bg-linear-destructive/10 text-linear-destructive border-linear-destructive/10",
        outline: "text-linear-foreground",
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
