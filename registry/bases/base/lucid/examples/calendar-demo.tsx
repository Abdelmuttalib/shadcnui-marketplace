"use client";

import * as React from "react";

import { Calendar } from "@/registry/lucid/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lucid-md border border-lucid-border"
    />
  );
}
