import { cn } from "@/utils/cn";

import type { ClassValue } from "clsx";

interface LabelBadgeProps {
  name: string;
  color: string;
  className?: ClassValue;
}

export default function LabelBadge({
  name,
  color,
  className,
}: LabelBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md border border-gray-500/10 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800/40 dark:text-gray-400",
        className
      )}
    >
      <span
        className="h-2 w-2 rounded-[2px]"
        style={{
          backgroundColor: color,
        }}
      ></span>
      <span>{name}</span>
    </div>
  );
}
