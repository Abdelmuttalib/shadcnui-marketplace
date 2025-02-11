import { Typography } from "@/components/ui/typography";
import { blocksRegistry } from "@/config/data";
import BlocksBreadcrumb from "./components/blocks-breadcrumb";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlocksPage() {
  const blocksData = Object.keys(blocksRegistry);

  return (
    <div>
      <div className="bg-gradient-to-r from-accent/40 to-background py-20">
        <div className="space-y-2">
          <div className="border-y px-3">
            <div className="-mx-2">
              <BlocksBreadcrumb />
            </div>
          </div>
          <div className="border-y flex items-center gap-2">
            <Typography
              as={"h2"}
              variant="3xl/semibold"
              className="tracking-tight capitalize px-3"
            >
              Blocks
            </Typography>
            {/* <Badge>9 blocks</Badge> */}
          </div>

          <div className="border-y">
            <Typography
              as={"p"}
              variant="md/normal"
              className="text-muted-foreground max-w-4xl px-3"
            >
              Browse through our collection of shadcn ui components blocks. Each
              block is a standalone component that can be used in your project.
              Preview the blocks in different styles and see how they look
              together.
            </Typography>
          </div>
          <nav className="border-y mt-10">
            <ul className="overflow-hidden p-2 px-3 flex flex-wrap gap-8">
              {blocksData.map((block) => {
                return (
                  <li
                    key={block}
                    className="relative flex items-center gap-2 group"
                  >
                    <Link
                      href={`/blocks/${block}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                    >
                      <span className="sr-only">
                        view {block}
                        blocks
                      </span>
                    </Link>
                    <Typography
                      as="h4"
                      variant="lg/normal"
                      className="capitalize tracking-tight"
                    >
                      {block.replace("-", " ")}
                    </Typography>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/60 -rotate-45 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
