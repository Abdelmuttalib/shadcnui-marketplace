"use client";

import React from "react";

import { RegistryIndex } from "@/registry";

const docsComponents = Object.keys(RegistryIndex["carbon"]);

export default function Showcase() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const blocksData = docsComponents.filter((block) =>
    block.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="overflow-hidden py-20">
        <div className="space-y-8">
          {/* <div className="overflow-hidden border-y px-4 py-6 sm:px-6 lg:px-8">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}
