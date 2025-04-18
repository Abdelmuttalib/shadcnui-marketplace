"use client";

import { PageContainer } from "@/components/common/page-container";
import { PageSubTitle, PageTitle } from "@/components/common/page-header";
import { StyleSelect } from "@/components/common/style-select";
import { ThemeCustomizerWrapper } from "@/components/theme-customizer";
import { useStyleStore } from "@/hooks/use-style-store";
import { renderStyleShowcaseComponents } from "@/registry/styles";

export default function DemoPage() {
  const { style } = useStyleStore();

  return (
    <div className="grid gap-6 py-20">
      <div className="relative flex flex-col">
        <PageContainer>
          <div className="relative h-fit space-y-4">
            <PageTitle>A UI kit for custom shadcn interfaces</PageTitle>
            <PageSubTitle>
              {/* Catalyst gives you the perfect foundation for your own component
              system — production-ready React components with thoughtfully
              designed APIs designed to be copied into your codebase and fully
              yours to customize. */}
              The best shadcn ui kits for modern web interfaces. Create
              beautiful and consistent web applications with a Design System
              that provides a collection of components, and styles. Going beyond
              default and new york shadcn ui styles.
            </PageSubTitle>
            <div className="sticky top-16 z-20">
              <StyleSelect />
            </div>
          </div>
          {/* <div className="py-10"></div> */}
        </PageContainer>
      </div>

      {/* <div className="bg-accent p-4 dark:bg-background"> */}
      <div className="bg-background p-4">
        <ThemeCustomizerWrapper>
          <PageContainer size="xl">
            {renderStyleShowcaseComponents(style)}
          </PageContainer>
        </ThemeCustomizerWrapper>
      </div>
    </div>
  );
}
