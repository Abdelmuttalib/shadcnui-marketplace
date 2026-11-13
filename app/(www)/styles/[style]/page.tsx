// app/(www)/styles/[style]/page.tsx
import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";

import { STYLES } from "@/registry/styles";
import { getStyleVariablesPrefix } from "@/registry/styles-components";
import { StylePreview } from "../components/styles-preview-cards";

import { ExamplesTabsNav } from "@/components/draft";

import Footer from "@/components/landing/footer";
import { HalftoneBackground } from "@/components/landing/halftone-bg";
import { SignatureMark } from "@/components/landing/signature-mark";

import { LineFieldBackground } from "@/components/landing/line-field-bg";
import { PageExampleSelect } from "@/components/common/page-example-select";
import { mainPaletteColorsKeys } from "@/registry/registry-palettes";

function StyleHero({ style }: { style: string }) {
  const s = `--${getStyleVariablesPrefix(style)}-primary`;
  const c = `--${getStyleVariablesPrefix(style)}`;

  return (
    <div className="relative flex w-full flex-col justify-center pt-6 pb-6 md:pt-10 lg:h-full lg:pb-0">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
            {/* <span className="text-foreground/60 text-sm">Styles</span> */}
          </div>
          <h1 className="text-2xl leading-tight font-medium tracking-tight text-neutral-800 capitalize md:text-3xl xl:text-4xl dark:text-neutral-200">
            {style} <span className="font-normal italic">Style</span>
          </h1>
          {/* <p className="text-foreground/70 dark:text-foreground/50 max-w-[260px] text-sm leading-relaxed">
            Explore a collection of beautifully crafted shadcn/ui blocks.
          </p> */}
          <div className="relative flex w-full flex-col gap-4 py-2">
            <div className="flex w-fit border">
              {mainPaletteColorsKeys.map((color, index) => (
                <div
                  key={`light-${color}`}
                  className={"size-6 xl:w-7"}
                  style={{
                    // backgroundColor: `oklch(${palette.light[color]})`,
                    backgroundColor: `var(${c}-${color})`,
                  }}
                  title={`Light ${color}`}
                />
              ))}
            </div>

            <PageExampleSelect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function StylePage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
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
    <div className="relative min-h-dvh pt-14 lg:pt-0">
      <div className="text-foreground relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side — Community hero */}
          <div className="border-foreground/6 relative hidden w-full shrink-0 overflow-clip border-b px-5 sm:px-6 lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[30%] lg:border-r lg:border-b-0 lg:px-10">
            <div className="hidden lg:block">
              <LineFieldBackground />
            </div>
            <StyleHero style={style} />
            <div className="absolute right-6 bottom-4 left-10 z-3">
              <SignatureMark compact />
            </div>
          </div>

          {/* Right side — Stats & platforms */}
          <div className="no-scrollbar relative w-full overflow-x-hidden lg:w-[70%]">
            <div className="space-y-8 px-5 lg:p-8 lg:pt-20">
              {/* Mobile header */}
              <div className="border-foreground/6 relative -mx-5 mb-5 overflow-hidden border-b px-5 sm:-mx-6 sm:px-6 lg:hidden">
                <HalftoneBackground />
                <div className="relative space-y-2 py-16">
                  <div className="flex items-center gap-1.5">
                    {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
                    {/* <span className="text-foreground/60 text-sm">Styles</span> */}
                  </div>
                  <h1 className="text-2xl leading-tight font-medium tracking-tight text-neutral-800 md:text-3xl xl:text-4xl dark:text-neutral-200">
                    {style}
                    <span className="font-normal italic">Style</span>
                  </h1>
                  {/* <p className="text-foreground/70 dark:text-foreground/50 text-sm leading-relaxed">
                    Explore a collection of beautifully crafted shadcn/ui
                    blocks.
                  </p> */}
                </div>
                <div className="relative w-full py-2">
                  <ExamplesTabsNav />
                </div>
              </div>

              <h2 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
                Style
                <span className="bg-foreground/15 h-px flex-1" />
              </h2>

              <div className="relative w-full py-2">
                <StylePreview s={style} />
              </div>
            </div>
            <div className="lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
