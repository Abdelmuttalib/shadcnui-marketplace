import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/registry/carbon/ui/separator";

import { SidebarNav } from "./components/sidebar-nav";

const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/example/forms",
  },
  {
    title: "Account",
    href: "/example/forms/account",
  },
  {
    title: "Appearance",
    href: "/example/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/example/forms/notifications",
  },
  {
    title: "Display",
    href: "/example/forms/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="block space-y-6 p-8 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-cb-muted-foreground">
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
