import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { StylesColors } from "./components/style-colors";
import { StylesColorsNav } from "./components/styles-colors-nav";

export default function ColorsPage() {
  return (
    <section className="relative py-20">
      <PageContainer className="space-y-8">
        <div className="flex flex-col gap-y-4">
          <PageHeader
            title="Colors"
            description="Explore our collection of pre-designed color palettes for shadcn/ui components."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 py-20 md:grid-cols-9">
          <StylesColorsNav />
          <div className="grid gap-16 md:col-span-7">
            <StylesColors />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
