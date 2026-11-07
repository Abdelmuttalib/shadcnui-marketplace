import { Separator } from "@/registry/bases/base/default/ui/separator";

import { SettingsLayout } from "./layout";
import { ProfileForm } from "./profile-form";

export function SettingsProfilePage() {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-dft-muted-foreground text-sm">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </SettingsLayout>
  );
}
