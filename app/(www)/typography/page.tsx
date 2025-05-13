import { Check } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";
import { RichBadge } from "@/components/ui/rich-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography, TypographyProps } from "@/components/ui/typography";

const typographyVariantsList: TypographyProps["variant"][] = [
  "7xl/extrabold",
  "7xl/bold",
  "7xl/semibold",
  "7xl/medium",
  "7xl/normal",
  "6xl/extrabold",
  "6xl/bold",
  "6xl/semibold",
  "6xl/medium",
  "6xl/normal",
  "5xl/extrabold",
  "5xl/bold",
  "5xl/semibold",
  "5xl/medium",
  "5xl/normal",
  "4xl/extrabold",
  "4xl/bold",
  "4xl/semibold",
  "4xl/medium",
  "4xl/normal",
  "3xl/extrabold",
  "3xl/bold",
  "3xl/semibold",
  "3xl/medium",
  "3xl/normal",
  "2xl/extrabold",
  "2xl/bold",
  "2xl/semibold",
  "2xl/medium",
  "2xl/normal",
  "xl/extrabold",
  "xl/bold",
  "xl/semibold",
  "xl/medium",
  "xl/normal",
  "lg/extrabold",
  "lg/bold",
  "lg/semibold",
  "lg/medium",
  "lg/normal",
  "md/extrabold",
  "md/bold",
  "md/semibold",
  "md/medium",
  "md/normal",
  "base/extrabold",
  "base/bold",
  "base/semibold",
  "base/medium",
  "base/normal",
  "sm/extrabold",
  "sm/bold",
  "sm/semibold",
  "sm/medium",
  "sm/normal",
  "xs/extrabold",
  "xs/bold",
  "xs/semibold",
  "xs/medium",
  "xs/normal",
];

