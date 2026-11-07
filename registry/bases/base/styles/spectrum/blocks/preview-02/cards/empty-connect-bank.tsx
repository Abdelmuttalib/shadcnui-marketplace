import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/base/styles/spectrum/ui/button";
import {
  Card,
  CardContent,
} from "@/registry/bases/base/styles/spectrum/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/styles/spectrum/ui/empty";

export function EmptyConnectBank() {
  return (
    <Card>
      <CardContent>
        <Empty className="p-4">
          <EmptyMedia variant="icon">
            <IconPlaceholder
              lucide="CreditCardIcon"
              tabler="IconCreditCard"
              hugeicons="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Connect Bank</EmptyTitle>
            <EmptyDescription>
              Link your payout method to receive monthly royalty distributions
              automatically.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Set Up Payouts</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  );
}
