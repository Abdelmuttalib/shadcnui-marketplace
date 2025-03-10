"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/material/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-material-muted-foreground rounded-material-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-material-md [&:has([aria-selected].day-outside)]:bg-material-accent/50 [&:has([aria-selected])]:bg-material-accent first:[&:has([aria-selected])]:rounded-l-material-md last:[&:has([aria-selected])]:rounded-r-material-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-material-primary text-material-primary-foreground hover:bg-material-primary hover:text-material-primary-foreground focus:bg-material-primary focus:text-material-primary-foreground",
        day_today: "bg-material-accent text-material-accent-foreground",
        day_outside:
          "day-outside text-material-muted-foreground aria-selected:bg-material-accent/50 aria-selected:text-material-muted-foreground",
        day_disabled: "text-material-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-material-accent aria-selected:text-material-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        // @ts-ignore
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        // @ts-ignore
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
