import Link from "next/link";

import { blocksRegistry } from "@/config/data";
import { ComponentPreview } from "@/components/component-preview";
import { SuggestedComponentsSection } from "@/components/suggestion-blocks";
import { Code } from "@/components/views/docs/code";
import BlocksBreadcrumb from "../components/blocks-breadcrumb";
import { Typography } from "@/components/ui/typography";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Metadata, ResolvingMetadata } from "next";

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

  return (
    <div className="bg-gradient-to-r from-accent/40 to-background">
      <div className="py-20">
        <div className="space-y-2">
          <div className="border-y px-3">
            <div className="">
              <BlocksBreadcrumb />
            </div>
          </div>
          <div className="border-y flex items-center gap-2">
            <Typography
              as={"h2"}
              variant="3xl/semibold"
              className="tracking-tight capitalize px-3"
            >
              {slug?.replace("-", " ")}
            </Typography>
            <Badge>{blocksData?.length} blocks</Badge>
          </div>

          <div className="border-y">
            <Typography
              as={"p"}
              variant="md/normal"
              className="text-muted-foreground max-w-4xl px-3"
            >
              Use these shadcn ui hero section examples to add important
              messaging, product photos, and call-to-actions to the top of your
              website. These hero examples are designed and built by the
              Tailwind CSS team, and include a variety of different styles and
              layouts.
            </Typography>
          </div>
        </div>
      </div>
      <div className="space-y-20 rounded-t-2xl overflow-hidden">
        {blocksData.map((block, index) => {
          return (
            <ComponentPreview
              key={block.id + index}
              id={block.id}
              title={block.title}
              plan={block.plan}
              description={block.description}
              category={block.category}
              component={block.id}
              fileName={block.fileName}
            >
              <Code
                category={block.category}
                component={block.id}
                fileName={"page.tsx"}
              />
            </ComponentPreview>
          );
        })}

        {/* suggestion */}
        <div>
          <SuggestedComponentsSection exclude={BLOCK_PAGE_NAME} />
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
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="">
        <div className="container flex py-64 min-h-screen px-6 mx-auto">
          <div className="w-full ">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <Badge>
                <Typography
                  as="span"
                  variant="sm/medium"
                  className="text-primary font-mono"
                >
                  404 error
                </Typography>
              </Badge>
              <Typography
                as="p"
                variant="4xl/semibold"
                className="mt-4 text-foreground tracking-tight"
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

            <div className="grid w-full max-w-6xl grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedNotFoundLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative group p-3.5 py-1.5 hover:border-primary rounded-lg bg-card border flex flex-col gap-2"
                >
                  <div className="flex items-center gap-4">
                    {/* <span className="text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                    className="absolute inset-0 inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
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
