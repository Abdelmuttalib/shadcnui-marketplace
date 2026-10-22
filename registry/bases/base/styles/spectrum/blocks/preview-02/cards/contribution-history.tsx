"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { useDesignSystemSearchParams } from "@/app/(www)/(create)/lib/search-params";
import { Badge } from "@/registry/bases/base/styles/spectrum/ui/badge";
import { Button } from "@/registry/bases/base/styles/spectrum/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/spectrum/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/bases/base/styles/spectrum/ui/chart";
import {
  Item,
  ItemContent,
  ItemDescription,
} from "@/registry/bases/base/styles/spectrum/ui/item";

const chartData = [
  { month: "Dec", amount: 800 },
  { month: "Jan", amount: 1100 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1300 },
  { month: "Apr", amount: 750 },
  { month: "May", amount: 1400 },
];

const chartConfig = {
  amount: {
    label: "Contribution",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ContributionHistory() {
  const [params] = useDesignSystemSearchParams();
  const isRounded = !["lyra", "sera"].includes(params.style);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Last 6 months of activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 0, right: 0, top: 8, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="min-w-40" />}
            />
            <Bar
              dataKey="amount"
              fill="var(--color-amount)"
              radius={isRounded ? [6, 6, 0, 0] : 0}
              maxBarSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1">
              <ItemDescription className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Upcoming
              </ItemDescription>
              <span className="cn-font-heading text-lg font-semibold">
                May 25, 2024
              </span>
              <span className="text-muted-foreground text-sm">
                $1,000 scheduled
              </span>
            </ItemContent>
          </Item>
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1">
              <ItemDescription className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Auto-Save Plan
              </ItemDescription>
              <span className="cn-font-heading text-lg font-semibold">
                Accelerated
              </span>
              <span className="text-muted-foreground text-sm">
                Recurring weekly
              </span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Full Report</Button>
      </CardFooter>
    </Card>
  );
}
