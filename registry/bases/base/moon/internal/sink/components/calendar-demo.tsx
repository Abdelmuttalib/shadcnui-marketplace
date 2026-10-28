"use client";

import * as React from "react";

import { Calendar } from "@/registry/bases/base/moon/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-moon-md border-moon-border border shadow"
    />
  );
}
