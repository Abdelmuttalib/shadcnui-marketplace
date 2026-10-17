"use client";

import * as DefaultButton from "@/registry/bases/base/default/ui/button";
import * as Default from "@/registry/bases/base/default/ui/dialog";
import * as V4Button from "@/registry/bases/base/default-v4/ui/button";
import * as V4 from "@/registry/bases/base/default-v4/ui/dialog";

import type { FixtureSide } from "./types";

export function DialogFixture({ side }: { side: FixtureSide }) {
  const mods = side === "default" ? Default : V4;
  const {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } = mods;
  const { Button } = side === "default" ? DefaultButton : V4Button;
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>
              Shared dialog description text.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
