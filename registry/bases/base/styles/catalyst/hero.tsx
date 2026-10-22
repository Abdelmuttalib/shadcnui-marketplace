import { HeartIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/styles/catalyst/ui/avatar";
import { Badge } from "@/registry/bases/base/styles/catalyst/ui/badge";
import { Button } from "@/registry/bases/base/styles/catalyst/ui/button";
import { Checkbox } from "@/registry/bases/base/styles/catalyst/ui/checkbox";
import { Input } from "@/registry/bases/base/styles/catalyst/ui/input";
import { Switch } from "@/registry/bases/base/styles/catalyst/ui/switch";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/styles/catalyst/ui/tabs";
import { renderStyleCardShowcase } from "@/registry/styles-components";

export function HeroUI() {
  return (
    <>
      <div className="-ml-[32rem] h-[46.375rem] origin-top select-none sm:-mt-16 sm:-ml-[24rem] sm:h-auto md:-ml-64 lg:mt-0 lg:-ml-16 xl:-mr-4 xl:ml-0">
        <div className="flex justify-end">
          <div className="relative flex items-end">
            <div className="bg-catalyst-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div>
              <div>
                <div className="relative ml-auto hidden w-fit justify-end p-4 lg:flex">
                  <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="bg-catalyst-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <Switch />
                </div>
              </div>
              <div className="relative p-4">
                <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-catalyst-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="flex items-center justify-end">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2 p-4 text-right">
                <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="bg-catalyst-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div className="flex justify-end gap-2">
                  <Tabs defaultValue="tab1">
                    <TabsList>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Button size="icon" aria-label="Like">
                    <HeartIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    aria-label="Like secondary"
                  >
                    <HeartIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-4">
              <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="bg-catalyst-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="divide-catalyst-border rounded-catalyst-lg border-catalyst-input bg-catalyst-card text-catalyst-foreground w-[24.5rem] divide-y border text-[0.8125rem]/5 shadow-xl shadow-black/5">
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src="https://avatar.vercel.sh/v4-avatar-1"
                      alt="avatar"
                    />
                    <AvatarFallback>MN1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Leonard Krasner</div>
                    <div className="text-catalyst-muted-foreground mt-1">
                      @leonardkrasner
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center p-4">
                  <Avatar className="size-10 flex-none rounded-full">
                    <AvatarImage
                      src="https://avatar.vercel.sh/v4-avatar-2"
                      alt="avatar"
                    />
                    <AvatarFallback>MN2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 flex-auto">
                    <div className="font-medium">Floyd Miles</div>
                    <div className="text-catalyst-muted-foreground mt-1">
                      @floydmiles
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="p-4">
                  <Button className="w-full" variant="default">
                    View all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative z-10 p-4">
            <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="bg-catalyst-foreground/10 absolute -inset-x-8 top-0 h-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="flex w-fit items-center gap-2">
              <Input placeholder="Search components" className="w-48" />
              <div className="flex items-center space-x-2">
                <Checkbox id="v4-hero-terms" />
                <label
                  htmlFor="v4-hero-terms"
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="ml-auto flex justify-end">
            <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
              <Badge className="w-fit flex-none">Default</Badge>
              <Badge className="w-fit flex-none" variant="outline">
                Outline
              </Badge>
              <Badge className="w-fit flex-none" variant="destructive">
                Destructive
              </Badge>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-[32.125rem] p-4">
          <div className="bg-catalyst-foreground/10 absolute -inset-y-8 right-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="bg-catalyst-foreground/10 absolute -inset-y-8 left-0 w-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="bg-catalyst-foreground/10 absolute -inset-x-8 bottom-0 h-px [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

          {renderStyleCardShowcase("catalyst")}
        </div>
      </div>
    </>
  );
}
