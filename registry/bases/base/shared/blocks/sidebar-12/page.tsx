import { AppSidebar } from "@/registry/bases/base/shared/blocks/sidebar-12/components/app-sidebar";

import { useDesignSystem } from "../../components/design-system-provider";

export default function Page() {
  const {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
    Separator,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
  } = useDesignSystem();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-muted/50 aspect-square rounded-xl" />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
