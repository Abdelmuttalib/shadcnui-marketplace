"use client";

import { Check, ChevronsUpDown, Palette } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { STYLES } from "@/registry/styles";

import * as React from "react";

export function PreviewStyleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  // Only show this switcher on /preview/[base]/[style]/[name].
  const segments = pathname.split("/").filter(Boolean);

  const isPreviewRoute = segments.length === 4 && segments[0] === "preview";

  if (!isPreviewRoute || process.env.NODE_ENV === "production") {
    return null;
  }

  const currentStyle = segments[2];

  const selectedStyle = STYLES.find((style) => style.name === currentStyle);

  function handleStyleChange(styleName: string) {
    if (styleName === currentStyle) {
      setOpen(false);
      return;
    }

    const nextSegments = [...segments];

    // Replace only the [style] segment.
    nextSegments[2] = styleName;

    const nextPath = `/${nextSegments.join("/")}`;

    setOpen(false);
    router.push(nextPath);
  }

  return (
    <div className="">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="min-w-36 justify-between gap-2 shadow-md"
            >
              <span className="flex items-center gap-2 truncate">
                <Palette className="size-4 shrink-0" />

                <span className="truncate">
                  {selectedStyle?.label ?? currentStyle}
                </span>
              </span>

              <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
            </Button>
          }
        ></PopoverTrigger>

        <PopoverContent align="end" className="w-[220px] p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No styles found.</CommandEmpty>

              <CommandGroup heading="Preview styles">
                {STYLES.map((style) => (
                  <CommandItem
                    key={style.name}
                    value={`${style.label} ${style.name}`}
                    onSelect={() => handleStyleChange(style.name)}
                    className="gap-2"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center">
                      {style.icon}
                    </span>

                    <span className="flex-1 truncate">{style.label}</span>

                    <Check
                      className={cn(
                        "size-4",
                        currentStyle === style.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
