"use client";

import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { useStyleStore } from "@/hooks/use-style-store";
import { getStyleVariablesPrefix } from "@/registry/styles";

export function ShowcaseStylePageExamplePreview() {
  const { style, pageExampleType } = useStyleStore();

  return (
    <>
      <div
        className="absolute -inset-y-4 inset-x-0 -z-10 h-full w-full opacity-25 blur-xl"
        style={{
          backgroundColor: `oklch(var(--${getStyleVariablesPrefix(
            style
          )}-primary))`,
        }}
      ></div>
      <StylePageExamplePreview
        key={style}
        id={`${style}-${pageExampleType}-example`}
        styleProp={style}
        pageExampleTypeProp={pageExampleType}
        className="w-full max-w-full xl:max-w-full"
        hideBadge
      />
    </>
  );
}
