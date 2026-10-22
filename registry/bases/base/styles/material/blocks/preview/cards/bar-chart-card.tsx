"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { useDesignSystemSearchParams } from "@/app/(www)/(create)/lib/search-params";
import { Button } from "@/registry/bases/base/styles/material/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/material/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/base/styles/material/ui/chart";

const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const desktopTotal = barChartData.reduce((sum, item) => sum + item.desktop, 0);
const mobileTotal = barChartData.reduce((sum, item) => sum + item.mobile, 0);
const desktopDelta = Math.round(
  ((desktopTotal - mobileTotal) / mobileTotal) * 100
);
const desktopDeltaPrefix = desktopDelta > 0 ? "+" : "";

export function BarChartCard() {
  const [params] = useDesignSystemSearchParams();
  const isRounded = !["lyra", "sera"].includes(params.style);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Traffic channels</CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-snug">
          Monthly desktop and mobile traffic for the last six months—compare
          volume and mix across platforms and devices at a glance.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pt-0">
        <ChartContainer
          config={barChartConfig}
          className="max-h-[180px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={barChartData}
            margin={{ left: 0, right: 0, top: 8, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={isRounded ? [6, 6, 0, 0] : 0}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              radius={isRounded ? [6, 6, 0, 0] : 0}
            />
          </BarChart>
        </ChartContainer>
        <div className="divide-material-border/60 grid w-full grid-cols-3 divide-x">
          <div className="px-2 text-center">
            <div className="text-material-muted-foreground text-[0.65rem] uppercase">
              Desktop
            </div>
            <div className="text-sm font-medium tabular-nums">
              {desktopTotal.toLocaleString()}
            </div>
          </div>
          <div className="px-2 text-center">
            <div className="text-material-muted-foreground text-[0.65rem] uppercase">
              Mobile
            </div>
            <div className="text-sm font-medium tabular-nums">
              {mobileTotal.toLocaleString()}
            </div>
          </div>
          <div className="px-2 text-center">
            <div className="text-material-muted-foreground text-[0.65rem] uppercase">
              Mix Delta
            </div>
            <div className="text-sm font-medium tabular-nums">
              {desktopDeltaPrefix}
              {desktopDelta}%
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View report</Button>
      </CardFooter>
    </Card>
  );
}
