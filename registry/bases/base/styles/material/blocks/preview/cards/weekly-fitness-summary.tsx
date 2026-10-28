"use client";

import * as React from "react";

import { Button } from "@/registry/bases/base/styles/material/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/material/ui/card";

const FITNESS_WEEKLY_LOAD = [
  { day: "M", load: 84 },
  { day: "T", load: 52 },
  { day: "W", load: 73 },
  { day: "T", load: 66 },
  { day: "F", load: 91 },
  { day: "S", load: 48 },
  { day: "S", load: 61 },
];

export function WeeklyFitnessSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Fitness Summary</CardTitle>
        <CardDescription>Calories and workout load by day</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-7 gap-1.5">
          {FITNESS_WEEKLY_LOAD.map((day, index) => (
            <div
              key={`${day.day}-${index}`}
              className="ring-material-border rounded-material-md p-1.5 text-center ring"
            >
              <div className="text-material-muted-foreground text-sm">
                {day.day}
              </div>
              <div className="bg-material-muted rounded-material-sm relative mt-1 h-16 overflow-hidden">
                <div
                  className="bg-material-chart-3 rounded-material-sm absolute inset-x-0 bottom-0"
                  style={
                    {
                      height: `${day.load}%`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View details</Button>
      </CardFooter>
    </Card>
  );
}
