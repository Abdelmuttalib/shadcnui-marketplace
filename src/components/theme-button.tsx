"use client";

import { MoonIcon } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeButton() {
  return (
    <Button
      type="button"
      variant={"secondary"}
      size="icon-sm"
      onClick={() => {
        // set dark mode class to html
        document.documentElement.classList.toggle("dark");
      }}
      className="h-8 w-8"
    >
      <MoonIcon />
    </Button>
  );
}
