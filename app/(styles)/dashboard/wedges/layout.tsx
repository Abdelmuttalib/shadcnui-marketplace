import {
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/bases/base/wedges/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-wedges">
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-wedges-sidebar w-full flex-1 overflow-hidden">
          <div className="bg-wedges-background h-full w-full p-2">
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
