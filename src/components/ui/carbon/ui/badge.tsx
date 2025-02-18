import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none border border-cb-border",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-cb-primary/10 text-cb-primary border-cb-primary/10 dark:text-cb-primary-500 dark:bg-cb-primary-500/10",
        secondary:
          "border-transparent bg-cb-secondary/50 text-cb-foreground/80 border-cb-secondary dark:text-cb-foreground/80",
        destructive:
          "border-transparent bg-cb-destructive/10 text-cb-destructive border-cb-destructive/10",
        outline: "text-cb-foreground",
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
