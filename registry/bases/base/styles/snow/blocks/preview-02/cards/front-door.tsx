import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Badge } from "@/registry/bases/base/styles/snow/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/snow/ui/card";

export function FrontDoor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Front Door</CardTitle>
        <CardDescription>Smart Lock Pro</CardDescription>
        <CardAction>
          <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
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
        <div className="bg-muted relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)]">
          <Badge variant="destructive" className="absolute top-2 right-2">
            Live
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
