import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/styles/base-default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-default/ui/card";

export function CardSmall() {
  const featureName = "Scheduled reports";

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          Weekly snapshots. No more manual exports.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span>Choose a schedule (daily, or weekly).</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span>Send to channels or specific teammates.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span>Include charts, tables, and key metrics.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          Set up scheduled reports
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          See what&apos;s new
        </Button>
      </CardFooter>
    </Card>
  );
}
