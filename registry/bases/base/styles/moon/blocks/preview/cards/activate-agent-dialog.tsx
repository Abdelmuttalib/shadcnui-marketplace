"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Alert,
  AlertDescription,
} from "@/registry/bases/base/styles/moon/ui/alert";
import { Badge } from "@/registry/bases/base/styles/moon/ui/badge";
import { Button } from "@/registry/bases/base/styles/moon/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/moon/ui/card";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/styles/moon/ui/item";

// Agent feature descriptions.
const agentFeatures = [
  {
    id: "code-reviews",
    content: (
      <>
        <strong>Code reviews</strong> with full codebase context to catch{" "}
        <strong>hard-to-find</strong> bugs.
      </>
    ),
  },
  {
    id: "code-suggestions",
    content: (
      <>
        <strong>Code suggestions</strong> validated in sandboxes before you
        merge.
      </>
    ),
  },
  {
    id: "root-cause",
    content: (
      <>
        <strong>Root-cause analysis</strong> for production issues with
        deployment context.{" "}
        <Badge
          variant="secondary"
          className="bg-moon-chart-1 text-moon-chart-5"
        >
          Requires Observability Plus
        </Badge>
      </>
    ),
  },
];

export function ActivateAgentDialog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ship faster & safer with Vercel Agent</CardTitle>
        <CardDescription>
          Your use is subject to Vercel&apos;s{" "}
          <a href="#">Public Beta Agreement</a> and{" "}
          <a href="#">AI Product Terms</a>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ItemGroup className="gap-0">
          {agentFeatures.map((feature) => (
            <Item key={feature.id} size="xs" className="px-0">
              <ItemMedia variant="icon" className="self-start">
                <IconPlaceholder
                  lucide="CheckCircle2Icon"
                  tabler="IconCircleCheckFilled"
                  hugeicons="CheckmarkCircle02Icon"
                  phosphor="CheckCircleIcon"
                  remixicon="RiCheckboxCircleLine"
                  className="fill-moon-primary text-moon-primary-foreground size-5"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-moon-muted-foreground *:[strong]:text-moon-foreground inline leading-relaxed font-normal *:[strong]:font-medium">
                  {feature.content}
                </ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <Alert>
          <AlertDescription>
            Pro teams get $100 in Vercel Agent trial credit for 2 weeks after
            activation.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" className="style-sera:hidden">
          Cancel
        </Button>
        <Button className="style-sera:w-full">Enable with $100 credits</Button>
      </CardFooter>
    </Card>
  );
}
