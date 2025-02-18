"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  // <div className="group relative inline-flex items-center justify-center">
  //   <div
  //     className={cn(
  //       "absolute hidden rounded-full bg-material-primary/15 p-4 group-hover:block"
  //     )}
  //   />

  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer relative h-[19px] w-[19px] shrink-0 rounded-material-sm border-2 border-gray-400 bg-transparent ring-4 ring-transparent ring-offset-material-background hover:ring-material-secondary focus-visible:outline-none focus-visible:ring-material-ring/40 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-material-primary data-[state=checked]:bg-material-primary data-[state=checked]:text-material-primary-foreground dark:border-material-gray-600 data-[state=checked]:dark:border-material-primary",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
  // </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

// export default function CheckIcon() {
//   return (
//     <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
//       <div className="flex items-center justify-center w-8 h-8 rounded-material-lg bg-purple-600">
//         <svg
//           className="w-5 h-5 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <polyline points="20 6 9 17 4 12" />
//         </svg>
//       </div>
//     </div>
//   )
// }
