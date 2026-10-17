"use client";

import * as React from "react";

import { Calendar } from "@/registry/bases/base/neon/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-neon-md border-neon-border border shadow"
    />
  );
}
