import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// import { Customizer } from "@/app/(www)/(create)/components/customizer";
// import { PresetHandler } from "@/app/(www)/(create)/components/preset-handler";
import { Preview } from "@/app/(www)/(create)/components/preview";
import { getAllItems } from "@/app/(www)/(create)/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/lib/config";
// import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

// Only shown on first visit (checks localStorage).
const WelcomeDialog = dynamic(() =>
  import("@/app/(www)/(create)/components/welcome-dialog").then(
    (m) => m.WelcomeDialog
  )
);

export const metadata: Metadata = {
  title: "New Project",
  description:
    "Customize everything. Pick your component library, icons, base color, theme, fonts and create your own version of shadcn/ui.",
  openGraph: {
    title: "New Project",
    description:
      "Customize everything. Pick your component library, icons, base color, theme, fonts and create your own version of shadcn/ui.",
    type: "website",
    url: absoluteUrl("/create"),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Project",
    description:
      "Customize everything. Pick your component library, icons, base color, theme, fonts and create your own version of shadcn/ui.",
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
};

export default function CreatePage() {
  return (
    <div className="section-soft relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden [--customizer-width:--spacing(48)] [--gap:--spacing(4)] md:[--gap:--spacing(6)] 2xl:[--customizer-width:--spacing(56)]">
      <div
        data-slot="designer"
        className="gap-(--gap) p-(--gap) flex min-h-0 flex-1 flex-col pt-[calc(var(--gap)*0.25)] md:flex-row-reverse"
      >
        <>
          <Preview />
          <Suspense
            fallback={
              <Skeleton className="md:w-(--customizer-width) isolate min-h-[151px] w-full self-start rounded-2xl md:h-full md:max-h-full md:min-h-0" />
            }
          >
            <CustomizerLoader />
          </Suspense>
        </>
      </div>
      {/* <PresetHandler /> */}
      <WelcomeDialog />
    </div>
  );
}

async function CustomizerLoader() {
  const itemsByBase = await getAllItems();
  return <Customizer itemsByBase={itemsByBase} />;
}
