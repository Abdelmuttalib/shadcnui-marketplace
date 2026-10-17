import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-snow-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-snow-ring ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-snow-primary text-snow-primary-foreground hover:bg-snow-primary/80",
        secondary:
          "border-transparent bg-snow-secondary text-snow-secondary-foreground hover:bg-snow-secondary/80",
        destructive:
          "border-transparent bg-snow-destructive text-snow-destructive-foreground hover:bg-snow-destructive/80",
        outline: "text-snow-foreground",
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
