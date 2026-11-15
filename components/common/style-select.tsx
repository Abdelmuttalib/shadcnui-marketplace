"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stylesDataList, useStyleStore } from "@/hooks/use-style-store";
import { cn } from "@/lib/utils";
import { StyleName, STYLES } from "@/registry/styles";
import { getStyleVariablesPrefix } from "@/registry/styles-components";

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
        aria-label="Select style"
        className={cn("", triggerClassName)}
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
          {stylesDataList.map((style) => {
            const hoverBgColor = `hover:bg-${getStyleVariablesPrefix(
              style.name
            )}-primary`;
            const hoverTextColor = `hover:text-${getStyleVariablesPrefix(
              style.name
            )}-primary-foreground`;

            return (
              <SelectItem
                value={style.name}
                key={style.name}
                className={`${hoverBgColor} ${hoverTextColor} capitalize`}
              >
                {style.title}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function StyleSelectorInline() {
  const style = useStyleStore((state) => state.style);
  const setStyle = useStyleStore((state) => state.setStyle);

  return (
    <Select
      value={style}
      onValueChange={(value) => setStyle(value as StyleName)}
    >
      <SelectTrigger className="text-foreground/50 h-6 rounded-none border-transparent bg-transparent py-0 text-xs capitalize shadow-none data-[size=default]:h-6 dark:bg-transparent data-[size=default]:[&>svg]:size-3.5">
        <SelectValue placeholder="Select style" />
      </SelectTrigger>

      <SelectContent className="w-full rounded-none">
        <SelectGroup>
          <SelectLabel>Styles</SelectLabel>

          {STYLES.map((style) => {
            const fontClass = `font-${style.font}`;

            return (
              <SelectItem
                key={style.name}
                value={style.name}
                className={fontClass + " capitalize"}
              >
                {style.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
