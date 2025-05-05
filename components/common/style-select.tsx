"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { getStyleVariablesPrefix } from "@/registry/styles";

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
      <SelectTrigger className={cn("", triggerClassName)}>
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
          {stylesDataList.map((style) => {
            const hoverBgColor = `focus:bg-${getStyleVariablesPrefix(
              style.name
            )}-primary`;

            return (
              <SelectItem
                value={style.name}
                key={style.name}
                className={`${hoverBgColor} capitalize focus:bg-opacity-15`}
              >
                {style.title}
              </SelectItem>
            );
          })}
          {/* {STYLES.map((style) => (
            <SelectItem value={style} key={style} className="capitalize">
              {style}
            </SelectItem>
          ))} */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
