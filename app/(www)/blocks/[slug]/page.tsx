import { ArrowRightIcon } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import React from "react";

import { BlockPreview } from "@/components/common/block-preview";
import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";
import { StringCode } from "@/components/common/string-code";
import { SuggestedBlocks } from "@/components/suggested-blocks";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { blocksRegistry } from "@/lib/generate-registry";
import { registryStyleBlocks } from "@/registry/linear/block";

import { PreviewContainer } from "../components/preview-container";

interface Props {
  params: { slug: string };
}

interface PProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params, searchParams }: PProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const blocksData = blocksRegistry[slug];

  if (!blocksData) {
    return {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: slug?.replace("-", " "),
    description: `${slug?.replace("-", " ")} blocks`,
    openGraph: {
      title: slug?.replace("-", " "),
      description: `${slug?.replace("-", " ")} blocks`,
      images: ["/images/og-image-2.png"],
    },
  };
}

// export async function generateStaticParams() {
//   return Object.keys(blocksRegistry).map((slug) => ({ slug }));
// }

export default function ComponentPage({ params }: Props) {
  const { slug } = params;
  const BLOCK_PAGE_NAME = slug;

  // Get the component dynamically based on slug
  const blocksData = blocksRegistry[slug];

  if (!blocksData) {
    return <BlocksNotFound slug={slug} />;
  }

  const blockPageTitle = slug?.replace("-", " ");

  const BlockComponent = registryStyleBlocks["blog-sections"][0].component;

  return (
    <div>
      <div className="bg-gradient-to-b from-accent/30 to-background py-20">
        <PageContainer>
          <PageHeader
            title={blockPageTitle}
            description={`${blockPageTitle} blocks for your website. crafted with shadcn ui and tailwindcss. Preview the blocks in different styles and see how they look together. copy & paste blocks directly to your project.`}
            badge={<Badge>{blocksData?.length} blocks</Badge>}
          />
        </PageContainer>
      </div>

      {/* <div>
        <PageContainer size={"xl"}>
          <div className="rounded-md border bg-linear-background">
            {registryBlocks[""]}
            {registryStyleBlocks["blog-sections"][0].component ?? null}
          </div>
        </PageContainer>
      </div> */}

      <div className="space-y-20">
        <PreviewContainer>
          <div className="space-y-28">
            {blocksData.map((block, index) => {
              return (
                <BlockPreview
                  key={block.id + index}
                  id={block.id}
                  title={block.title}
                  plan={block.plan}
                  description={block.description}
                  category={block.category}
                  component={block.id}
                  fileName={block.fileName}
                >
                  {/* <Code
                    category={block.category}
                    component={block.id}
                    fileName={"page.tsx"}
                  /> */}
                  <StringCode c={block.code} />
                </BlockPreview>
              );
            })}
          </div>
        </PreviewContainer>

        {/* suggestion */}
        <div>
          <PageContainer size={"xl"}>
            <SuggestedBlocks exclude={BLOCK_PAGE_NAME} />
          </PageContainer>
        </div>
      </div>
    </div>
  );
}

// Custom 404 for /blocks
function BlocksNotFound({ slug }: { slug: string }) {
  const suggestedNotFoundLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Styles",
      href: "/styles",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <section className="">
        <div className="container mx-auto flex min-h-screen px-6 py-64">
          <div className="w-full ">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <Badge>
                <Typography
                  as="span"
                  variant="sm/medium"
                  className="font-mono text-primary"
                >
                  404 error
                </Typography>
              </Badge>
              <Typography
                as="p"
                variant="4xl/semibold"
                className="mt-4 tracking-tight text-foreground"
              >
                Page not found
              </Typography>
              <Typography
                as="p"
                variant="base/normal"
                className="mt-4 text-muted-foreground"
              >
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </Typography>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedNotFoundLinks.map((link) => (
                <div
                  key={link.title}
                  className="group relative flex flex-col gap-2 rounded-lg border bg-card p-3.5 py-1.5 hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    {/* <span className="text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </span> */}

                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-foreground">
                        {link.title}
                      </h3>

                      <ArrowRightIcon className="size-4 -rotate-45 text-muted-foreground/30 group-hover:text-primary" />
                    </div>
                  </div>

                  {/* <p className="text-sm text-muted-foreground">
                    Looks like you&apos;ve followed a broken link or entered a
                    URL
                  </p> */}

                  <Link
                    href={link.href}
                    className="absolute inset-0 mt-4 inline-flex items-center gap-x-2 text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Place this function at the **bottom** of the page.tsx file
// export async function generateStaticParams() {
//   return Object.keys(components).map((slug) => ({ slug }));
// }
