import Image from "next/image";

import { AspectRatio } from "@/styles/base-default/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted w-full max-w-sm rounded-lg">
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="dark:brightness-20 rounded-lg object-cover grayscale"
      />
    </AspectRatio>
  );
}
