import { Separator } from "@/registry/carbon/ui/separator";

import { ProfileForm } from "./profile-form";
import { SidebarNav } from "./components/sidebar-nav";

export function SettingsProfilePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-cb-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </Layout>
  );
}

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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="block space-y-6 bg-cb-background p-8 pb-16">
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
  );
}
