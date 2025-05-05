"use client";

import { useStyleStore } from "@/hooks/use-style-store";
import { renderStyleHero } from "@/registry/styles";

export function StyleHeroUI() {
  const { style } = useStyleStore();

  return (
    <>
      {/* <StyleFontWrapper className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end"> */}
      {renderStyleHero(style)}
      {/* </StyleFontWrapper> */}
    </>
  );
}
