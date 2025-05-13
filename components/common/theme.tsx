"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  variant,
}: {
  className?: string;
  variant?: ButtonProps["variant"];
}) {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <Button
      type="button"
      size="icon-sm"
      variant={variant ?? "ghost"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("text-muted-foreground sm:inline-flex", className)}
    >
      {theme === "light" ? (
        <SunIcon className="w-5" />
      ) : (
        <MoonIcon className="w-5" />
      )}
    </Button>
  );
}
