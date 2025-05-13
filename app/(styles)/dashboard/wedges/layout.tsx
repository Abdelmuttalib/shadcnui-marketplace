import { SidebarProvider, SidebarTrigger } from "@/registry/wedges/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-wedges">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex-1 overflow-hidden bg-wedges-sidebar">
          <div className="h-full w-full bg-wedges-background p-2">
            <SidebarTrigger />
            <div className="px-2 py-8 sm:px-4 md:px-10 lg:px-14">
              {children}
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
