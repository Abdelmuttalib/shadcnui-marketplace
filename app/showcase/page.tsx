"use client";

import { Search } from "lucide-react";
import React from "react";

import { PageContainer } from "@/components/common/page-container";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { ComponentCode } from "@/components/views/docs/component-code";
import { RegistryIndex } from "@/registry";

import BlocksBreadcrumb from "../blocks/components/blocks-breadcrumb";
import { ComponentPreviewShowcase } from "../docs/components/component-showcase";

const docsComponents = Object.keys(RegistryIndex["carbon"]);

export default function Showcase() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [scrollY, setScrollY] = React.useState(0);

  const blocksData = docsComponents.filter((block) =>
    block.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="overflow-hidden py-20">
        <div className="space-y-8">
          <PageContainer>
            <div className="space-y-4">
              <div>
                <BlocksBreadcrumb />
              </div>
              <div className="flex items-center gap-2">
                <Typography
                  as={"h1"}
                  variant="5xl/semibold"
                  className="capitalize tracking-tighter"
                >
                  See Styles in action
                </Typography>
                {/* <Badge>{blocksData?.length} blocks</Badge> */}
              </div>

              <div>
                <Typography
                  as={"p"}
                  variant="lg/normal"
                  className="max-w-4xl text-muted-foreground"
                >
                  Elevate your projects with our meticulously crafted shadcn/ui
                  blocks
                  {/* Browse through our collection of shadcn ui components
              blocks. Each block is a standalone component that can be used in
              your project. Preview the blocks in different styles and see how
              they look together. */}
                </Typography>
              </div>

              <div className="w-full">
                <div className="relative w-full max-w-md py-2">
                  <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search block categories..."
                    className="w-full py-2 pl-8 pr-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </PageContainer>
          <div className="overflow-hidden border-y px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {docsComponents.map((component) => (
                <ComponentPreviewShowcase
                  key={component}
                  id={component}
                  title={component.replace("-", " ")}
                  // @ts-expect-error - dynamic loadable imported component
                  description={RegistryIndex["carbon"][component].description}
                  component={component}
                  className="pt-0"
                >
                  <ComponentCode
                    style="carbon"
                    component={component}
                    fileName={component}
                  />
                </ComponentPreviewShowcase>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
