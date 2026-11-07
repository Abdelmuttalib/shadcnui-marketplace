import { Checkbox } from "@/registry/bases/base/spectrum/ui/checkbox";
import { Label } from "@/registry/bases/base/spectrum/ui/label";

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
