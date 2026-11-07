import DatePickerWithRange from "@/registry/bases/base/catalyst/components/date-picker-with-range";
import { Card, CardContent } from "@/registry/bases/base/catalyst/ui/card";
import { Label } from "@/registry/bases/base/catalyst/ui/label";

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  );
}
