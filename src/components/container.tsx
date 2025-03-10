import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("max-w-screen-[1540px] mx-auto px-2 md:px-4", className)}
    >
      {children}
    </div>
  );
}

export function ScreenContainer({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1440px] px-2 md:px-4", className)}>
      {children}
    </div>
  );
}
