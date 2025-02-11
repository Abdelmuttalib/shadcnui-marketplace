"use client";

import { ScreenContainer } from "@/components/container";
import { ComponentPreview } from "@/components/component-preview";
import { Code } from "@/components/views/docs/code";

export default function Blocks({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const f = [
    {
      title: "Blocks",
      description: "Blocks are used to perform an action.",
      href: "https://tailwindui.com/components/application-ui/data-display/data-tables",
      code: "",
    },
  ];

  console.log("params:", params);
  console.log("searchParams:", searchParams);
  const style = searchParams?.style;

  return (
    <div>
      <ScreenContainer>
        <ComponentPreview
          title="Blocks"
          id="blocks"
          description="Blocks are used to perform an action."
          // href="https://tailwindui.com/components/application-ui/data-display/data-tables"

          category="features"
          component="features-1"
          fileName="index.tsx"
        >
          <Code
            category="features"
            component="features-1"
            fileName="index.tsx"
          />
        </ComponentPreview>
        <ComponentPreview
          title="Blocks"
          id="blocks"
          description="Blocks are used to perform an action."
          category="features"
          component="features-2"
          fileName="index.tsx"
        >
          <Code
            category="features"
            component="features-2"
            fileName="index.tsx"
          />
        </ComponentPreview>
        <ComponentPreview
          id="blocks"
          title="Blocks"
          description="Blocks are used to perform an action."
          category="features"
          component="features-3"
          fileName="index.tsx"
        >
          <Code
            category="features"
            component="features-3"
            fileName="index.tsx"
          />
        </ComponentPreview>
        <ComponentPreview
          id="blocks"
          title="Blocks"
          description="Blocks are used to perform an action."
          category="features"
          component="features-4"
          fileName="index.tsx"
        >
          <Code
            category="features"
            component="features-3"
            fileName="index.tsx"
          />
        </ComponentPreview>
      </ScreenContainer>
      {/* <H /> */}
    </div>
  );
}
