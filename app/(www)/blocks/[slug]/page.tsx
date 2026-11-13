import { ArrowRightIcon } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

import { BlockPreview } from "@/components/common/block-preview";
import { StringCode } from "@/components/common/string-code";
import { SuggestedBlocks } from "@/components/suggested-blocks";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { blocksRegistry } from "@/config/blocks-registry";
import { blockCategories, BlockCategory } from "@/registry/registry-blocks";

import { SignatureMark } from "@/components/landing/signature-mark";
import Footer from "@/components/landing/footer";
import { LineFieldBackground } from "@/components/landing/line-field-bg";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // blockCategories
  const s = await params;
  const slug = s.slug.toLocaleLowerCase();

  const isBlock = blockCategories.includes(slug as unknown as BlockCategory);

  if (!isBlock) {
    return {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
    };
  }

  const blocksData = blocksRegistry[slug as BlockCategory];

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
      images: ["/images/og.png"],
    },
  };
}

// export async function generateStaticParams() {
//   return Object.keys(blocksRegistry).map((slug) => ({ slug }));
// }
function CommunityHero({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex w-full flex-col justify-center pt-6 pb-6 md:pt-10 lg:h-full lg:pb-0">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
            <span className="text-foreground/60 text-sm">{tag}</span>
          </div>
          <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 capitalize md:text-3xl xl:text-4xl dark:text-neutral-200">
            {title}
          </h1>
          <p className="text-foreground/70 dark:text-foreground/50 max-w-[260px] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ComponentPage({ params }: Props) {
  const d = await params;
  const slug = d.slug.toLocaleLowerCase();
  const BLOCK_PAGE_NAME = blockCategories.includes(
    slug as unknown as BlockCategory
  )
    ? slug
    : "";

  if (!BLOCK_PAGE_NAME) {
    return <BlocksNotFound slug={slug} />;
  }

  // Get the component dynamically based on slug
  const blocksData = blocksRegistry[slug as BlockCategory];

  if (!blocksData) {
    return <BlocksNotFound slug={slug} />;
  }

  const blockPageTitle = slug?.replace("-", " ");

  return (
    <>
      <div className="relative min-h-dvh pt-14 lg:pt-0">
        <div className="text-foreground relative">
          <div className="flex flex-col lg:flex-row">
            {/* Left side — Community hero */}
            <div className="border-foreground/6 relative hidden w-full shrink-0 overflow-clip border-b px-5 sm:px-6 lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[30%] lg:border-r lg:border-b-0 lg:px-10 xl:w-[25%]">
              <div className="hidden lg:block">
                <LineFieldBackground />
              </div>

              <h2 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 sm:mb-5 sm:text-[15px] dark:text-neutral-100">
                Blocks
                <span className="bg-foreground/15 h-px flex-1" />
              </h2>
              <CommunityHero
                tag="Blocks"
                title={blockPageTitle}
                description={`${blockPageTitle} crafted with shadcn ui and tailwindcss. Copy & paste blocks directly to your project.`}
              />
              <div className="absolute right-6 bottom-4 left-10 z-3">
                <SignatureMark compact />
              </div>
            </div>

            {/* Right side — Stats & platforms */}
            <div className="no-scrollbar relative w-full overflow-x-hidden lg:w-[70%] xl:w-[75%]">
              <div className="space-y-8 px-5 lg:p-8 lg:pt-20">
                {/* Mobile header */}
                <div className="border-foreground/6 relative -mx-5 mb-5 overflow-hidden border-b px-5 sm:-mx-6 sm:px-6 lg:hidden">
                  <LineFieldBackground />
                  <div className="relative space-y-2 py-16">
                    <div className="flex items-center gap-1.5">
                      {/* <UsersIcon className="text-foreground/60 h-4 w-4" /> */}
                      <span className="text-foreground/60 text-sm">Blocks</span>
                    </div>
                    <h1 className="text-2xl leading-tight tracking-tight text-neutral-800 capitalize md:text-3xl xl:text-4xl dark:text-neutral-200">
                      {blockPageTitle}{" "}
                    </h1>
                    <p className="text-foreground/70 dark:text-foreground/50 text-sm leading-relaxed">
                      {blockPageTitle} crafted with shadcn ui and tailwindcss.
                      Copy & paste blocks directly to your project.
                    </p>
                  </div>
                </div>

                <h2 className="mb-4 flex items-center gap-3 font-mono text-sm text-neutral-900 capitalize sm:mb-5 sm:text-[15px] dark:text-neutral-100">
                  {blockPageTitle}
                  <span className="bg-foreground/15 h-px flex-1" />
                </h2>

                <div className="space-y-20">
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
                          <StringCode c={block.code} />
                        </BlockPreview>
                      );
                    })}
                  </div>

                  {/* suggestion */}
                  <div>
                    <SuggestedBlocks exclude={BLOCK_PAGE_NAME} />
                  </div>
                </div>
              </div>
              <div className="lg:hidden">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
          <div className="w-full">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
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
                className="text-foreground mt-4 tracking-tight"
              >
                Page not found
              </Typography>
              <Typography
                as="p"
                variant="base/normal"
                className="text-muted-foreground mt-4"
              >
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </Typography>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedNotFoundLinks.map((link) => (
                <div
                  key={link.title}
                  className="bg-card hover:border-primary group relative flex flex-col gap-2 rounded-lg border p-3.5 py-1.5"
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
                      <h3 className="text-foreground font-medium">
                        {link.title}
                      </h3>

                      <ArrowRightIcon className="text-muted-foreground/30 group-hover:text-primary size-4 -rotate-45" />
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
