"use client";

import { Check, Copy, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";
import { cn } from "@/lib/utils";
import {
  mainPaletteColorsKeys,
  ThemePaletteName,
  themePalettesListEntries,
  ThemePaletteVariableKey,
} from "@/registry/registry-palettes";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { toast } from "../ui/use-toast";
import { ClientStringCode } from "./client-string-code";
import { StringCode } from "./string-code";

export function ThemeCustomizerTabs() {
  const [copied, setCopied] = useState(false);

  const { resolvedTheme } = useTheme();

  const { activePalette, setActivePalette, onResetPalette, onResetRadius } =
    useThemePaletteStore();

  const { style: activeStyle, setStyle: setActiveStyle } = useStyleStore();

  function onResetAll() {
    onResetPalette();
    onResetRadius();
  }

  const generateConfigCode = () => {
    return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "${""}",
      },
      borderRadius: {
        DEFAULT: "${"radius"}rem",
      },
      fontSize: {
        base: "${"fontSize"}px",
      },
      spacing: {
        base: "${"spacing"}px",
      },
    },
  },
}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateConfigCode());
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The configuration has been copied to your clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs defaultValue="styles" className="min-h-full w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="styles" className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Styles</span>
        </TabsTrigger>
        {/* <TabsTrigger value="colors" className="flex items-center gap-1.5">
            <Palette className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Colors</span>
          </TabsTrigger> */}
        {/* <TabsTrigger value="typography" className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M4 7V4h16v3" />
              <path d="M9 20h6" />
              <path d="M12 4v16" />
            </svg>
            <span className="hidden sm:inline">Type</span>
          </TabsTrigger> */}
        <TabsTrigger value="export" className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <path d="m16 6-4-4-4 4" />
            <path d="M12 2v13" />
          </svg>
          <span className="hidden sm:inline">Export</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="styles" className="min-h-full space-y-6 pt-6">
        <div className="space-y-4">
          {/* <div>
              <h3 className="mb-3 text-sm font-medium">UI Style</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Object.entries(UI_STYLES).map(([key, style]) => (
                  <div
                    key={key}
                    className={cn(
                      "relative flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-all hover:border-primary/50 hover:bg-accent/50",
                      selectedStyle === key
                        ? "border-primary bg-accent/80"
                        : "border-border"
                    )}
                    onClick={() => applyStyle(key)}
                  >
                    <div
                      className={cn(
                        "mb-2 h-12 w-full border bg-background",
                        key === "minimal" && "rounded-sm shadow-sm",
                        key === "soft" && "rounded-lg shadow-md",
                        key === "brutalist" &&
                          "rounded-none border-2 border-black",
                        key === "glassmorphism" &&
                          "rounded-lg bg-white/80 shadow-lg backdrop-blur-sm",
                        key === "neumorphism" &&
                          "rounded-2xl bg-gray-100 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]"
                      )}
                    ></div>
                    <span className="text-xs font-medium">{style.name}</span>
                  </div>
                ))}
              </div>
            </div> */}

          <div>
            <h3 className="mb-3 text-sm font-medium">UI Style</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
              {stylesDataList.map((style) => (
                <div
                  key={`theme-style-${style.name}-${style.styleVariablePrefix}`}
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-md border p-2 transition-all hover:border-primary/50 hover:bg-accent/50",
                    activeStyle === style.name
                      ? "border-primary bg-accent/80 italic"
                      : "border-border"
                  )}
                  onClick={() => setActiveStyle(style.name)}
                  // onClick={() => applyStyle(key)}
                >
                  <div
                    className="absolute bottom-0 right-0 size-6 bg-opacity-40 blur-xl"
                    style={{
                      backgroundColor: `oklch(var(--${style.styleVariablePrefix}-primary))`,
                    }}
                  ></div>
                  {/* <div
                      className={cn(
                        "mb-2 h-12 w-full border bg-background"
                        key === "minimal" && "rounded-sm shadow-sm",
                        key === "soft" && "rounded-lg shadow-md",
                        key === "brutalist" &&
                          "rounded-none border-2 border-black",
                        key === "glassmorphism" &&
                          "rounded-lg bg-white/80 shadow-lg backdrop-blur-sm",
                        key === "neumorphism" &&
                          "rounded-2xl bg-gray-100 shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]"
                      )}
                    ></div> */}
                  <span className="text-lg font-medium">{style.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Color Palette</h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-2">
              {themePalettesListEntries.map(([key, palette]) => (
                <button
                  key={key}
                  className={cn(
                    "relative flex cursor-pointer items-center rounded-md border p-3 outline-none transition-all hover:border-primary/50 hover:bg-accent/50",
                    activePalette === key
                      ? "border-primary bg-accent/80"
                      : "border-input"
                  )}
                  onClick={() => setActivePalette(key as ThemePaletteName)}
                >
                  <span className="flex overflow-hidden rounded-md">
                    {mainPaletteColorsKeys.map((colorKey, colorIndex) => (
                      <span
                        key={`theme-palette-${key}-${colorKey}`}
                        className={cn(
                          "h-10 w-12 border-border",
                          {
                            "border-primary bg-accent/80": key === colorKey,
                            "rounded-l-md": colorIndex === 0,
                            "rounded-r-md":
                              colorIndex === mainPaletteColorsKeys.length - 1,
                          }
                          // key === colorKey
                          //   ? "border-primary bg-accent/80"
                          //   : "border-border"
                        )}
                        style={{
                          backgroundColor: `oklch(${
                            palette[
                              resolvedTheme === "system"
                                ? "light"
                                : (resolvedTheme as "light" | "dark")
                            ][colorKey as ThemePaletteVariableKey]
                          })`,
                        }}
                        title={`${colorKey}`}
                      ></span>
                    ))}
                  </span>
                  {/* <div className="mb-2 flex h-8 w-full overflow-hidden rounded-md">
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.primary }}
                      ></div>
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.secondary }}
                      ></div>
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.accent }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium capitalize">
                      {key}
                    </span> */}
                </button>
              ))}
            </div>
          </div>

          {/* <div>
              <h3 className="mb-3 text-sm font-medium">Color Palette</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {Object.entries(COLOR_PALETTES).map(([key, palette]) => (
                  <div
                    key={key}
                    className={cn(
                      "relative flex cursor-pointer flex-col items-center rounded-lg border p-3 transition-all hover:border-primary/50 hover:bg-accent/50",
                      selectedPalette === key
                        ? "border-primary bg-accent/80"
                        : "border-border"
                    )}
                    onClick={() => applyPalette(key)}
                  >
                    <div className="mb-2 flex h-8 w-full overflow-hidden rounded-md">
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.primary }}
                      ></div>
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.secondary }}
                      ></div>
                      <div
                        className="h-full w-1/3"
                        style={{ backgroundColor: palette.accent }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium capitalize">
                      {key}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

          {/* <div>
              <h3 className="mb-3 text-sm font-medium">Border Radius</h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {Object.entries(RADIUS_PRESETS).map(([key, preset]) => (
                  <div
                    key={key}
                    className={cn(
                      "relative flex cursor-pointer flex-col items-center rounded-lg border p-3 transition-all hover:border-primary/50 hover:bg-accent/50",
                      selectedRadius === key
                        ? "border-primary bg-accent/80"
                        : "border-border"
                    )}
                    onClick={() => applyRadius(key)}
                  >
                    <div
                      className={cn(
                        "mb-2 h-12 w-12 rounded-b-none rounded-r-none border-2 border-b-0 border-l border-r-0 border-t bg-primary/20",
                        preset.preview
                      )}
                    ></div>
                    <span className="text-xs font-medium">{preset.name}</span>
                  </div>
                ))}
              </div>
            </div> */}
        </div>
      </TabsContent>

      {/* <TabsContent value="colors" className="min-h-full space-y-6 pt-6">
          <div className="grid gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Primary Colors</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="primary-color">Primary</Label>
                    <div
                      className="h-5 w-5 rounded-full border shadow-sm"
                      style={{ backgroundColor: currentTheme.primary }}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        id="primary-color"
                        type="color"
                        value={currentTheme.primary}
                        onChange={(e) =>
                          handleColorChange("primary", e.target.value)
                        }
                        className="h-10 w-10 cursor-pointer rounded-md p-1"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: currentTheme.primary,
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      ></div>
                    </div>
                    <Input
                      value={currentTheme.primary}
                      onChange={(e) =>
                        handleColorChange("primary", e.target.value)
                      }
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="secondary-color">Secondary</Label>
                    <div
                      className="h-5 w-5 rounded-full border shadow-sm"
                      style={{ backgroundColor: currentTheme.secondary }}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        id="secondary-color"
                        type="color"
                        value={currentTheme.secondary}
                        onChange={(e) =>
                          handleColorChange("secondary", e.target.value)
                        }
                        className="h-10 w-10 cursor-pointer rounded-md p-1"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: currentTheme.secondary,
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      ></div>
                    </div>
                    <Input
                      value={currentTheme.secondary}
                      onChange={(e) =>
                        handleColorChange("secondary", e.target.value)
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Accent Colors</h3>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="accent-color">Accent</Label>
                    <div
                      className="h-5 w-5 rounded-full border shadow-sm"
                      style={{ backgroundColor: currentTheme.accent }}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        id="accent-color"
                        type="color"
                        value={currentTheme.accent}
                        onChange={(e) =>
                          handleColorChange("accent", e.target.value)
                        }
                        className="h-10 w-10 cursor-pointer rounded-md p-1"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: currentTheme.accent,
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      ></div>
                    </div>
                    <Input
                      value={currentTheme.accent}
                      onChange={(e) =>
                        handleColorChange("accent", e.target.value)
                      }
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="muted-color">Muted</Label>
                    <div
                      className="h-5 w-5 rounded-full border shadow-sm"
                      style={{ backgroundColor: currentTheme.muted }}
                    ></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Input
                        id="muted-color"
                        type="color"
                        value={currentTheme.muted}
                        onChange={(e) =>
                          handleColorChange("muted", e.target.value)
                        }
                        className="h-10 w-10 cursor-pointer rounded-md p-1"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: currentTheme.muted,
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      ></div>
                    </div>
                    <Input
                      value={currentTheme.muted}
                      onChange={(e) =>
                        handleColorChange("muted", e.target.value)
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Background</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="background-color">Background</Label>
                  <div
                    className="h-5 w-5 rounded-full border shadow-sm"
                    style={{ backgroundColor: currentTheme.background }}
                  ></div>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Input
                      id="background-color"
                      type="color"
                      value={currentTheme.background}
                      onChange={(e) =>
                        handleColorChange("background", e.target.value)
                      }
                      className="h-10 w-10 cursor-pointer rounded-md p-1"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-md"
                      style={{
                        backgroundColor: currentTheme.background,
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    ></div>
                  </div>
                  <Input
                    value={currentTheme.background}
                    onChange={(e) =>
                      handleColorChange("background", e.target.value)
                    }
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent> */}

      {/* <TabsContent value="typography" className="min-h-full space-y-6 pt-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Font Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-size">Font Size</Label>
                    <span className="text-xs text-muted-foreground">
                      {fontSize}px
                    </span>
                  </div>
                  <Slider
                    id="font-size"
                    min={12}
                    max={20}
                    step={1}
                    value={[fontSize]}
                    onValueChange={(value) => setFontSize(value[0])}
                    className="[&>span:first-child]:h-2 [&>span:first-child]:bg-primary/20 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Small</span>
                    <span>Large</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="border-radius">Border Radius</Label>
                    <span className="text-xs text-muted-foreground">
                      {radius}rem
                    </span>
                  </div>
                  <Slider
                    id="border-radius"
                    min={0}
                    max={2}
                    step={0.1}
                    value={[radius]}
                    onValueChange={(value) => setRadius(value[0])}
                    className="[&>span:first-child]:h-2 [&>span:first-child]:bg-primary/20 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Square</span>
                    <span>Round</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Typography</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="font-family">Font Family</Label>
                  <Select defaultValue="sans">
                    <SelectTrigger id="font-family" className="w-full">
                      <SelectValue placeholder="Select font family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sans">Inter (Sans Serif)</SelectItem>
                      <SelectItem value="serif">
                        Merriweather (Serif)
                      </SelectItem>
                      <SelectItem value="mono">
                        JetBrains Mono (Monospace)
                      </SelectItem>
                      <SelectItem value="display">
                        Montserrat (Display)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="font-weight">Font Weight</Label>
                  <Select defaultValue="regular">
                    <SelectTrigger id="font-weight" className="w-full">
                      <SelectValue placeholder="Select font weight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light (300)</SelectItem>
                      <SelectItem value="regular">Regular (400)</SelectItem>
                      <SelectItem value="medium">Medium (500)</SelectItem>
                      <SelectItem value="semibold">Semibold (600)</SelectItem>
                      <SelectItem value="bold">Bold (700)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="font-smoothing" />
                  <Label htmlFor="font-smoothing">Enable font smoothing</Label>
                </div>
              </div>
            </div>
          </div>
        </TabsContent> */}

      <TabsContent value="export" className="min-h-full space-y-6 pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Configuration Code</h3>
            <div className="relative">
              {/* <pre>
                  <code>{generateConfigCode()}</code>
                </pre> */}
              {/* <StringCode c={"console.log"} /> */}
              <ClientStringCode c={generateConfigCode()} />

              {/* <StringCode StringCode c={generateConfigCode()}></StringCode> */}
              {/* <pre>
                  <code></code>
                </pre> */}
              <Button
                size="sm"
                variant="secondary"
                className="absolute right-2 top-2"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check className="mr-1 h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Installation</h3>
            <div className="relative">
              <pre>
                <code className="language-tsx">
                  {`# Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Copy the configuration above into your tailwind.config.js file`}
                </code>
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Export Options</h3>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Export as JSON
              </Button>
              <Button variant="outline" className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10h10V2z" />
                  <path d="M12 12H2v10h10V12z" />
                  <path d="M22 2h-10v10h10V2z" />
                  <path d="M22 12h-10v10h10V12z" />
                </svg>
                Export as CSS
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
