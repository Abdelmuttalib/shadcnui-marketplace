"use client";

import * as Default from "@/registry/bases/base/default/ui/accordion";
import * as V4 from "@/registry/bases/base/default-v4/ui/accordion";

import type { FixtureSide } from "./types";

export function AccordionFixture({ side }: { side: FixtureSide }) {
  const { Accordion, AccordionContent, AccordionItem, AccordionTrigger } =
    side === "default" ? Default : V4;
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>First section</AccordionTrigger>
          <AccordionContent>First section content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second section</AccordionTrigger>
          <AccordionContent>Second section content.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
