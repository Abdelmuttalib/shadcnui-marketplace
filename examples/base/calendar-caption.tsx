"use client";

import { Calendar } from "@/registry/bases/base/styles/default/ui/calendar";

export function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  );
}
