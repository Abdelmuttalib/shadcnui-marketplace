import { Badge } from "@/registry/linear/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant={"secondary"}>Secondary</Badge>
      <Badge variant={"outline"}>Outline</Badge>
      <Badge variant={"destructive"}>Destructive</Badge>
    </div>
  );
}
