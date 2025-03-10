import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const richBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border-primary/30 dark:bg-primary/15 dark:border-primary/40",
        green:
          "bg-green-50 text-green-700 border-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:border-green-500/30",
        yellow:
          "bg-yellow-50 text-yellow-800 border-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-500 dark:border-yellow-500/30",
        red: "bg-red-50 text-red-700 border-red-600/20 dark:bg-red-500/10 dark:text-red-500 dark:border-red-500/30",
        blue: "bg-blue-50 text-blue-700 border-blue-700/20 dark:bg-blue-500/10 dark:text-blue-500 dark:border-blue-500/30",
        neutral:
          "bg-gray-50 text-gray-600 border-gray-500/20 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface RichBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof richBadgeVariants> {}

function RichBadge({ className, variant, ...props }: RichBadgeProps) {
  return (
    <span
      className={cn(richBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { RichBadge, richBadgeVariants };
