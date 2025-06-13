import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { StylePageExamples } from "../components/style-page-examples";

export default function Page() {
  return (
    <div className="relative">
      <div className="relative space-y-20 py-20">
        <PageContainer>
          <PageHeader
            title="Carbon style"
            description="Carbon IBM Design System inspired shadcn style"
          />
        </PageContainer>
      </div>
      {/* gradient  */}
      {/* <div className="absolute inset-0 -z-20 h-32 w-full bg-gradient-to-b from-cb-primary/15 to-background"></div> */}
      <div className="absolute inset-0 -z-20 h-full w-72 bg-gradient-to-r from-cb-primary/15 to-background"></div>

      <div>
        <PageContainer size="full">
          <StylePageExamples style="carbon" />
        </PageContainer>
      </div>
    </div>
  );
}
