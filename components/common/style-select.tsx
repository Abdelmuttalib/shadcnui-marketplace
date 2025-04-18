"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STYLES, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";

export function StyleSelect({
  defaultStyle,
  triggerClassName,
}: {
  defaultStyle?: any;
  triggerClassName?: string;
}) {
  const { style, setStyle } = useStyleStore();

  function onStyleChange(e: any) {
    setStyle(e);
  }

  return (
    <Select defaultValue={style || defaultStyle} onValueChange={onStyleChange}>
      <SelectTrigger
        className={cn("w-fit max-w-48 border-input", triggerClassName)}
      >
        <SelectValue
          placeholder="select a style"
          className="text-muted-foreground"
        >
          <span className="text-muted-foreground">style:</span>{" "}
          <span className="mr-2 font-medium capitalize">
            {style || defaultStyle}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {STYLES.map((style) => (
            <SelectItem value={style} key={style} className="capitalize">
              {style}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
