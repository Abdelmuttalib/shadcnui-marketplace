import { Bookmark } from "lucide-react";
import * as React from "react";

import { ComponentShowcaseWrapper } from "@/components/component-wrapper";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/styles/neon/ui/avatar";
import { Badge } from "@/registry/bases/base/styles/neon/ui/badge";
import { Button } from "@/registry/bases/base/styles/neon/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/neon/ui/card";
import { Checkbox } from "@/registry/bases/base/styles/neon/ui/checkbox";
import { Input } from "@/registry/bases/base/styles/neon/ui/input";
import { Label } from "@/registry/bases/base/styles/neon/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/styles/neon/ui/select";
import { Separator } from "@/registry/bases/base/styles/neon/ui/separator";
import { Skeleton } from "@/registry/bases/base/styles/neon/ui/skeleton";
import { Switch } from "@/registry/bases/base/styles/neon/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/styles/neon/ui/table";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/styles/neon/ui/tabs";
import { Textarea } from "@/registry/bases/base/styles/neon/ui/textarea";

const BUTTON_VARIANTS: React.ComponentProps<typeof Button>["variant"][] = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
];

const BADGE_VARIANTS: React.ComponentProps<typeof Badge>["variant"][] = [
  "default",
  "secondary",
  "outline",
  "destructive",
];

export function ShowcaseComponents() {
  const style = "neon";

  return (
    <div className="grid gap-4 lg:grid-cols-4 lg:gap-6">
      <ComponentShowcaseWrapper style={style} name="button">
        <div className="flex flex-wrap gap-2">
          {BUTTON_VARIANTS.map((variant) => (
            <Button key={variant} variant={variant} className="capitalize">
              {variant}
            </Button>
          ))}
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="badge">
        <div className="flex flex-wrap gap-2">
          {BADGE_VARIANTS.map((variant) => (
            <Badge key={variant} variant={variant} className="capitalize">
              {variant}
            </Badge>
          ))}
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="input">
        <div className="grid w-full max-w-xs gap-2">
          <Input placeholder="Email address" type="email" />
          <div className="grid gap-1.5">
            <Label htmlFor="v4-bio">Bio</Label>
            <Textarea id="v4-bio" placeholder="Tell us about yourself" />
          </div>
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="select">
        <Select defaultValue="apple">
          <SelectTrigger className="w-full max-w-xs" aria-label="Fruit">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="switch">
        <div className="flex items-center gap-4">
          <Switch aria-label="Notifications off" />
          <Switch defaultChecked aria-label="Notifications on" />
          <div className="flex items-center space-x-2">
            <Checkbox id="v4-terms" />
            <Label htmlFor="v4-terms">Accept terms</Label>
          </div>
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="avatar">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://avatar.vercel.sh/v4-avatar-1"
              alt="avatar"
            />
            <AvatarFallback>MN1</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://avatar.vercel.sh/v4-avatar-2"
              alt="avatar"
            />
            <AvatarFallback>MN2</AvatarFallback>
          </Avatar>
          <Button size="icon" aria-label="Bookmark">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="card">
        <Card className="w-full max-w-xs">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Supporting description text.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Body content for visual comparison.</p>
          </CardContent>
        </Card>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell>120</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Banana</TableCell>
              <TableCell>85</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="tabs">
        <Tabs defaultValue="tab1">
          <TabsList aria-label="Demo tabs">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="skeleton">
        <div className="grid w-full max-w-xs gap-2">
          <Skeleton className="h-10 w-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-4 flex-1" />
          </div>
        </div>
      </ComponentShowcaseWrapper>

      <ComponentShowcaseWrapper style={style} name="separator">
        <div className="w-full max-w-xs">
          <p className="text-sm">Above the separator</p>
          <Separator className="my-2" />
          <p className="text-dft-muted-foreground text-sm">
            Below the separator
          </p>
        </div>
      </ComponentShowcaseWrapper>
    </div>
  );
}
