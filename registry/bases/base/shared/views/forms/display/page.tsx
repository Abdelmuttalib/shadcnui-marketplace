import { DisplayForm } from "./display-form";
import { useDesignSystem } from "../../../components/design-system-provider";

export default function SettingsDisplayPage() {
  const { Separator } = useDesignSystem();
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Display</h3>
        <p className="text-muted-foreground text-sm">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  );
}
