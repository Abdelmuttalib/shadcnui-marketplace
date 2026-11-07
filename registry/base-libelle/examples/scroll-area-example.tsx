import Image from "next/image";
import * as React from "react";

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/styles/libelle/components/example";
import {
  ScrollArea,
  ScrollBar,
} from "@/registry/bases/base/styles/libelle/ui/scroll-area";
import { Separator } from "@/registry/bases/base/styles/libelle/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyav",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
] as const;

export default function ScrollAreaExample() {
  return (
    <ExampleWrapper>
      <ScrollAreaVertical />
      <ScrollAreaHorizontal />
    </ExampleWrapper>
  );
}

function ScrollAreaVertical() {
  return (
    <Example title="Vertical">
      <ScrollArea className="style-luma:rounded-2xl style-rhea:rounded-2xl rounded-libelle-md mx-auto h-72 w-48 border">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </Example>
  );
}

function ScrollAreaHorizontal() {
  return (
    <Example title="Horizontal">
      <ScrollArea className="style-luma:rounded-2xl style-rhea:rounded-2xl rounded-libelle-md mx-auto w-full max-w-96 border p-4">
        <div className="flex gap-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="rounded-libelle-md overflow-hidden">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="text-libelle-muted-foreground pt-2 text-xs">
                Photo by{" "}
                <span className="text-libelle-foreground font-semibold">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Example>
  );
}
