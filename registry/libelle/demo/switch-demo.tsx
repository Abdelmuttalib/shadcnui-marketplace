import { Label } from "@/registry/libelle/ui/label";
import { Switch } from "@/registry/libelle/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