export default function TypographyPage() {
  // const s = Object.keys(typographyVariants);
  // console.log(s);

  return (
    <div className="py-20">
      <div className="space-y-8">
        <div>
          <PageContainer>
            <PageHeader
              title="Typography"
              description="A collection of typography styles for your web applications."
            />
          </PageContainer>
        </div>
        <div>
          <PageContainer>
            <div className="grid grid-cols-1 gap-12">
              <div className="">
                <div>
                  <div>
                    <Tabs defaultValue="preview">
                      <TabsList className="">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                      </TabsList>

                      <TabsContent value="preview">
                        <ScrollArea className="relative h-[30rem]">
                          <div className="absolute left-0 right-0 top-0 z-10 h-14 w-full rounded-t-md bg-gradient-to-b from-accent/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 z-10 h-14 w-full rounded-b-md bg-gradient-to-t from-accent/60 to-transparent"></div>
                          <div className="rounded-md bg-card p-4 py-8">
                            <div className="flex flex-col gap-8">
                              {typographyVariantsList.map((variant) => (
                                <div
                                  key={variant}
                                  className="flex flex-col gap-2"
                                >
                                  <div className="flex flex-col gap-2">
                                    <div>
                                      <RichBadge
                                        variant={"neutral"}
                                        className="text-sm"
                                      >
                                        {variant}
                                        {/* {variant.split("/")[0]} */}
                                      </RichBadge>
                                    </div>
                                    <Typography
                                      as={"p"}
                                      variant={variant}
                                      className="text-foreground"
                                    >
                                      The quick brown fox jumps over the lazy
                                      dog.
                                    </Typography>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="code">
                        <div>
                          <StringCode c={typographyComponentCode} />
                          {/* <pre className="rounded-lg bg-accent/60">
                        <code className="language-tsx">
                          {typographyComponentCode}
                        </code>
                      </pre> */}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="prose max-w-none space-y-10 py-10">
                    <div className="space-y-8">
                      <Typography
                        as="h2"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          ✨
                        </span>{" "}
                        Typography Component
                      </Typography>
                      <p className="text-foreground/70">
                        The <code>Typography</code> component provides a
                        consistent way to apply text styles across your
                        application using a combination of TailwindCSS utility
                        classes and variant-driven props. It supports responsive
                        font sizing and weight control with a simple API.
                      </p>
                      <div className="space-y-4">
                        <ul className="flex flex-wrap gap-3 text-foreground/70">
                          <li className="flex items-center gap-2">
                            <RichBadge
                              variant="green"
                              className="space-x-2 rounded-md px-1 py-1 text-sm"
                            >
                              <Check className="size-4" />
                              <span>
                                Supports all Tailwind typography sizes (
                                <code>xs</code> to <code>7xl</code>)
                              </span>
                            </RichBadge>
                          </li>
                          <li className="flex items-center gap-2">
                            <RichBadge
                              variant="green"
                              className="space-x-2 rounded-md px-1 py-1 text-sm"
                            >
                              <Check className="size-4" />
                              <span>
                                Font weight variants (<code>normal</code> to{" "}
                                <code>extrabold</code>)
                              </span>
                            </RichBadge>
                          </li>
                          <li className="flex items-center gap-2">
                            <RichBadge
                              variant="green"
                              className="space-x-2 rounded-md px-1 py-1 text-sm"
                            >
                              <Check className="size-4" />
                              <span>
                                Responsive scaling built in{" "}
                                <code>(sm, md, etc.)</code>
                              </span>
                            </RichBadge>
                          </li>

                          <li className="flex items-center gap-2">
                            <RichBadge
                              variant="green"
                              className="space-x-2 rounded-md px-1 py-1 text-sm"
                            >
                              <Check className="size-4" />
                              <span>
                                Flexible <code>as</code> prop to render any HTML
                                element
                              </span>
                            </RichBadge>
                          </li>

                          <li className="flex items-center gap-2">
                            <RichBadge
                              variant="green"
                              className="space-x-2 rounded-md px-1 py-1 text-sm"
                            >
                              <Check className="size-4" />
                              <span>
                                Built using{" "}
                                <code>class-variance-authority</code> and{" "}
                                <code>cn()</code>
                              </span>
                            </RichBadge>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Typography
                        as="h3"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          🧩
                        </span>{" "}
                        Usage
                      </Typography>
                      <pre className="rounded-lg bg-accent/60">
                        <code className="language-tsx">
                          {`<Typography variant="2xl/semibold" as="h1">
  Elegant Headings
</Typography>
<Typography variant="base/normal">
  This is body text using the base font size and normal weight.
</Typography>
<Typography variant="sm/extrabold" as="span">
  Small but bold!
</Typography>`}
                        </code>
                      </pre>
                    </div>

                    <div className="space-y-4">
                      <Typography
                        as="h3"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          🧪
                        </span>{" "}
                        Variants
                      </Typography>
                      <p className="text-foreground/70">
                        You can control the text size and weight using the{" "}
                        <code>variant</code> prop. It uses a string format:{" "}
                        <code>&lt;fontSize&gt;/&lt;fontWeight&gt;</code> (e.g.{" "}
                        <code>&quot;xl/bold&quot;</code>,
                        <code>&quot;sm/medium&quot;</code>).
                      </p>

                      <div className="mt-4 overflow-x-auto rounded-lg border">
                        <table className="min-w-full text-left text-sm">
                          <thead className="bg-accent">
                            <tr>
                              <th className="whitespace-nowrap px-4 py-2">
                                Font Size
                              </th>
                              <th className="whitespace-nowrap px-4 py-2">
                                Variant Example
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-accent/40">
                            <tr className="">
                              <td className="px-4 py-3">xs</td>
                              <td className="px-4 py-3">
                                <code className="mr-1 rounded border bg-accent px-1 py-0.5 italic">
                                  variant=&quot;xs/bold&quot;
                                </code>
                                → text-xs font-bold
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">base</td>
                              <td className="px-4 py-3">
                                <code className="mr-1 rounded border bg-accent px-1 py-0.5 italic">
                                  variant=&quot;base/medium&quot;
                                </code>
                                → text-sm font-medium
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">4xl</td>
                              <td className="px-4 py-3">
                                <code className="mr-1 rounded border bg-accent px-1 py-0.5 italic">
                                  variant=&quot;4xl/semibold&quot;
                                </code>
                                → text-2xl font-semibold
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3">7xl</td>
                              <td className="px-4 py-3">
                                <code className="mr-1 rounded border bg-accent px-1 py-0.5 italic">
                                  variant=&quot;7xl/extrabold&quot;
                                </code>
                                → text-5xl sm:text-6xl md:text-7xl
                                font-extrabold
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Typography
                        as="h3"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          🧱
                        </span>{" "}
                        Props
                      </Typography>
                      <table className="mt-4 min-w-full overflow-hidden rounded-lg border text-left text-sm">
                        <thead className="bg-accent">
                          <tr>
                            <th className="px-4 py-3">Prop</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-accent/40">
                          <tr>
                            <td className="px-4 py-3">variant</td>
                            <td className="px-4 py-3">
                              <code className="rounded border bg-accent px-1 py-0.5 italic">
                                &quot;xs/normal&quot; | &quot;2xl/bold&quot;
                              </code>
                            </td>
                            <td className="px-4 py-3">
                              Controls font size and weight
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">as</td>
                            <td className="px-4 py-3">
                              <code className="rounded border bg-accent px-1 py-0.5 italic">
                                React.ElementType
                              </code>
                            </td>
                            <td className="px-4 py-3">
                              Element to render (e.g. p, h2, span)
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">className</td>
                            <td className="px-4 py-3">
                              <code className="rounded border bg-accent px-1 py-0.5 italic">
                                string
                              </code>
                            </td>
                            <td className="px-4 py-3">
                              Additional classes to merge
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3">...props</td>
                            <td className="px-4 py-3">
                              <code className="rounded border bg-accent px-1 py-0.5 italic">
                                HTMLAttributes
                              </code>
                            </td>
                            <td className="px-4 py-3">All valid HTML props</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="space-y-4">
                      <Typography
                        as="h3"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          🔍
                        </span>{" "}
                        Example Showcase
                      </Typography>
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2 rounded-md border bg-card p-4">
                          <Typography variant="xl/bold">
                            Typography: xl/bold
                          </Typography>
                          {/* <code className="mt-1 block w-fit rounded border bg-accent px-1 py-0.5 text-xs">
                            &lt;Typography variant="xl/bold" /&gt;
                          </code> */}
                          <StringCode
                            c={`<Typography variant="xl/bold" />`}
                            disableCopyButton
                          />
                        </div>
                        <div className="space-y-2 rounded-md border bg-card p-4">
                          <Typography variant="4xl/normal">
                            Typography: 4xl/normal
                          </Typography>
                          {/* <code className="mt-1 block w-fit rounded border bg-accent px-1 py-0.5 text-xs">
                            &lt;Typography variant="4xl/normal" /&gt;
                          </code> */}
                          <StringCode
                            c={`<Typography variant="4xl/normal" />`}
                            disableCopyButton
                          />
                        </div>
                        <div className="space-y-4 rounded-md border bg-card p-4">
                          <Typography variant="sm/extrabold">
                            Typography: sm/extrabold
                          </Typography>
                          {/* <code className="mt-1 block w-fit rounded border bg-accent px-1 py-0.5 text-xs">
                            &lt;Typography variant="sm/extrabold" /&gt;
                          </code> */}
                          <StringCode
                            c={`<Typography variant="sm/extrabold" />`}
                            disableCopyButton
                          />
                        </div>
                        <div className="space-y-4 rounded-md border bg-card p-4">
                          <Typography variant="2xl/medium" as="h2">
                            Typography: 2xl/medium as h2
                          </Typography>
                          {/* <code className="mt-1 block w-fit rounded border bg-accent/70 px-1 py-0.5 text-sm">
                            &lt;Typography variant="2xl/medium" as="h2" /&gt;
                          </code> */}
                          <StringCode
                            c={`<Typography variant="2xl/medium" as="h2" />`}
                            disableCopyButton
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Typography
                        as="h3"
                        variant="xl/semibold"
                        className="tracking-tight"
                      >
                        <span className="mr-1 rounded-md border bg-accent p-0.5 text-base">
                          💡
                        </span>{" "}
                        Design Tip
                      </Typography>
                      <p>
                        Use{" "}
                        <code className="rounded bg-accent px-1 py-0.5">
                          Typography
                        </code>{" "}
                        as your default text component to ensure your site has{" "}
                        <strong>
                          consistent spacing, font sizes, and responsive
                          behavior
                        </strong>
                        . No need to replicate the same classes over and over
                        again.
                        {/* memorize Tailwind classes for every
                        paragraph or heading! */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>
    </div>
  );
}

import { StringCode } from "@/components/common/string-code";
import { ScrollArea } from "@/components/ui/scroll-area";

const typographyComponentCode = `
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

type TypographyFontSize =
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

type TypographyFontWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

// extend type of props to include html attributes for the element
interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  variant?: \`\${TypographyFontSize}/\${TypographyFontWeight}\`;
}

const typographyVariants = cva("font-normal text-foreground", {
  variants: {
    variant: {
      // xs
      "xs/normal": "text-xs font-normal",
      "xs/medium": "text-xs font-medium",
      "xs/semibold": "text-xs font-semibold",
      "xs/bold": "text-xs font-bold",
      "xs/extrabold": "text-xs font-extrabold",

      // sm
      "sm/normal": "text-xs font-normal sm:text-sm",
      "sm/medium": "text-xs font-medium sm:text-sm",
      "sm/semibold": "text-xs font-semibold sm:text-sm",
      "sm/bold": "text-xs font-bold sm:text-sm",
      "sm/extrabold": "text-xs font-extrabold sm:text-sm",

      // base
      "base/normal": "text-sm font-normal sm:text-md",
      "base/medium": "text-sm font-medium sm:text-md",
      "base/semibold": "text-sm font-semibold sm:text-md",
      "base/bold": "text-sm font-bold sm:text-md",
      "base/extrabold": "text-sm font-extrabold sm:text-md",

      // md
      "md/normal": "text-sm font-normal md:text-md",
      "md/medium": "text-sm font-medium md:text-md",
      "md/semibold": "text-sm font-semibold md:text-md",
      "md/bold": "text-sm font-bold md:text-md",
      "md/extrabold": "text-sm font-extrabold md:text-md",

      // lg
      "lg/normal": "text-md font-normal md:text-lg",
      "lg/medium": "text-md font-medium md:text-lg",
      "lg/semibold": "text-md font-semibold md:text-lg",
      "lg/bold": "text-md font-bold md:text-lg",
      "lg/extrabold": "text-md font-extrabold md:text-lg",

      // xl
      "xl/normal": "text-lg font-normal md:text-xl",
      "xl/medium": "text-lg font-medium md:text-xl",
      "xl/semibold": "text-lg font-semibold md:text-xl",
      "xl/bold": "text-lg font-bold md:text-xl",
      "xl/extrabold": "text-lg font-extrabold md:text-xl",

      // 2xl
      "2xl/normal": "text-lg font-normal sm:text-xl md:text-2xl",
      "2xl/medium": "text-lg font-medium sm:text-xl md:text-2xl",
      "2xl/semibold": "text-lg font-semibold sm:text-xl md:text-2xl",
      "2xl/bold": "text-lg font-bold sm:text-xl md:text-2xl",
      "2xl/extrabold": "text-lg font-extrabold sm:text-xl md:text-2xl",

      // 3xl
      "3xl/normal": "text-xl font-normal sm:text-2xl md:text-3xl",
      "3xl/medium": "text-xl font-medium sm:text-2xl md:text-3xl",
      "3xl/semibold": "text-xl font-semibold sm:text-2xl md:text-3xl",
      "3xl/bold": "text-xl font-bold sm:text-2xl md:text-3xl",
      "3xl/extrabold": "text-xl font-extrabold sm:text-2xl md:text-3xl",

      // 4xl
      "4xl/normal": "text-2xl font-normal sm:text-3xl md:text-4xl",
      "4xl/medium": "text-2xl font-medium sm:text-3xl md:text-4xl",
      "4xl/semibold": "text-2xl font-semibold sm:text-3xl md:text-4xl",
      "4xl/bold": "text-2xl font-bold sm:text-3xl md:text-4xl",
      "4xl/extrabold": "text-2xl font-extrabold sm:text-3xl md:text-4xl",

      // 5xl
      "5xl/normal": "text-3xl font-normal sm:text-4xl md:text-5xl",
      "5xl/medium": "text-3xl font-medium sm:text-4xl md:text-5xl",
      "5xl/semibold": "text-3xl font-semibold sm:text-4xl md:text-5xl",
      "5xl/bold": "text-3xl font-bold sm:text-4xl md:text-5xl",
      "5xl/extrabold": "text-3xl font-extrabold sm:text-4xl md:text-5xl",

      // 6xl
      "6xl/normal": "text-4xl font-normal sm:text-5xl md:text-6xl",
      "6xl/medium": "text-4xl font-medium sm:text-5xl md:text-6xl",
      "6xl/semibold": "text-4xl font-semibold sm:text-5xl md:text-6xl",
      "6xl/bold": "text-4xl font-bold sm:text-5xl md:text-6xl",
      "6xl/extrabold": "text-4xl font-extrabold sm:text-5xl md:text-6xl",

      // 7xl
      "7xl/normal": "text-5xl font-normal sm:text-6xl md:text-7xl",
      "7xl/medium": "text-5xl font-medium sm:text-6xl md:text-7xl",
      "7xl/semibold": "text-5xl font-semibold sm:text-6xl md:text-7xl",
      "7xl/bold": "text-5xl font-bold sm:text-6xl md:text-7xl",
      "7xl/extrabold": "text-5xl font-extrabold sm:text-6xl md:text-7xl",
    },
  },
  defaultVariants: {
    variant: "md/normal",
  },
});

function Typography({
  as = "p",
  variant = "base/normal",
  className,
  ...props
}: TypographyProps) {
  const Comp = as;

  return (
    <Comp
      className={cn("text-balance", typographyVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Typography, type TypographyProps, typographyVariants };

`;
