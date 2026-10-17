"use client";

import * as DefaultButton from "@/registry/bases/base/default/ui/button";
import * as Default from "@/registry/bases/base/default/ui/dropdown-menu";
import * as V4Button from "@/registry/bases/base/default-v4/ui/button";
import * as V4 from "@/registry/bases/base/default-v4/ui/dropdown-menu";

import type { FixtureSide } from "./types";

export function DropdownMenuFixture({ side }: { side: FixtureSide }) {
  const mods = side === "default" ? Default : V4;
  const {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } = mods;
  const { Button } = side === "default" ? DefaultButton : V4Button;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
