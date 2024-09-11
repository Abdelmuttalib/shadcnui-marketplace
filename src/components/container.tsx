import { cn } from "@/utils/cn";
import type { ClassValue } from "clsx";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto max-w-screen-[1540px] px-2 md:px-4", className)}
    >
      {children}
    </div>
  );
}
