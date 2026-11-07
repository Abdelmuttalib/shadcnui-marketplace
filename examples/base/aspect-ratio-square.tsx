import Image from "next/image";

import { AspectRatio } from "@/styles/base-default/ui/aspect-ratio";

export function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-muted w-full max-w-[12rem] rounded-lg"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="dark:brightness-20 rounded-lg object-cover grayscale"
      />
    </AspectRatio>
  );
}
