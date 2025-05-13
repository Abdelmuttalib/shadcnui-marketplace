import React from "react";

import { PageContainer } from "@/components/common/page-container";
import {
  PageHeader,
  PageSubTitle,
  PageTitle,
} from "@/components/common/page-header";
import { ExamplesTabsNav } from "@/components/draft";
import { Badge } from "@/components/ui/badge";
import { STYLES_LENGTH } from "@/hooks/use-style-store";

import {
  StylesExamples,
  StylesPagesExamplesPreviews,
  StylesPreviewCards,
} from "./components/styles-preview-cards";

export default function StylesPage() {
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div> */}
      <div className="relative space-y-20 py-20">
        <PageContainer>
          {/* <div>
            <Logo />
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="-mb-4 size-7 rounded-full border-2 border-foreground bg-transparent"></div>
              <div className="relative h-10 w-11 rounded bg-foreground">
                <div className="absolute bottom-1 mx-auto ml-[19px] h-[80%] w-1 rotate-[49deg] rounded-md bg-background"></div>
                <div className="absolute bottom-0.5 mx-auto ml-[26px] h-[50%] w-1 rotate-[49deg] rounded-md bg-background"></div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-y-4">
            {/* <Typography
              variant="5xl/medium"
              className="max-w-md font-[490] tracking-tighter"
            >
              Delight the web with Motion
            </Typography>
            <Typography
              variant="5xl/medium"
              className="max-w-md tracking-tighter"
            >
              Styles
            </Typography> */}
            <PageHeader
              title="Styles"
              description="Discover shadcn ui styles and UI kits, beyond Default and New York shadcn ui styles."
              badge={<Badge>{STYLES_LENGTH} styles</Badge>}
              actions={
                <div className="mt-4">
                  <ExamplesTabsNav />
                </div>
              }
            />
            {/* <div>
              <ExamplesTabsNav />
            </div> */}
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

            <PageSubTitle className="max-w-2xl text-muted-foreground">
              Preview custom shadcn styles in different examples and see how
              they look
            </PageSubTitle>
          </PageContainer>
        </div>
        <div className="sticky top-14 z-30 w-full bg-background/[0.7] py-2 backdrop-blur-sm">
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
                  <span className="lowercase text-foreground/70">
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
