import { Brush } from "lucide-react";

import { cn } from "@/utils/cn";

import ThemeSwitcher, { ThemeColorSelect2 } from "./theme-select";

export function UICustomizer({ className }: { className?: string }) {
  // if (process.env.NEXT_PUBLIC_NODE_ENV === "production") return null;

  return (
    <div
      className={cn(
        "fixed left-1 right-1 top-1 z-50 mx-auto flex w-fit items-center justify-center rounded-lg border bg-card px-2 py-1 text-sm",
        className
      )}
    >
      <Brush className="text-foreground-secondary mr-2 size-4" />
      Customize
      <ThemeColorSelect2 />
      <ThemeSwitcher />
    </div>
  );
}

export function UICustomizer2({ className }: { className?: string }) {
  // if (process.env.NEXT_PUBLIC_NODE_ENV === "production") return null;

  return (
    <div
      className={cn(
        "flex w-fit items-center justify-center rounded-lg border bg-card px-2 py-1 text-sm",
        className
      )}
    >
      <Brush className="text-foreground-secondary mr-2 size-4" />
      Customize
      <ThemeColorSelect2 />
      <ThemeSwitcher />
    </div>
  );
}
