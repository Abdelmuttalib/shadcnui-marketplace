"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/landing/footer";
import { HalftoneBackground } from "@/components/landing/halftone-bg";
import { SignatureMark } from "@/components/landing/signature-mark";
import type { CommunityStats } from "@/lib/community-stats";
import { cn } from "@/lib/utils";
import { blocksRegistry } from "@/config/blocks-registry";
import { BlockCategory } from "@/registry/registry-blocks";
import Image from "next/image";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { LineFieldBackground } from "@/components/landing/line-field-bg";

// Icons - using text-foreground for theme support
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 250"
    className={className}
  >
    <path
      fill="currentColor"
      d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0"
    />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19.303 5.337A17.3 17.3 0 0 0 14.963 4c-.191.329-.403.775-.552 1.125a16.6 16.6 0 0 0-4.808 0C9.454 4.775 9.23 4.329 9.05 4a17 17 0 0 0-4.342 1.337C1.961 9.391 1.218 13.35 1.59 17.255a17.7 17.7 0 0 0 5.318 2.664a13 13 0 0 0 1.136-1.836c-.627-.234-1.22-.52-1.794-.86c.149-.106.297-.223.435-.34c3.46 1.582 7.207 1.582 10.624 0c.149.117.287.234.435.34c-.573.34-1.167.626-1.793.86a13 13 0 0 0 1.135 1.836a17.6 17.6 0 0 0 5.318-2.664c.457-4.52-.722-8.448-3.1-11.918M8.52 14.846c-1.04 0-1.889-.945-1.889-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.888 2.102c0 1.156-.838 2.1-1.889 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.828 2.1-1.89 2.1"
    />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 256 256"
    className={className}
  >
    <circle cx="128" cy="128" r="128" fill="currentColor" />
    <path
      fill="currentColor"
      className="text-background"
      d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35 35 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093M85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278m74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782s21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883m-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275"
    />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
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
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
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
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Format large numbers
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

// Animated counter component
function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{formatNumber(count)}</span>;
}

// Community platforms
const platforms = [
  {
    name: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/better-auth",
    cta: "Join Discord",
    members: "10,000+",
    label: "members",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/better-auth/better-auth",
    cta: "View on GitHub",
    members: "Open Source",
    label: "repository",
  },
  {
    name: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/better_auth",
    cta: "Join Subreddit",
    members: "1.2K+",
    label: "members",
  },
  {
    name: "X (Twitter)",
    icon: XIcon,
    href: "https://x.com/better_auth",
    cta: "Follow on X",
    members: "@better_auth",
    label: "handle",
  },
];

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

export default function BlocksPageClient({ stats }: { stats: CommunityStats }) {
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
