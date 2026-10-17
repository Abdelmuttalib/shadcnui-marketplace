import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/base/styles/carbon-v4/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/carbon-v4/ui/card";

export function IndexInvesting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dollar-Cost Averaging</CardTitle>
        <CardDescription>
          A strategy for building wealth over time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="style-sera:mt-0 mt-3 text-sm leading-relaxed">
          <a
            href="#"
            className="hover:text-primary underline underline-offset-4"
          >
            Over time
          </a>
          , this smooths out the average cost of your investments. When prices
          drop, your fixed amount buys more shares. When prices rise, you buy
          fewer. The result is a lower average cost per share compared to
          lump-sum investing during volatile periods.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
