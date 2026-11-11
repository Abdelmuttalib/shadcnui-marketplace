import { SettingsLayout } from "./layout";
import { ProfileForm } from "./profile-form";
import { useDesignSystem } from "../../components/design-system-provider";

export default function SettingsProfilePage() {
  const { Separator } = useDesignSystem();
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-muted-foreground text-sm">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </SettingsLayout>
  );
}
