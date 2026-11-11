"use client";

import * as React from "react";
import type { Slider as SliderPrimitive } from "radix-ui";

import { useDesignSystem } from "../../../components/design-system-provider";

interface TopPSelectorProps {
  defaultValue: React.ComponentProps<
    typeof SliderPrimitive.Root
  >["defaultValue"];
}

export function TopPSelector({ defaultValue }: TopPSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  const { HoverCard, HoverCardContent, HoverCardTrigger, Slider, Label } =
    useDesignSystem();

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger
          render={
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="top-p">Top P</Label>
                <span className="text-muted-foreground hover:border-border w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm">
                  {value}
                </span>
              </div>
              <Slider
                id="top-p"
                max={1}
                defaultValue={value}
                step={0.1}
                onValueChange={setValue}
                aria-label="Top P"
              />
            </div>
          }
        ></HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Control diversity via nucleus sampling: 0.5 means half of all
          likelihood-weighted options are considered.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
