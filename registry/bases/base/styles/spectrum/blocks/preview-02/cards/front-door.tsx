import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Badge } from "@/registry/bases/base/styles/spectrum/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/spectrum/ui/card";

export function FrontDoor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Front Door</CardTitle>
        <CardDescription>Smart Lock Pro</CardDescription>
        <CardAction>
          <div className="text-spectrum-muted-foreground flex items-center gap-1.5 text-sm">
            Locked
            <IconPlaceholder
              lucide="LockIcon"
              tabler="IconLock"
              hugeicons="SquareLock02Icon"
              phosphor="LockKeyIcon"
              remixicon="RiLockLine"
              className="size-4"
            />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="bg-spectrum-muted rounded-spectrum-lg relative flex aspect-video items-center justify-center overflow-hidden bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--spectrum-border)_10px,var(--spectrum-border)_11px)]">
          <Badge variant="destructive" className="absolute top-2 right-2">
            Live
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
