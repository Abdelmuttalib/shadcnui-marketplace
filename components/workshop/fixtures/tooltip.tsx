"use client";

import * as DefaultButton from "@/registry/bases/base/default/ui/button";
import * as Default from "@/registry/bases/base/default/ui/tooltip";
import * as V4Button from "@/registry/bases/base/styles/default-v4/ui/button";
import * as V4 from "@/registry/bases/base/styles/default-v4/ui/tooltip";

import type { FixtureSide } from "./types";

export function TooltipFixture({ side }: { side: FixtureSide }) {
  const { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } =
    side === "default" ? Default : V4;
  const { Button } = side === "default" ? DefaultButton : V4Button;
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Shared tooltip text.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
