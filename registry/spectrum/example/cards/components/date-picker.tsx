import DatePickerWithRange from "@/registry/spectrum/components/date-picker-with-range";
import { Card, CardContent } from "@/registry/spectrum/ui/card";
import { Label } from "@/registry/spectrum/ui/label";

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
