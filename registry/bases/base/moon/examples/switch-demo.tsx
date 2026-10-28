import { Label } from "@/registry/bases/base/moon/ui/label";
import { Switch } from "@/registry/bases/base/moon/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
