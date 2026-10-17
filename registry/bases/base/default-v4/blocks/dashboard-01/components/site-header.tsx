import { Separator } from "@/registry/bases/base/default-v4/ui/separator";
import { SidebarTrigger } from "@/registry/bases/base/default-v4/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="h-(--header-height) group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="data-vertical:self-auto mx-2 h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
      </div>
    </header>
  );
}
