"use client";

import { useTheme } from "next-themes";
import * as React from "react";

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
  const { theme, resolvedTheme, systemTheme } = useTheme();

  const { activePalette, setActivePalette } = useThemePaletteStore();

  React.useEffect(() => {
    console.log(
      "theme, resolvedTheme, systemTheme",
      theme,
      resolvedTheme,
      systemTheme
    );
  }, [theme, resolvedTheme, systemTheme]);

  return (
    <div>
      <Select value={activePalette} onValueChange={setActivePalette}>
        <SelectTrigger className="flex gap-2">
          <SelectValue placeholder={"Select Palette"} />
        </SelectTrigger>
        <SelectContent className="w-full">
          {themePalettesListEntries.map(([paletteName, palette], index) => {
            // const hoverBgColor = `hover:bg-[oklch(${
            //   palette[theme || "light"]["primary"]
            // } / 0.3)]`;
            // console.log("paletteName", palette[theme]["primary"]);
            // oklch(0.93 0.1703 128.84 / 0.3)
            console.log(
              "PALETTE",
              paletteName,
              theme,
              resolvedTheme,
              systemTheme
            );
            return (
              <SelectItem
                key={`theme-palette-${paletteName}`}
                className={cn(
                  "flex rounded-sm lg:flex-row"
                  // hoverBgColor
                )}
                // style={{
                //   backgroundColor: `oklch(${
                //     palette[theme][color as ThemePaletteVariableKey]
                //   })`,
                // }}
                value={paletteName as ThemePaletteName}
                // title={`${color}`}
              >
                <div className="flex rounded-md border border-foreground/15">
                  {mainPaletteColorsKeys.map((color, index) => (
                    <div
                      key={`theme-palette-${paletteName}-${color}-${index}`}
                      className={cn("size-5", {
                        // "rounded-full": index === 0,
                        "rounded-l-sm": index === 0,
                        "rounded-r-sm":
                          index === mainPaletteColorsKeys.length - 1,
                        // "rounded-r-sm": index === mainColors.length - 1,
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
    </div>
  );
}
