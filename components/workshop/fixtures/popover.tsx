"use client";

import * as DefaultButton from "@/registry/bases/base/default/ui/button";
import * as Default from "@/registry/bases/base/default/ui/popover";
import * as V4Button from "@/registry/bases/base/styles/default/ui/button";
import * as V4 from "@/registry/bases/base/styles/default/ui/popover";

import type { FixtureSide } from "./types";

export function PopoverFixture({ side }: { side: FixtureSide }) {
  const { Popover, PopoverContent, PopoverTrigger } =
    side === "default" ? Default : V4;
  const { Button } = side === "default" ? DefaultButton : V4Button;
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Shared popover content.</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
