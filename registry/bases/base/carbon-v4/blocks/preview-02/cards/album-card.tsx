import { Badge } from "@/registry/bases/base/carbon-v4/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/registry/bases/base/carbon-v4/ui/card";
import { Separator } from "@/registry/bases/base/carbon-v4/ui/separator";

export function AlbumCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=800&fit=crop"
            alt="Synthetic Horizons EP cover art"
            className="aspect-square w-full object-cover"
          />
          <Badge className="absolute right-3 top-3">$26,033.79</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle>Synthetic Horizons EP</CardTitle>
          <CardDescription className="text-xs uppercase tracking-wider">
            Released Aug 14, 2023
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Separator />
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">
              Tracks
            </span>
            <span className="text-lg font-medium tabular-nums">6 Tracks</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground line-clamp-1 text-xs uppercase tracking-wider">
              Cumulative Streams
            </span>
            <span className="text-lg font-medium tabular-nums">6,198,524</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
