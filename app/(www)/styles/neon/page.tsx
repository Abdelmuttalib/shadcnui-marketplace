import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { StylePageExamples } from "../components/style-page-examples";

export default function Page() {
  return (
    <div className="relative">
      <div className="relative space-y-20 py-20">
        <PageContainer>
          <PageHeader
            title="Neon style"
            description="Neon Design System inspired shadcn style"
          />
        </PageContainer>
      </div>
      {/* gradient */}
      <div className="absolute inset-0 -z-20 h-full w-1/3 bg-gradient-to-r from-neon-primary/20 via-neon-background to-background"></div>

      <div>
        <PageContainer size="full">
          <StylePageExamples style="neon" />
        </PageContainer>
      </div>
    </div>
  );
}
