"use client";

import { Calendar } from "@/styles/base-default/ui/calendar";

export function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  );
}
