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
};

export function BlockCategoryPreviewCard({
  block,
}: BlockCategoryPreviewCardProps) {
  return (
    <Card
      className={`overflow-hidden bg-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5`}
    >
      <CardContent className="relative p-0">
        <GradientEffect />
        <div className="relative aspect-video overflow-hidden bg-accent/50 dark:bg-inherit">
          <Image
            src={`${block.image}-light.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="ml-4 mt-11 block rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:hidden"
          />
          <Image
            src={`${block.image}-dark.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="ml-4 mt-11 hidden rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:block"
          />
          <div className="absolute left-4 right-4 top-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Typography
                as="h3"
                variant="lg/medium"
                className="capitalize tracking-tight text-foreground"
              >
                {block.name}
              </Typography>
              <Badge className="rounded-md px-1.5 font-normal">
                {block.count > 1
                  ? `${block.count} Blocks`
                  : `${block.count} Block`}
              </Badge>
            </div>
            <div className="-mr-1 -mt-1 hidden rounded-md border bg-accent p-0.5 group-hover:block">
              <ArrowRight className="size-4 -rotate-45 text-muted-foreground" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BlockCategoryPreviewCardLink({
  block,
}: BlockCategoryPreviewCardProps) {
  return (
    <Link href={block.href} target="_blank" className="group">
      <BlockCategoryPreviewCard block={block} />
    </Link>
  );
}
