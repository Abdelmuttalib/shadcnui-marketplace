"use client";

import { MoonIcon } from "lucide-react";
import { Button } from "./ui/button";
import { IconButton } from "./ui/icon-button";

export function ThemeButton() {
  return (
    <IconButton
      type="button"
      variant={"secondary"}
      size="sm"
      onClick={() => {
        // set dark mode class to html
        document.documentElement.classList.toggle("dark");
      }}
      className="h-8 w-8"
    >
      <MoonIcon />
    </IconButton>
  );
}
