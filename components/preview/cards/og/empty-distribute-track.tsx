import { Button } from "@/registry/bases/base/styles/default/ui/button";
import {
  Card,
  CardContent,
} from "@/registry/bases/base/styles/default/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/styles/default/ui/empty";
import { IconPlaceholder } from "@tabler/icons-react";

export function EmptyDistributeTrack() {
  return (
    <Card style={{ flex: 1 }}>
      <CardContent style={{ flex: 1, padding: 16 }}>
        <Empty>
          <EmptyMedia variant="icon">
            <IconPlaceholder size={24} />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Distribute Track</EmptyTitle>
            <EmptyDescription>
              Upload your first master to start reaching listeners on Spotify,
              Apple Music, and more.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Create Release</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  );
}
