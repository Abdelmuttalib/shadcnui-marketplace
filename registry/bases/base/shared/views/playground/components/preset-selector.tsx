"use client";

import * as React from "react";
import { cn } from "cn";
import { Check, ChevronsUpDown } from "lucide-react";
import type { Popover as PopoverPrimitive } from "radix-ui";

import { type Preset } from "../data/presets";
import { useDesignSystem } from "../../../components/design-system-provider";

interface PresetSelectorProps extends React.ComponentProps<
  typeof PopoverPrimitive.Root
> {
  presets: Preset[];
}

export function PresetSelector({ presets, ...props }: PresetSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedPreset, setSelectedPreset] = React.useState<Preset>();

  const {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } = useDesignSystem();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-label="Load a preset..."
            aria-expanded={open}
            className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
          >
            {selectedPreset ? selectedPreset.name : "Load a preset..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        }
      ></PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandList>
            <CommandEmpty>No presets found.</CommandEmpty>
            <CommandGroup heading="Examples">
              {presets.map((preset) => (
                <CommandItem
                  key={preset.id}
                  onSelect={() => {
                    setSelectedPreset(preset);
                    setOpen(false);
                  }}
                >
                  {preset.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedPreset?.id === preset.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>More examples</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
