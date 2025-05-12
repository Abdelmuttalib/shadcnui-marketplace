"use client";

import { ArrowRightIcon } from "lucide-react";

import { PageTitle } from "@/components/common/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { PAGE_EXAMPLE_TYPES, useStyleStore } from "@/hooks/use-style-store";

import { StylePreview } from "../components/style-preview";

export default function LinearStylePage() {
  const { style } = useStyleStore();

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-10 xl:grid-cols-5">
        <div className="relative xl:col-span-2">
          <div className="sticky top-20 z-10 space-y-4 p-4 pt-10 xl:ml-auto xl:max-w-md xl:p-0 xl:pt-60">
            {/* <div className="">
              <div>
                <StylesBreadcrumb />
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <PageTitle>Linear Style</PageTitle>
              <Badge>Pro</Badge>
            </div>

            <div className="">
              <Typography
                as={"p"}
                variant="lg/normal"
                className="max-w-4xl text-muted-foreground"
              >
                Linear inspired design system style for shadcn ui
              </Typography>
            </div>
            <div className="mt-2 flex gap-2">
              <Button>
                Get Access
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">How does it work?</Button>
            </div>
            <div className="pt-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="grid bg-gradient-to-r from-accent/80 to-background p-4 xl:col-span-3">
          {PAGE_EXAMPLE_TYPES.map((styleCat, index) => {
            return (
              <StylePreview
                key={style + index}
                id={style}
                // @ts-ignore
                title={""}
                styleProp={"linear"}
                styleCat={styleCat}
                // description="Carbon IBM inspired design system style for shadcn ui"
                examplePage={styleCat}
                iframeClassName="min-h-[30rem] md:min-h-[33rem] lg:min-h-[39rem] xl:min-h-[45rem]"
              />
            );
          })}

          {/* suggestion */}
        </div>
      </div>
    </div>
  );
}
