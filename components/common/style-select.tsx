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
      <SelectTrigger
        aria-label="Select style"
        className="group text-foreground/80 hover:border-primary/30 hover:text-foreground focus:ring-primary/20 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.08] data-[state=open]:text-foreground dark:hover:border-primary/25 relative h-9 rounded-none border border-white/20 bg-white/[0.12] px-3.5 text-[13px] font-medium capitalize shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent hover:bg-white/[0.18] focus:ring-1 focus:ring-offset-0 data-[size=default]:h-9 dark:border-white/[0.12] dark:bg-white/3 dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.2)] dark:hover:bg-white/[0.08] [&>svg]:size-3.5 [&>svg]:opacity-50 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180"

        // className="glass-3 group border-border/70 text-foreground/75 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-foreground focus:ring-primary/20 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.06] data-[state=open]:text-foreground h-9 rounded-none px-3.5 text-[13px] font-medium capitalize shadow-sm shadow-black/[0.03] transition-all duration-200 focus:ring-1 focus:ring-offset-0 data-[size=default]:h-9 [&>svg]:size-3.5 [&>svg]:opacity-60 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180"

        // className="glass-3 group text-foreground/65 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-foreground focus:ring-primary/20 dark:hover:bg-primary/[0.06] dark:data-[state=open]:border-primary/25 data-[state=open]:border-primary/20 data-[state=open]:text-foreground h-7 rounded-md px-2.5 text-xs font-medium capitalize shadow-sm shadow-black/[0.02] transition-all duration-200 focus:ring-1 focus:ring-offset-0 data-[size=default]:h-7 dark:shadow-black/10 [&>svg]:size-3 [&>svg]:opacity-50 [&>svg]:transition-transform data-[state=open]:[&>svg]:rotate-180"
      >
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
                className={fontClass + " rounded-none capitalize"}
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
