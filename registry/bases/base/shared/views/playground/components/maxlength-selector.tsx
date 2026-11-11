"use client";

import * as React from "react";
import type { Slider as SliderPrimitive } from "radix-ui";

import { useDesignSystem } from "@/registry/bases/base/shared/components/design-system-provider";

interface MaxLengthSelectorProps {
  defaultValue: React.ComponentProps<
    typeof SliderPrimitive.Root
  >["defaultValue"];
}

export function MaxLengthSelector({ defaultValue }: MaxLengthSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  const {
    Slider: SliderPrimitive,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Label,
    Slider,
  } = useDesignSystem();

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger
          render={
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="maxlength">Maximum Length</Label>
                <span className="text-muted-foreground hover:border-border w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm">
                  {value}
                </span>
              </div>
              <Slider
                id="maxlength"
                max={4000}
                defaultValue={value}
                step={10}
                onValueChange={setValue}
                aria-label="Maximum Length"
              />
            </div>
          }
        ></HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          The maximum number of tokens to generate. Requests can use up to 2,048
          or 4,000 tokens, shared between prompt and completion. The exact limit
          varies by model.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
