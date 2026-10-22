import { Star } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/styles/material/ui/avatar";
import { Badge } from "@/registry/bases/base/styles/material/ui/badge";
import { Button } from "@/registry/bases/base/styles/material/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/material/ui/card";
import { Separator } from "@/registry/bases/base/styles/material/ui/separator";

export function MaterialCardShowcase() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl font-semibold">
                  shadcn/ui
                </CardTitle>
                <Badge variant="outline" className="text-xs font-normal">
                  v4
                </Badge>
              </div>
              <CardDescription>
                Isolated v4 component collection in the dft namespace.
              </CardDescription>
            </div>
            <Button size="icon" variant="outline" aria-label="Star">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Avatar className="size-8 flex-none rounded-full">
              <AvatarImage
                src="https://avatar.vercel.sh/v4-card-1"
                alt="avatar"
              />
              <AvatarFallback>CN1</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 flex-none rounded-full">
              <AvatarImage
                src="https://avatar.vercel.sh/v4-card-2"
                alt="avatar"
              />
              <AvatarFallback>CN2</AvatarFallback>
            </Avatar>
            <span className="text-material-muted-foreground text-sm">
              2 contributors
            </span>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="pt-4">
          <Button className="w-full">Get started</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
