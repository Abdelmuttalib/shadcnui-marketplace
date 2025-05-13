import { Separator } from "@/registry/catalyst/ui/separator";

import { SettingsLayout } from "./layout";
import { ProfileForm } from "./profile-form";

export function SettingsProfilePage() {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-catalyst-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </SettingsLayout>
  );
}
