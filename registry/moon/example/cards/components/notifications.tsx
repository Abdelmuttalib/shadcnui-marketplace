import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/moon/ui/card";

export function DemoNotifications() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-moon-md p-2 transition-all hover:bg-moon-accent hover:text-moon-accent-foreground">
          <BellIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Everything</p>
            <p className="text-sm text-moon-muted-foreground">
              Email digest, mentions & all activity.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-moon-md bg-moon-accent p-2 text-moon-accent-foreground transition-all">
          <PersonIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Available</p>
            <p className="text-sm text-moon-muted-foreground">
              Only mentions and comments.
            </p>
          </div>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-moon-md p-2 transition-all hover:bg-moon-accent hover:text-moon-accent-foreground">
          <EyeNoneIcon className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Ignoring</p>
            <p className="text-sm text-moon-muted-foreground">
              Turn off all notifications.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
