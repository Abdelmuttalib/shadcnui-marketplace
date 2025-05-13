import {
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/material/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-material">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex-1 overflow-hidden bg-material-sidebar">
          <div className="h-full w-full bg-material-background p-2">
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
