import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { StylePageExamples } from "../components/style-page-examples";

export default function Page() {
  return (
    <div className="relative">
      <div className="relative space-y-20 py-20">
        <PageContainer>
          <PageHeader
            title="Moon style"
            description="Moon Design System inspired shadcn style"
          />
        </PageContainer>
      </div>
      {/* gradient */}
      <div className="absolute inset-0 -z-20 h-full w-1/3 bg-gradient-to-r from-moon-primary/30 via-moon-background to-background"></div>

      <div>
        <PageContainer size="full">
          <StylePageExamples style="moon" />
        </PageContainer>
      </div>
    </div>
  );
}
