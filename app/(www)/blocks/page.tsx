"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { PageContainer } from "@/components/common/page-container";
import { PageTitle } from "@/components/common/page-header";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { BlockCategoryPreviewCardLink } from "@/components/views/blocks/block-category-preview-card";
import { blocksRegistry } from "@/config/blocks-registry";
import { BlockCategory } from "@/registry/registry-blocks";

import BlocksBreadcrumb from "./components/blocks-breadcrumb";

export default function BlocksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const [searchBy, setSearchBy] = useState<"category" | "block">("category");

  const blocksData = Object.keys(blocksRegistry).map((block) => ({
    name: block.replace("-", " "),
    href: `/blocks/${block}`,
    image: `/images/blocks/${block}-preview`,
    count: blocksRegistry[block as BlockCategory].length,
  }));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const filteredCategories = categories.filter((category) =>
  //   category.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredBlocksData = blocksData.filter((block) =>
    block.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 h-32 w-full bg-gradient-to-b from-accent/40 to-background"></div>
      <div className="space-y-8">
        <PageContainer>
          <div className="space-y-4">
            <div>
              <BlocksBreadcrumb />
            </div>

            <div className="flex items-center gap-2">
              <PageTitle as={"h1"}>Discover Our Block Collection</PageTitle>
            </div>

            <div>
              <Typography
                as={"p"}
                variant="lg/normal"
                className="max-w-4xl text-muted-foreground"
              >
                Elevate your projects with our meticulously crafted shadcn/ui
                blocks
                {/* Browse through our collection of shadcn ui components
              blocks. Each block is a standalone component that can be used in
              your project. Preview the blocks in different styles and see how
              they look together. */}
              </Typography>
            </div>

            <div className="w-full">
              <div className="relative w-full max-w-md py-2">
                <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search block categories..."
                  className="w-full py-2 pl-8 pr-4"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </PageContainer>
        <div className="space-y-20 overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
          {/* <PageContainer> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <BlocksByCategories filteredBlocksData={filteredBlocksData} />
            {/* <BlocksByBlockItem filteredBlocksData={filteredBlocksData} /> */}
            {/* {filteredBlocksData.length > 0 ? (
              filteredBlocksData.map((block, index) => (
                <Link
                  key={block.name}
                  href={block.href}
                  target="_blank"
                  className="group"
                >
                  <Card
                    className={`overflow-hidden bg-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5`}
                  >
                    <CardContent className="relative p-0">
                      <GradientEffect />
                      <div className="relative aspect-video overflow-hidden bg-accent/50 dark:bg-inherit">
                        <Image
                          src={`${block.image}-light.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.name}
                          className="ml-4 mt-11 block rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:hidden"
                        />
                        <Image
                          src={`${block.image}-dark.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.name}
                          className="ml-4 mt-11 hidden rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:block"
                        />
                        <div className="absolute left-4 right-4 top-2 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Typography
                              as="h3"
                              variant="lg/medium"
                              className="capitalize tracking-tight text-foreground"
                            >
                              {block.name}
                            </Typography>
                            <Badge className="rounded-md px-1.5">
                              {block.count} Blocks
                            </Badge>
                          </div>
                          <div className="hidden rounded-md bg-accent p-1 group-hover:block">
                            <ArrowRight className="size-4 -rotate-45 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <PageContainer>
                <p className="w-fit rounded-md bg-accent px-3 py-1 text-sm text-muted-foreground">
                  0 blocks found
                </p>
              </PageContainer>
            )} */}
          </div>
          {/* </PageContainer> */}
        </div>
      </div>
    </section>
  );
}

function BlocksByCategories({
  filteredBlocksData,
}: {
  filteredBlocksData: any[];
}) {
  return (
    <>
      {filteredBlocksData.length > 0 ? (
        filteredBlocksData.map((block, index) => (
          <BlockCategoryPreviewCardLink
            key={block.title + index}
            block={block}
          />
        ))
      ) : (
        <PageContainer>
          <p className="w-fit rounded-md bg-accent px-3 py-1 text-sm text-muted-foreground">
            0 Categories found
          </p>
        </PageContainer>
      )}
    </>
  );
}

// function BlocksByBlockItem({ filteredBlocksData }) {
//   return (
//     <>
//       {filteredBlocksData.length > 0 ? (
//         filteredBlocksData.map((block, index) => (
//           <Link
//             key={block.name}
//             href={block.href}
//             target="_blank"
//             className="group"
//           >
//             <Card
//               className={`overflow-hidden bg-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5`}
//             >
//               <CardContent className="relative p-0">
//                 <GradientEffect />
//                 <div className="relative aspect-video overflow-hidden bg-accent/50 dark:bg-inherit">
//                   <Image
//                     src={`${block.image}-light.png`}
//                     width={1919 / 2}
//                     height={963 / 2}
//                     quality={100}
//                     alt={block.name}
//                     className="ml-4 mt-11 block rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:hidden"
//                   />
//                   <Image
//                     src={`${block.image}-dark.png`}
//                     width={1919 / 2}
//                     height={963 / 2}
//                     quality={100}
//                     alt={block.name}
//                     className="ml-4 mt-11 hidden rounded-md border shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rounded-tl-none dark:block"
//                   />
//                   <div className="absolute left-4 right-4 top-2 flex items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       <Typography
//                         as="h3"
//                         variant="lg/medium"
//                         className="capitalize tracking-tight text-foreground"
//                       >
//                         {block.name}
//                       </Typography>
//                       <Badge className="rounded-md px-1.5">
//                         {block.count} Blocks
//                       </Badge>
//                     </div>
//                     <div className="hidden rounded-md bg-accent p-1 group-hover:block">
//                       <ArrowRight className="size-4 -rotate-45 text-muted-foreground" />
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ))
//       ) : (
//         <PageContainer>
//           <p className="w-fit rounded-md bg-accent px-3 py-1 text-sm text-muted-foreground">
//             0 Categories found
//           </p>
//         </PageContainer>
//       )}
//     </>
//   );
// }

function GradientEffect() {
  return (
    <div className="absolute -bottom-4 -left-4 flex h-16 w-16 flex-col gap-y-4 opacity-80 blur-3xl dark:bg-gray-500"></div>
  );
}
