"use client";

import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { pageExampleTypes } from "@/hooks/use-style-store";
import { StyleName } from "@/registry/styles";

export function StylePageExamples({ style = "carbon" }: { style?: StyleName }) {
  return (
    <>
      {pageExampleTypes.map((pageExampleType) => (
        <StylePageExamplePreview
          key={`${style}-style-page-example-type-${pageExampleType}`}
          id={pageExampleType}
          styleProp={style}
          pageExampleTypeProp={pageExampleType}
          hideBadge={true}
          // className="w-[70vw] max-w-[70vw]"
        />
      ))}
    </>
  );
}
