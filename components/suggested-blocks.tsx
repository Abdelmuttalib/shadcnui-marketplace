import { Typography } from "@/components/ui/typography";
import { blocksPreviewImagesData } from "@/config/blocks-preview-images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
      <nav className="py-4">
        <ul className="border-foreground/8 relative mb-2 grid grid-cols-1 overflow-hidden border md:grid-cols-2 2xl:grid-cols-3">
          {suggestedBlocks.map((block, i) => {
            return (
              <>
                <>
                  <Link
                    key={block.title + block.blocksCount}
                    href={"href" in block ? block.href : "#"}
                    className="contents"
                  >
                    <div
                      className={cn(
                        "group/card border-foreground/8 hover:bg-foreground/2 relative h-full min-h-[100px] p-4 transition-all duration-200 hover:z-10 hover:shadow-[inset_0_1px_0_0_rgba(128,128,128,0.1)] lg:p-5",
                        // Bottom border: all except last; 3-col last row starts at 6
                        i < 8 && "border-b",
                        i >= 6 && "md:border-b-0",
                        // Right border: none on mobile
                        // 2-col: left column (even indices) gets right border
                        i % 2 === 0 && i < 8 && "sm:border-r",
                        // 3-col: remove right border on 3rd column, add on odd indices that need it
                        i % 3 === 2 && "md:border-r-0",
                        i % 2 !== 0 && i % 3 !== 2 && "md:border-r"
                      )}
                    >
                      {/* Arrow icon — top right, visible on hover */}
                      <span className="absolute top-3 right-3 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 lg:top-4 lg:right-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-foreground/40 dark:text-foreground/50"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                      <div className="mb-1 space-y-1">
                        <div className="text-foreground/80 text-[13px] font-medium capitalize transition-colors duration-200 dark:text-neutral-100">
                          {block.title}
                        </div>
                        <div className="text-foreground/45 dark:text-foreground/30 group-hover/card:text-foreground/60 dark:group-hover/card:text-foreground/40 font-mono text-[12px] tracking-wider transition-colors duration-200">
                          {block.blocksCount}{" "}
                          {block.blocksCount > 1 ? `Blocks` : `Block`}
                          {/* {String(i + 1).padStart(2, "0")} */}
                        </div>
                      </div>

                      <div className="bg-foreground/1.5 mt-4 flex items-center gap-1">
                        <Image
                          src={`${block.imageSrc}-light.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.title}
                          className="shadow-foreground/5 block border dark:hidden"
                        />
                        <Image
                          src={`${block.imageSrc}-dark.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.title}
                          className="shadow-foreground/5 hidden border dark:block"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* + marks at grid intersections */}
                  <span className="text-foreground/35 dark:text-foreground/20 absolute top-1/3 left-1/3 z-10 -mt-[1px] -ml-[.5px] hidden -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] select-none md:block">
                    +
                  </span>
                  <span className="text-foreground/35 dark:text-foreground/20 absolute top-1/3 left-2/3 z-10 -mt-[1px] -ml-[.5px] hidden -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] select-none md:block">
                    +
                  </span>
                  <span className="text-foreground/35 dark:text-foreground/20 absolute top-2/3 left-1/3 z-10 -mt-[1px] -ml-[.5px] hidden -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] select-none md:block">
                    +
                  </span>
                  <span className="text-foreground/35 dark:text-foreground/20 absolute top-2/3 left-2/3 z-10 -mt-[1px] -ml-[.5px] hidden -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] select-none md:block">
                    +
                  </span>
                </>

                {/* <BlockCategoryPreviewCardLink
                  key={block.title + i}
                  block={{
                    name: block.title,
                    href: block.href,
                    image: block.imageSrc,
                    count: block.blocksCount,
                  }}
                /> */}
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
