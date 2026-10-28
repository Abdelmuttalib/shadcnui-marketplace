import {
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/bases/base/carbon/ui/sidebar";

import { AppSidebar } from "./components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-cb-sidebar w-full flex-1 overflow-hidden">
        <div className="bg-cb-background h-full w-full p-2">
          <SidebarTrigger />
          <div className="px-2 py-8 sm:px-4 md:px-10 lg:px-14">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}
