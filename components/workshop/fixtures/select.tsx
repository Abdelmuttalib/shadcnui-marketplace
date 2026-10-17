"use client";

import * as Default from "@/registry/bases/base/default/ui/select";
import * as V4 from "@/registry/bases/base/styles/default-v4/ui/select";

import type { FixtureSide } from "./types";

export function SelectFixture({ side }: { side: FixtureSide }) {
  const mods = side === "default" ? Default : V4;
  const { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } =
    mods;
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Select defaultValue="apple">
        <SelectTrigger aria-label="Fruit">
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled>
        <SelectTrigger aria-label="Disabled fruit">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
