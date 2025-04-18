import { Separator } from "@/registry/lucid/ui/separator";

import { NotificationsForm } from "./notifications-form";

export default function SettingsNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-lucid-muted-foreground text-sm">
          Configure how you receive notifications.
        </p>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
}
