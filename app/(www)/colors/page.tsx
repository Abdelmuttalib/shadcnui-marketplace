import { PageContainer } from "@/components/common/page-container";

import { StylesColors } from "./components/style-colors";
import { StylesColorsNav } from "./components/styles-colors-nav";

export default function ColorsPage() {
  return (
    <div>
      <PageContainer>
        <div className="grid grid-cols-1 gap-4 py-20 md:grid-cols-9">
          <StylesColorsNav />
          <div className="grid gap-16 md:col-span-7">
            <StylesColors />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
