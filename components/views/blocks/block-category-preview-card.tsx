import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

function GradientEffect() {
  return (
    <div className="absolute -bottom-4 -left-4 flex h-16 w-16 flex-col gap-y-4 opacity-80 blur-3xl dark:bg-gray-500"></div>
  );
}

type BlockCategoryPreviewCardProps = {
  block: {
    name: string;
    href: string;
    image: string;
    count: number;
  };
  newTab?: boolean;
};

export function BlockCategoryPreviewCard({
  block,
}: BlockCategoryPreviewCardProps) {
  return (
    <Card
      className={`bg-background hover:shadow-foreground/5 overflow-hidden transition-all duration-300`}
    >
      <CardContent className="relative p-0">
        <GradientEffect />
        <div className="bg-accent/50 relative aspect-video overflow-hidden dark:bg-inherit">
          <Image
            src={`${block.image}-light.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="group-hover:scale-103 ml-4 mt-11 block rounded-md border shadow-2xl transition-all duration-300 dark:hidden"
          />
          <Image
            src={`${block.image}-dark.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="group-hover:scale-103 ml-4 mt-11 hidden rounded-md border shadow-2xl transition-all duration-300 dark:block"
          />
          <div className="absolute left-4 right-4 top-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Typography
                as="h3"
                variant="lg/medium"
                className="text-foreground capitalize tracking-tight"
              >
                {block.name}
              </Typography>
              <Badge className="rounded-md px-1.5 font-normal">
                {block.count > 1
                  ? `${block.count} Blocks`
                  : `${block.count} Block`}
              </Badge>
            </div>
            <div className="bg-accent -mr-1 -mt-1 hidden rounded-md border p-0.5 group-hover:block">
              <ArrowRight className="text-muted-foreground size-4 -rotate-45" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BlockCategoryPreviewCardLink({
  block,
  newTab = false,
}: BlockCategoryPreviewCardProps) {
  return (
    <Link href={block.href} className="group" target={newTab ? "_blank" : ""}>
      <BlockCategoryPreviewCard block={block} />
    </Link>
  );
}
