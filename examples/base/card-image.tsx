import { Badge } from "@/styles/base-default/ui/badge";
import { Button } from "@/styles/base-default/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-default/ui/card";

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="bg-black/35 absolute inset-0 z-30 aspect-video" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="brightness-60 dark:brightness-40 relative z-20 aspect-video w-full object-cover grayscale"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
