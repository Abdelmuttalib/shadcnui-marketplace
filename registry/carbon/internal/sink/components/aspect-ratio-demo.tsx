import Image from "next/image";

import { AspectRatio } from "@/registry/carbon/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-cb-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-cb-md object-cover"
      />
    </AspectRatio>
  );
}
