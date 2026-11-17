"use client";

import { Undo2 } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { cn } from "@/lib/utils";
import {
  mainPaletteColorsKeys,
  ThemePaletteName,
  themePalettesListEntries,
  ThemePaletteVariableKey,
} from "@/registry/registry-palettes";

export function ThemePaletteSelect() {
  const { resolvedTheme } = useTheme();

  const activePalette = useThemePaletteStore((state) => state.activePalette);
  const setActivePalette = useThemePaletteStore(
    (state) => state.setActivePalette
  );

  return (
    <Select value={activePalette} onValueChange={setActivePalette as any}>
      <SelectTrigger
        aria-label="Select color palette"
        className="flex w-full gap-2 rounded-none"
      >
        <SelectValue placeholder={"Select Palette"} />
      </SelectTrigger>
      <SelectContent className="w-full rounded-none">
        {themePalettesListEntries.map(([paletteName, palette]) => {
          return (
            <SelectItem
              key={`theme-palette-${paletteName}`}
              className={cn("flex rounded-none lg:flex-row")}
              value={paletteName as ThemePaletteName}
            >
              <div className="border-foreground/15 flex rounded-none border">
                {mainPaletteColorsKeys.map((color, index) => (
                  <div
                    key={`theme-palette-${paletteName}-${color}-${index}`}
                    className={cn("size-5", {
                      "rounded-l-none": index === 0,
                      "rounded-r-none":
                        index === mainPaletteColorsKeys.length - 1,
                    })}
                    style={{
                      backgroundColor: `oklch(${
                        palette[
                          resolvedTheme
                            ? resolvedTheme === "system"
                              ? "light"
                              : (resolvedTheme as "light" | "dark")
                            : "light"
                        ][color as ThemePaletteVariableKey]
                      })`,
                    }}
                    title={`${color}`}
                  ></div>
                ))}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export function PaletteSelectorInline() {
  const { resolvedTheme } = useTheme();

  const activePalette = useThemePaletteStore((state) => state.activePalette);
  const setActivePalette = useThemePaletteStore(
    (state) => state.setActivePalette
  );

  return (
    <Select value={activePalette} onValueChange={setActivePalette as any}>
      <SelectTrigger
        aria-label="Select palette"
        className="group text-foreground/80 hover:border-primary/30 hover:text-foreground focus:ring-primary/20 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.08] data-[state=open]:text-foreground dark:hover:border-primary/25 relative h-9 rounded-none border border-white/20 bg-white/[0.12] px-3.5 text-[13px] font-medium capitalize shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent hover:bg-white/[0.18] focus:ring-1 focus:ring-offset-0 data-[size=default]:h-9 dark:border-white/[0.12] dark:bg-white/[0.045] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)] dark:hover:bg-white/[0.08] [&>svg]:size-3.5 [&>svg]:opacity-50 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180"
      >
        <SelectValue placeholder={"Select palette"} />
      </SelectTrigger>
      <SelectContent className="w-full rounded-none">
        {themePalettesListEntries.map(([paletteName, palette], index) => {
          return (
            <SelectItem
              key={`theme-palette-${paletteName}`}
              className={cn("flex rounded-none lg:flex-row")}
              value={paletteName as ThemePaletteName}
            >
              <div className="border-foreground/15 flex rounded-none border">
                {mainPaletteColorsKeys.map((color, index) => (
                  <div
                    key={`theme-palette-${paletteName}-${color}-${index}`}
                    className={cn("size-5", {
                      "rounded-l-none": index === 0,
                      "rounded-r-none":
                        index === mainPaletteColorsKeys.length - 1,
                    })}
                    style={{
                      backgroundColor: `oklch(${
                        palette[
                          resolvedTheme
                            ? resolvedTheme === "system"
                              ? "light"
                              : (resolvedTheme as "light" | "dark")
                            : "light"
                        ][color as ThemePaletteVariableKey]
                      })`,
                    }}
                    title={`${color}`}
                  ></div>
                ))}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export function ThemePaletteReset() {
  const { activePalette, onResetPalette } = useThemePaletteStore();

  return (
    <Button
      onClick={onResetPalette}
      size={"icon-xs"}
      variant={"secondary"}
      disabled={!activePalette}
      aria-label="Reset Palette"
      title="Reset Palette"
    >
      <Undo2 className="h-4 w-4" />
      <span className="sr-only">Reset Palette</span>
    </Button>
  );
}
