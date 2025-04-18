import { Metadata } from "next";

import { Separator } from "@/registry/libelle/ui/separator";

import { SidebarNav } from "./components/sidebar-nav";

const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "#",
  },
  {
    title: "Account",
    href: "#",
  },
  {
    title: "Appearance",
    href: "#",
  },
  {
    title: "Notifications",
    href: "#",
  },
  {
    title: "Display",
    href: "#",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="bg-libelle-background block space-y-6 p-8 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-libelle-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
