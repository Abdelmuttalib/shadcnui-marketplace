import { Checkbox } from "@/registry/material/ui/checkbox";
import { Label } from "@/registry/material/ui/label";

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
