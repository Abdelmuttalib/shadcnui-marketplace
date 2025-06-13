"use client";

import { StylePageExamplePreview } from "@/components/views/styles/style-page-example-preview";
import { pageExampleTypes, Style } from "@/hooks/use-style-store";

export function StylePageExamples({ style = "carbon" }: { style?: Style }) {
  return (
    <>
      {pageExampleTypes.map((pageExampleType) => (
        <StylePageExamplePreview
          key={`carbon-style-page-example-type-${pageExampleType}`}
          id="dashboard"
          styleProp={style}
          pageExampleTypeProp={pageExampleType}
          hideBadge={true}
          // className="w-[70vw] max-w-[70vw]"
        />
      ))}
    </>
  );
}
