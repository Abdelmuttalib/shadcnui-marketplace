import {
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/catalyst/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex-1 overflow-hidden bg-catalyst-sidebar lg:p-1.5">
          <div className="h-full w-full bg-catalyst-background p-2 lg:rounded-xl lg:border lg:border-catalyst-border">
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
