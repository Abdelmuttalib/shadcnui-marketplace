"use client";

import * as React from "react";

import { Calendar } from "@/registry/spectrum/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-spctm-md border border-spctm-border"
    />
  );
}
