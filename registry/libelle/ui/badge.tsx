import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-libelle-md border border-libelle-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-libelle-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-libelle-primary text-libelle-primary-foreground hover:bg-libelle-primary/80",
        secondary:
          "border-transparent bg-libelle-secondary text-libelle-secondary-foreground hover:bg-libelle-secondary/80",
        destructive:
          "border border-destructive/30 bg-libelle-destructive/15 text-libelle-destructive hover:bg-libelle-destructive/35",
        outline: "text-libelle-foreground",
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
