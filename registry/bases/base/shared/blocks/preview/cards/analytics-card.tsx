"use client";

import { Area, AreaChart } from "recharts";

import { useDesignSystem } from "../../../components/design-system-provider";

// Monthly visitor data for the area chart.
const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 73 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
];

// Chart configuration for the visitors dataset.
const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies any;

export function AnalyticsCard() {
  const {
    Button,
    Badge,
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,

    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } = useDesignSystem();

  return (
    <Card className="mx-auto w-full max-w-sm data-[size=sm]:pb-0" size="sm">
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          418.2K Visitors <Badge>+10%</Badge>
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            View Analytics
          </Button>
        </CardAction>
      </CardHeader>
      <ChartContainer config={chartConfig} className="aspect-[1/0.35]">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" hideLabel />}
          />
          <Area
            dataKey="visitors"
            type="linear"
            fill="var(--color-visitors)"
            fillOpacity={0.4}
            stroke="var(--color-visitors)"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
}
