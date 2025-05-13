import { Metadata } from "next";

import { Separator } from "@/registry/material/ui/separator";

import { SettingsTab } from "./page";

const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

export const sidebarNavItems: {
  title: SettingsTab;
  href: string;
}[] = [
  {
    title: "profile",
    href: "#",
  },
  {
    title: "account",
    href: "#",
  },
  {
    title: "appearance",
    href: "#",
  },
  {
    title: "notifications",
    href: "#",
  },
  {
    title: "display",
    href: "#",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="block space-y-6 bg-material-background p-8 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-material-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        {children}
      </div>
    </>
  );
}
