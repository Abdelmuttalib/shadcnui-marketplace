"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMounted } from "@/hooks/use-mounted";
import { type ThemeColorType, useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/utils/cn";
import { PRIMARY_THEME_COLORS } from "@/utils/theme-colors";

export function ThemeModeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={setTheme as any}>
      <SelectTrigger className="max-w-28 capitalize">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          key={`theme-mode-light`}
          value={"light"}
          className="capitalize"
        >
          light
        </SelectItem>
        <SelectItem
          key={`theme-mode-dark`}
          value={"dark"}
          className="capitalize"
        >
          dark
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export function ThemeModeRadio() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div className="flex items-center overflow-hidden rounded-full border">
      <span className="sr-only">Select a display theme:</span>
      <span>
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full p-1",
            {
              "border-input bg-accent/80 text-foreground border":
                theme === "system",
            }
          )}
        >
          <span className="sr-only">system</span>
          <Icons.system />
        </button>
      </span>
      <span>
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full p-1",
            {
              "border-input bg-accent/80 text-foreground border":
                theme === "light",
            }
          )}
        >
          <span className="sr-only">light</span>
          <Icons.sun />
        </button>
      </span>
      <span>
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full p-1",
            {
              "border-input bg-accent/80 text-foreground border":
                theme === "dark",
            }
          )}
        >
          <span className="sr-only">dark</span>
          <Icons.moon />
        </button>
      </span>
    </div>
  );
}

export default function ThemeSwitcher({
  className,
  variant,
}: {
  className?: string;
  variant?: ButtonProps["variant"];
}) {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  // return (
  //   <div className="flex flex-wrap gap-2">
  //     <Button
  //       type="button"
  //       variant={variant ?? "ghost"}
  //       onClick={() => setTheme("light")}
  //       className={cn("text-foreground-light sm:inline-flex", className)}
  //       iconLeft={<SunIcon className="w-5" />}
  //       size="sm"
  //       disabled={theme === "light"}
  //     >
  //       Light
  //     </Button>
  //     <Button
  //       type="button"
  //       variant={variant ?? "ghost"}
  //       onClick={() => setTheme("dark")}
  //       className={cn("text-foreground-light sm:inline-flex", className)}
  //       iconLeft={<MoonIcon className="w-5" />}
  //       size="sm"
  //       disabled={theme === "dark"}
  //     >
  //       Dark
  //     </Button>
  //   </div>
  // );

  return (
    <Button
      type="button"
      size="icon-sm"
      variant={variant ?? "ghost"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn("text-foreground-light sm:inline-flex", className)}
    >
      {theme === "light" ? (
        <SunIcon className="w-5" />
      ) : (
        <MoonIcon className="w-5" />
      )}
    </Button>
  );
}

import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";

import { Icons } from "./icons";

export function ThemeColorSelect() {
  const [themeColor, setThemeColor] = useThemeColor();

  return (
    <div className="flex flex-wrap gap-2">
      {PRIMARY_THEME_COLORS?.map(
        ({ name, color }: { name: ThemeColorType; color: string }) => (
          <Button
            key={`${name}`}
            variant="ghost"
            onClick={() => {
              setThemeColor({
                colorName: name,
              });
            }}
            className={cn(
              "text-foreground flex items-center rounded-lg font-medium capitalize",
              {
                "ring-ring ring-offset-background ring-2":
                  name === themeColor.colorName,
              }
            )}
            size="icon-sm"
          >
            <span
              style={{
                backgroundColor: color,
              }}
              className={cn("h-5 w-5 rounded-lg")}
            ></span>
          </Button>
        )
      )}
    </div>
  );
}
