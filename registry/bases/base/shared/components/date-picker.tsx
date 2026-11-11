import DatePickerWithRange from "@/registry/bases/base/shared/components/date-picker-with-range";
import { useDesignSystem } from "./design-system-provider";

export function DemoDatePicker() {
  const { Card, CardContent, Label } = useDesignSystem();

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
