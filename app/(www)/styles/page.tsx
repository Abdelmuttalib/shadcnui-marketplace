import { PageContainer } from "@/components/common/page-container";
import {
  PageHeader,
  PageSubTitle,
  PageTitle,
} from "@/components/common/page-header";
import { ExamplesTabsNav } from "@/components/draft";

import {
  StylesExamples,
  StylesPagesExamplesPreviews,
  StylesPreviewCards,
} from "./components/styles-preview-cards";

export default function StylesPage() {
  return (
    <div className="relative">
      <div className="relative space-y-20 py-20">
        <PageContainer>
          <div className="flex flex-col gap-y-4">
            <PageHeader
              title="Styles"
              description="Discover shadcn ui styles and ui kits."
              actions={
                <div className="mt-4">
                  <ExamplesTabsNav />
                </div>
              }
            />
          </div>
        </PageContainer>

        <PageContainer size="full">
          <StylesPreviewCards />
        </PageContainer>
      </div>
      <div className="flex flex-col gap-8 py-20">
        <div className="mt-10">
          <PageContainer className="flex flex-col gap-4">
            <PageTitle as={"h2"}>See it in action</PageTitle>

            <PageSubTitle className="text-muted-foreground max-w-2xl">
              Preview custom shadcn styles in different examples and see how
              they look
            </PageSubTitle>
          </PageContainer>
        </div>
        <div className="bg-background/70 sticky top-14 z-30 w-full py-2 backdrop-blur-sm">
          <PageContainer className="flex flex-col gap-6">
            <ExamplesTabsNav />
          </PageContainer>
        </div>
        <StylesPagesExamplesPreviews />

        <div className="mt-28">
          <PageContainer size={"xl"}>
            <div className="relative grid h-full min-h-screen grid-cols-1 gap-8 py-4">
              <div>
                <PageTitle
                  as={"h2"}
                  className="text-5xl font-[490] tracking-tighter"
                >
                  <span className="text-foreground/70 lowercase">
                    same shadcn,
                  </span>
                  <br />
                  <span>different styles</span>
                </PageTitle>
              </div>
              <StylesExamples />
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}
