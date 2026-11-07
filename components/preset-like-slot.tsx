import { Suspense } from "react";
import { LikeButton } from "@/components/like-button";
import { getCurrentUser } from "@/lib/services/auth";
import { isLiked } from "@/lib/services/likes";

type Props = {
  presetId: string;
  initialLikes: number;
};

async function LikeInner({ presetId, initialLikes }: Props) {
  const user = await getCurrentUser();
  const liked = user ? await isLiked(user.id, presetId) : false;
  return (
    <LikeButton
      presetId={presetId}
      initialLiked={liked}
      initialCount={initialLikes}
    />
  );
}

export function PresetLikeSlot({ presetId, initialLikes }: Props) {
  return (
    <Suspense
      fallback={
        <LikeButton
          presetId={presetId}
          initialLiked={false}
          initialCount={initialLikes}
        />
      }
    >
      <LikeInner presetId={presetId} initialLikes={initialLikes} />
    </Suspense>
  );
}
