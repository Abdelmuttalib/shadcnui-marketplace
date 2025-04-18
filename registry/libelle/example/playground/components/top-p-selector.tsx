"use client";

import { SliderProps } from "@radix-ui/react-slider";
import * as React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/libelle/ui/hover-card";
import { Label } from "@/registry/libelle/ui/label";
import { Slider } from "@/registry/libelle/ui/slider";

interface TopPSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

export function TopPSelector({ defaultValue }: TopPSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="top-p">Top P</Label>
              <span className="rounded-libelle-md text-libelle-muted-foreground w-12 border border-transparent px-2 py-0.5 text-right text-sm hover:border-border">
                {value}
              </span>
            </div>
            <Slider
              id="top-p"
              max={1}
              defaultValue={value}
              step={0.1}
              onValueChange={setValue}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Top P"
            />
          </div>
        </HoverCardTrigger>
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
