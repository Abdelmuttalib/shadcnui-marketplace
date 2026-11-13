"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/landing/footer";
import { HalftoneBackground } from "@/components/landing/halftone-bg";
import { SignatureMark } from "@/components/landing/signature-mark";
import { cn } from "@/lib/utils";
import { blocksRegistry } from "@/config/blocks-registry";
import { BlockCategory } from "@/registry/registry-blocks";
import Image from "next/image";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { LineFieldBackground } from "@/components/landing/line-field-bg";

function CommunityHero() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex w-full flex-col justify-center pt-6 pb-6 md:pt-10 lg:h-full lg:pb-0"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
            <span className="text-foreground/60 text-sm">Blocks</span>
          </div>
          <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 md:text-3xl xl:text-4xl dark:text-neutral-200">
            Block
            <br />
            <span className="text-foreground/50">Collection.</span>
          </h1>
          <p className="text-foreground/70 dark:text-foreground/50 max-w-[260px] text-sm leading-relaxed">
            Explore a collection of beautifully crafted shadcn/ui blocks.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlocksPageClient() {
  const [searchTerm, setSearchTerm] = useState("");

  const blocksData = Object.keys(blocksRegistry).map((block) => ({
    name: block.replace("-", " "),
    href: `/blocks/${block}`,
    image: `/images/blocks/${block}-preview`,
    count: blocksRegistry[block as BlockCategory].length,
  }));

  const filteredBlocksData = blocksData.filter((block) =>
    block.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-dvh pt-14 lg:pt-0">
      <div className="text-foreground relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side — Community hero */}
          <div className="border-foreground/6 relative hidden w-full shrink-0 overflow-clip border-b px-5 sm:px-6 lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[30%] lg:border-r lg:border-b-0 lg:px-10">
            <div className="hidden lg:block">
              <LineFieldBackground />
            </div>
            <CommunityHero />
            <div className="absolute right-6 bottom-4 left-10 z-3">
              <SignatureMark compact />
            </div>
          </div>

          {/* Right side — Stats & platforms */}
          <div className="no-scrollbar relative w-full overflow-x-hidden lg:w-[70%]">
            <div className="space-y-8 px-5 lg:p-8 lg:pt-20">
              {/* Mobile header */}
              <div className="border-foreground/6 relative -mx-5 mb-5 overflow-hidden border-b px-5 sm:-mx-6 sm:px-6 lg:hidden">
                <HalftoneBackground />
                <div className="relative space-y-2 py-16">
                  <div className="flex items-center gap-1.5">
                    {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
                    <span className="text-foreground/60 text-sm">Blocks</span>
                  </div>
                  <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 md:text-3xl xl:text-4xl dark:text-neutral-200">
                    Block{" "}
                    <span className="text-foreground/50">Collection.</span>
                  </h1>
                  <p className="text-foreground/70 dark:text-foreground/50 text-sm leading-relaxed">
                    Explore a collection of beautifully crafted shadcn/ui
                    blocks.
                  </p>
                </div>
              </div>

              <h2 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
                Blocks
                <span className="bg-foreground/15 h-px flex-1" />
              </h2>

              {/* Section: Statistics */}
              {/* <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <p className="text-foreground/60 mb-5 font-mono text-[10px] tracking-widest uppercase">
                  # In Numbers
                </p>

                <div className="grid grid-cols-2 gap-0">
                  <StatCard
                    icon={DownloadIcon}
                    label="NPM Downloads"
                    value={stats.npmDownloads}
                    subtext="/ week"
                    index={0}
                  />
                  <StatCard
                    icon={StarIcon}
                    label="GitHub Stars"
                    value={stats.githubStars}
                    subtext="stars"
                    index={1}
                  />
                  <StatCard
                    icon={UsersIcon}
                    label="Contributors"
                    value={stats.contributors}
                    subtext="people"
                    index={2}
                  />
                  <StatCard
                    icon={DiscordIcon}
                    label="Discord Members"
                    value={stats.discordMembers}
                    subtext="members"
                    index={3}
                  />
                </div>
              </motion.div> */}

              <div className="relative w-full py-2 xl:max-w-md">
                <SearchIcon className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2 transform" />
                <Input
                  type="search"
                  placeholder="Search block categories..."
                  className="w-full py-2 pr-4 pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {filteredBlocksData.length > 0 ? (
                <div className="border-foreground/8 relative mb-2 grid grid-cols-1 overflow-hidden border md:grid-cols-2 2xl:grid-cols-3">
                  {filteredBlocksData?.map((block, i) => (
                    <>
                      <Link
                        key={block.name}
                        href={"href" in block ? block.href : "#"}
                        className="contents"
                      >
                        <motion.div
                          whileHover={{
                            y: -2,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
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
                              {block.name}
                            </div>
                            <div className="text-foreground/45 dark:text-foreground/30 group-hover/card:text-foreground/60 dark:group-hover/card:text-foreground/40 font-mono text-[12px] tracking-wider transition-colors duration-200">
                              {block.count}{" "}
                              {block.count > 1 ? `Blocks` : `Block`}
                              {/* {String(i + 1).padStart(2, "0")} */}
                            </div>
                          </div>

                          <div className="bg-foreground/1.5 mt-4 flex items-center gap-1">
                            <Image
                              src={`${block.image}-light.png`}
                              width={1919 / 2}
                              height={963 / 2}
                              quality={100}
                              alt={block.name}
                              className="shadow-foreground/5 block border dark:hidden"
                            />
                            <Image
                              src={`${block.image}-dark.png`}
                              width={1919 / 2}
                              height={963 / 2}
                              quality={100}
                              alt={block.name}
                              className="shadow-foreground/5 hidden border dark:block"
                            />
                          </div>
                        </motion.div>
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
                  ))}
                </div>
              ) : (
                <div className="border-foreground/6 bg-foreground/1.5 text-muted-foreground flex h-6 w-fit items-center gap-1 border px-2.5 font-mono text-xs">
                  <p>0 Categories found</p>
                </div>
              )}
            </div>
            <div className="lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { Search } from "lucide-react";
// import { useEffect, useState } from "react";

// import { PageContainer } from "@/components/common/page-container";
// import { PageHeader, PageTitle } from "@/components/common/page-header";
// import { Input } from "@/components/ui/input";
// import { Typography } from "@/components/ui/typography";
// import { BlockCategoryPreviewCardLink } from "@/components/views/blocks/block-category-preview-card";
// import { blocksRegistry } from "@/config/blocks-registry";
// import { BlockCategory } from "@/registry/registry-blocks";

// export default function BlocksPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const blocksData = Object.keys(blocksRegistry).map((block) => ({
//     name: block.replace("-", " "),
//     href: `/blocks/${block}`,
//     image: `/images/blocks/${block}-preview`,
//     count: blocksRegistry[block as BlockCategory].length,
//   }));

//   const filteredBlocksData = blocksData.filter((block) =>
//     block.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="relative overflow-hidden py-20">
//       <div className="space-y-8">
//         <PageContainer>
//           <div className="flex flex-col gap-y-4">
//             <PageHeader
//               title="Blocks"
//               description="Discover shadcn/ui blocks."
//               actions={
//                 <div className="relative w-full max-w-md py-2">
//                   <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2 transform" />
//                   <Input
//                     type="search"
//                     placeholder="Search block categories..."
//                     className="w-full py-2 pr-4 pl-8"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//               }
//             />
//           </div>
//         </PageContainer>
//         <div className="space-y-20 overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//             <BlocksByCategories filteredBlocksData={filteredBlocksData} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BlocksByCategories({
//   filteredBlocksData,
// }: {
//   filteredBlocksData: any[];
// }) {
//   return (
//     <>
//       {filteredBlocksData.length > 0 ? (
//         filteredBlocksData.map((block, index) => (
//           <BlockCategoryPreviewCardLink
//             key={block.title + index}
//             block={block}
//           />
//         ))
//       ) : (
//         <PageContainer>
//           <p className="bg-accent text-muted-foreground w-fit rounded-md px-3 py-1 text-sm">
//             0 Categories found
//           </p>
//         </PageContainer>
//       )}
//     </>
//   );
// }

// function GradientEffect() {
//   return (
//     <div className="absolute -bottom-4 -left-4 flex h-16 w-16 flex-col gap-y-4 opacity-80 blur-3xl dark:bg-gray-500"></div>
//   );
// }
