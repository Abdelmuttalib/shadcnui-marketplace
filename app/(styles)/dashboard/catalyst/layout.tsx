import {
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/bases/base/catalyst/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans">
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-catalyst-sidebar w-full flex-1 overflow-hidden lg:p-1.5">
          <div className="bg-catalyst-background lg:border-catalyst-border h-full w-full p-2 lg:rounded-xl lg:border">
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
