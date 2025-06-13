import Image from "next/image";

import { AspectRatio } from "@/registry/neon/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-neon-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-neon-md object-cover"
      />
    </AspectRatio>
  );
}
