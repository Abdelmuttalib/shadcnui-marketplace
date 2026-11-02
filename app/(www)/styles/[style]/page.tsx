// app/(www)/styles/[style]/page.tsx
import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { STYLES } from "@/registry/styles";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { StylePreviewCard } from "../components/styles-preview-cards";

export default async function Page({ params }: { params: { style: string } }) {
  const { style } = await params;

  if (!style) {
    return (
      <div className="relative">
        <div className="relative space-y-20 py-20">
          <PageContainer>
            <PageHeader title="Style" description="Style page not found" />
          </PageContainer>
        </div>
      </div>
    );
  }

  const styleData = STYLES.find((s) => s.name === style);

  if (!styleData) {
    return (
      <div className="relative">
        <div className="relative space-y-20 py-20">
          <PageContainer>
            <PageHeader title="Style" description="Style page not found" />
          </PageContainer>
        </div>
      </div>
    );
  }

  const stylePrefix = getStyleVariablesPrefix(styleData.name as any);

  const styleGradientClass = `from-${stylePrefix}-primary/15 to-background absolute inset-0 -z-20 h-full w-72 bg-linear-to-r`;

  return (
    <div className="relative">
      <div className="relative space-y-20 py-20">
        <PageContainer>
          <PageHeader
            title={styleData.title}
            description={styleData.description}
          />
        </PageContainer>
      </div>
      {/* gradient  */}
      <div className={styleGradientClass}></div>

      <div>
        <PageContainer size="xl">
          <StylePreviewCard style={styleData.name} />
        </PageContainer>
      </div>
    </div>
  );
}
