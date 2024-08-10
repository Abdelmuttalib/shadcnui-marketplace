import { cn } from "@/utils/cn";
import ThemeSwitcher, { ThemeColorSelect } from "./theme-select";

export function UICustomizer({ className }: { className?: string }) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "production") return null;

  return (
    <div
      className={cn(
        "fixed left-1 right-1 top-1 z-50 mx-auto flex w-fit items-center justify-center rounded-lg border px-2 py-1.5 text-sm",
        className
      )}
    >
      <ThemeColorSelect />
      <ThemeSwitcher />
    </div>
  );
}
