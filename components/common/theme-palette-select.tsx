"use client";

import { Undo2 } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

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

  const { activePalette, setActivePalette } = useThemePaletteStore();

  return (
    <Select value={activePalette} onValueChange={setActivePalette as any}>
      <SelectTrigger
        aria-label="Select color palette"
        className="flex w-full gap-2 rounded-none"
      >
        <SelectValue placeholder={"Select Palette"} />
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
