// @ts-nocheck

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

export type BadgeColor =
  | "primary"
  | "green"
  | "yellow"
  | "red"
  | "blue"
  | "gray"
  | "white"
  | "dark-gray";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  // "whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium lowercase",
  {
    variants: {
      variant: {
        primary:
          "border-primary-600/10 bg-primary-200/70 text-primary-900 dark:opacity-80",

        green:
          "border-green-600/10 bg-green-100/80 text-green-800 dark:opacity-80",

        yellow:
          "border-yellow-600/10 bg-yellow-100/80 text-yellow-800 dark:opacity-90",

        red: "border-red-600/10 bg-red-100/80 text-red-700 dark:opacity-90",
        blue: "border-blue-600/10 bg-blue-100/50 text-blue-600 dark:bg-blue-100 dark:opacity-70",

        gray: "border-gray-600/10 bg-gray-200/70 text-gray-700",

        white: "border-gray-500/10 bg-white text-gray-800",

        "dark-gray":
          "border-gray-600/10 bg-gray-200/70 text-gray-500/80 dark:text-gray-600",
      },
      size: {
        default: "px-2.5 py-1.5",
        xs: "px-2.5 py-1",
        sm: "px-3 py-1.5",
        lg: "px-5 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Badge = ({
  color = "primary",
  variant = "primary",
  children,
  className,
}: {
  color?: BadgeColor;
  variant?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(badgeVariants({ variant: variant, className }), className)}
    >
      {children}
    </span>
  );
};

export default Badge;

// export function BadgesExamples() {
//   return (
//     <div className="flex flex-col">
//       <div className="flex">
//         <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
//           Badge
//         </span>
//         <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
//           Badge
//         </span>
//       </div>
//       <div className="flex">
//         <Badge color="green">Badge</Badge>
//         <Badge color="yellow">Badge</Badge>
//         <Badge color="red">Badge</Badge>
//         <Badge color="blue">Badge</Badge>
//         <Badge color="gray">Badge</Badge>
//         <Badge color="white">Badge</Badge>
//         <Badge color="dark-gray">Badge</Badge>
//       </div>
//     </div>
//   );
// }·
