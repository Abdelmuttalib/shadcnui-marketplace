import { Suspense } from "react";
import { FeedAside } from "@/components/feed-aside";
import { Header } from "@/components/header";
import { PresetSidebar } from "@/components/preset-sidebar";
// import { PreviewSurface } from "@/components/preview-surface";
import { listStylesWithColors } from "@/lib/services/presets";
import { PreviewSurface } from "@/components/preview-surface";
import { CustomizeUrlSync } from "./components/customize-url-sync";

export default async function CustomizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { items, nextCursor } = await listStylesWithColors();

  return (
    <>
      <CustomizeUrlSync />

      <div className="flex h-full min-h-0 flex-1 flex-col">
        <Header />
        <div className="mt-(--landing-topbar-height) flex min-h-0 flex-1">
          <FeedAside>
            <Suspense fallback={null}>
              <PresetSidebar initialItems={items} initialCursor={nextCursor} />
            </Suspense>
          </FeedAside>
          <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
            {children}
            <PreviewSurface />
          </div>
        </div>
      </div>
    </>
  );
}
