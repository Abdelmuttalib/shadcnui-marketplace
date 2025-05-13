import { Typography } from "@/components/ui/typography";
import { BlockCategoryPreviewCardLink } from "@/components/views/blocks/block-category-preview-card";
import { blocksPreviewImagesData } from "@/config/blocks-preview-images";

export function SuggestedBlocks({ exclude }: { exclude?: string }) {
  const excluded = exclude || "";

  const suggestedBlocks = blocksPreviewImagesData.filter(
    (block) => block.title !== excluded
  );

  return (
    <div className="mb-24 space-y-2 lg:mt-72">
      <div className="space-y-2">
        <Typography as="h2" variant="lg/medium" className="tracking-tight">
          Explore more blocks
        </Typography>
      </div>
      <nav className="mt-10 py-4">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {suggestedBlocks.map((block, index) => {
            return (
              <BlockCategoryPreviewCardLink
                key={block.title + index}
                block={{
                  name: block.title,
                  href: block.href,
                  image: block.imageSrc,
                  count: block.blocksCount,
                }}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
