import { StyleSelect } from "@/components/common/style-select";

import { ThemePaletteSelect } from "./common/theme-palette-select";
import { ThemeButton } from "./theme-button";
import ThemeSwitcher from "./theme-select";

export function DevTools() {
  return (
    <>
      {/* <ThemeButtonWrapper /> */}
      <TailwindIndicator />
    </>
  );
}

function ThemePaletteSelectWrapper() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed right-8 top-2 z-[99999999]">
      <ThemePaletteSelect />
      {/* <ThemeButton /> */}
    </div>
  );
}

function ThemeButtonWrapper() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed right-2 top-2 z-[99999999]">
      <ThemeSwitcher />
      {/* <ThemeButton /> */}
    </div>
  );
}

function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-2 right-2 z-[9999] flex items-end gap-2 rounded-md border bg-accent p-1 text-sm">
      <div className="size-fit rounded-md border p-0.5">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
      <ThemePaletteSelect />
      <StyleSelect />
    </div>
  );
}
