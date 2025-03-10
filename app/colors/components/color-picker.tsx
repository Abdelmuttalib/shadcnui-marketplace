"use client";

import { forwardRef, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";

import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { hexToHSL, hexToOklch } from "@/lib/color";
import { useForwardedRef } from "@/lib/use-forwarded-ref";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const ColorPicker = forwardRef<
  HTMLInputElement,
  Omit<ButtonProps, "value" | "onChange" | "onBlur"> & ColorPickerProps
>(
  (
    { disabled, value, onChange, onBlur, name, className, ...props },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [open, setOpen] = useState(false);

    const parsedValue = useMemo(() => {
      return value || "#FFFFFF";
    }, [value]);

    const parsedHslValue = useMemo(() => {
      return hexToHSL(parsedValue);
    }, [parsedValue]);

    const parsedOklchValue = useMemo(() => {
      return hexToOklch(parsedValue);
    }, [parsedValue]);

    return (
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
          <Button
            {...props}
            className={cn("block", className)}
            name={name}
            onClick={() => {
              setOpen(true);
            }}
            size="icon"
            style={{
              backgroundColor: parsedValue,
            }}
            variant="outline"
          >
            <div />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-full flex-col gap-4">
          <HexColorPicker color={parsedValue} onChange={onChange} />
          <Input
            maxLength={7}
            onChange={(e) => {
              onChange(e?.currentTarget?.value);
            }}
            ref={ref}
            value={parsedValue}
          />

          <Input value={parsedHslValue} />
          <Input value={parsedOklchValue} />

          <div className="flex flex-col gap-2">
            {/* hex */}
            <div
              className="flex size-9 w-full items-center rounded px-2 text-sm"
              style={{ backgroundColor: parsedValue }}
            >
              hex: {parsedValue}
            </div>
            {/* hsl */}
            <div
              className="flex size-9 w-full items-center rounded px-2 text-sm"
              style={{ backgroundColor: parsedHslValue }}
            >
              hsl: {parsedHslValue}
            </div>
            {/* oklch */}
            <div
              className="flex size-9 w-full items-center rounded px-2 text-sm"
              style={{ backgroundColor: parsedOklchValue }}
            >
              oklch: {parsedOklchValue}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);
ColorPicker.displayName = "ColorPicker";

export { ColorPicker };

// #bfdd07
// hsl(68, 94%, 45%)

// #f310f7
// hsl(299, 94%, 52%)
// oklch(0.5817 25.18 347.01)

// #ff0000
// hsl(0, 100%, 50%)
// oklch(0.01 47.97 345.11)

// #009cff
// hsl(203, 100%, 50%)
//

// oklch(81.24% 12.09 164.15)
// hsl(103, 83%, 50%)
// #50e716
// oklch(0.01 12.09 164.15)

// oklch(0.00 7.28 352.19)
// hsl(242, 93%, 53%)
// oklch(0.00329 7.28 352.19)
