"use client";

import { addDays } from "date-fns";
import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/registry/bases/base/styles/default/ui/calendar";
import {
  Card,
  CardContent,
} from "@/registry/bases/base/styles/default/ui/card";

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  );
}
