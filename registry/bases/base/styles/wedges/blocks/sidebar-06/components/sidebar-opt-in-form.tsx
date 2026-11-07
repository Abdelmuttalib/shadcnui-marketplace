import { Button } from "@/registry/bases/base/styles/wedges/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/wedges/ui/card";
import { SidebarInput } from "@/registry/bases/base/styles/wedges/ui/sidebar";

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">Subscribe to our newsletter</CardTitle>
        <CardDescription>
          Opt-in to receive updates and news about the sidebar.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <SidebarInput type="email" placeholder="Email" />
            <Button className="bg-wedges-sidebar-primary text-wedges-sidebar-primary-foreground w-full shadow-none">
              Subscribe
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
