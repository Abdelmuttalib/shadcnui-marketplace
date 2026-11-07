import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

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
      className={`bg-background hover:bg-accent/70 overflow-hidden rounded-none py-3 transition-all duration-200`}
    >
      <CardContent className="relative p-0 pl-3">
        <div className="bg-accent/50 relative aspect-video overflow-hidden dark:bg-inherit">
          <Image
            src={`${block.image}-light.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="mt-10 ml-4 block rounded-lg border shadow-2xl transition-all duration-200 group-hover:scale-101 dark:hidden"
          />
          <Image
            src={`${block.image}-dark.png`}
            width={1919 / 2}
            height={963 / 2}
            quality={100}
            alt={block.name}
            className="mt-10 ml-4 hidden rounded-lg border shadow-2xl transition-all duration-200 group-hover:scale-101 dark:block"
          />
          <div className="absolute top-0 right-4 left-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Typography
                as="h3"
                variant="lg/medium"
                className="text-foreground capitalize"
              >
                {block.name}
              </Typography>
              <Badge
                variant="secondary"
                className="rounded-none px-1.5 font-normal"
              >
                {block.count > 1
                  ? `${block.count} Blocks`
                  : `${block.count} Block`}
              </Badge>
            </div>
            <div className="bg-accent -mt-1 -mr-1 hidden border p-0.5 group-hover:block">
              <ArrowRight className="text-foreground size-4.5 -rotate-45" />
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
