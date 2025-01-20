import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

{
  /* <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span> */
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full ring-1 ring-iset px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "ring-transparent bg-primary text-primary-foreground",
        secondary: "ring-transparent bg-secondary text-secondary-foreground",
        white: "ring-transparent bg-secondary text-secondary-foreground",
        destructive:
          "ring-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground ring-transparent",

        primary:
          "bg-primary-50 text-primary-600 ring-primary-500/20 dark:bg-primary-500/20 dark:text-primary-400 dark:ring-primary-500/40",

        green:
          "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/30",

        yellow:
          "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-500 dark:ring-yellow-500/30",

        red: "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-500/10 dark:text-red-500 dark:ring-red-500/30",

        blue: "bg-blue-50 text-blue-700 ring-blue-700/20 dark:bg-blue-500/10 dark:text-blue-500 dark:ring-blue-500/30",

        neutral:
          "bg-gray-50 text-gray-600 ring-gray-500/20 dark:bg-gray-500/20 dark:text-gray-400 dark:ring-gray-500/40",
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
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export default Badge;
