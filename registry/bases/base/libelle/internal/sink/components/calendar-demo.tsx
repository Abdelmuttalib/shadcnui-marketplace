"use client";

import * as React from "react";

import { Calendar } from "@/registry/bases/base/libelle/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-libelle-md border-libelle-border border shadow"
    />
  );
}
