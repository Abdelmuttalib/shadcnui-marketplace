import { DocsLayout } from "@/components/layout/docs";
import ThemeSwitcher from "@/components/theme-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { ComponentCode } from "@/components/views/docs/component-code";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentPreviewCode } from "./components/component-preview-code";

function PageLayout({ children }: { children?: React.ReactNode }) {
  // const { style, setStyle, stylePath, setStylePath } = useStyle();

  return (
    <div className="relative overflow-y-hidden">
      <div className="relative flex flex-col bg-background z-20">
        <header className="absolute top-0 left-0 right-0 z-20 flex h-16 items-center border-b bg-background/[0.7] backdrop-blur-sm">
          <nav className="sm:container sm:mx-auto flex items-center justify-between gap-2 px-4 w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md bg-accent/60 px-2 py-0.5 text-xl font-medium text-foreground"
              >
                shadcn <span className="italic text-primary">styles</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="hidden sm:block">
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </header>
        <div className="mx-auto flex max-w-screen-2xl w-full sm:px-4">
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
          <div className="relative grid flex-1 gap-72 pb-24 md:pb-40 bg-gradient-to-r from-accent/40 to-background">
            {children}
          </div>
          <div className="min-h-screen hidden sm:block w-6 border-x bg-[image:repeating-linear-gradient(315deg,oklch(var(--border))_0,_oklch(var(--border))_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8 lg:w-12" />
        </div>
      </div>
    </div>
  );
}

export default function Docs() {
  return (
    <PageLayout>
      <DocsLayout>
        <Typography as="h1" variant="3xl/medium">
          Introduction
        </Typography>
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
        <br />
        {/* {Object.keys(siteConfig.paths.components).map((component) => (
        <Section
          key={component}
          id={component}
          title={component.replace("-", " ")}
          description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
          className="flex gap-4"
        >
          <Button>Default</Button>
          <Button>Default</Button>
          <Button>Default</Button>
        </Section>
      ))} */}
        **This is NOT a component library.** It&apos;s a collection of re-usable
        components that you can copy and paste into your apps.
        <br />
        ### What do you mean by not a component library? I mean you do not
        install it as a dependency. It is not available or distributed via npm.
        <br />
        Pick the components you need. Copy and paste the code into your project
        and customize to your needs. The code is yours.
        <br />
        Use this as a reference to build your own component libraries.
        <div className="mt-10">
          <ComponentPreviewCode
            id="button"
            title="Button"
            description="button description"
          >
            <ComponentCode
              style="carbon"
              component="button"
              fileName="button"
            />
          </ComponentPreviewCode>

          <ComponentPreviewCode
            id="checkbox"
            title="Checkbox"
            description="button description"
          >
            <ComponentCode
              style="carbon"
              component="button"
              fileName="button"
            />
          </ComponentPreviewCode>

          <ComponentPreviewCode
            id="tabs"
            title="Tabs"
            description="button description"
          >
            <ComponentCode style="carbon" component="tabs" fileName="tabs" />
          </ComponentPreviewCode>

          {/* <ComponentCode style="carbon" component="button" fileName="button" /> */}
        </div>
      </DocsLayout>
    </PageLayout>
  );
}

function Section({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("pt-20 pb-16 flex flex-col gap-4 min-h-[39rem]")}
    >
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Typography as="h2" variant="xl/semibold" className="capitalize">
            {title}
          </Typography>
          <Typography
            as="p"
            variant="md/normal"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
          <div className="pt-2">
            <Tabs defaultValue="React" className="max-w-fit">
              <TabsList className="grid w-full grid-cols-2 w-56">
                <TabsTrigger value="React" title="React">
                  React
                </TabsTrigger>
                <TabsTrigger value="HTML" title="HTML">
                  HTML
                </TabsTrigger>
              </TabsList>

              <TabsContent value="React">
                <div className="relative w-full">
                  <iframe src="/" height={960}>
                    {/* <Example1 /> */}
                  </iframe>
                </div>
              </TabsContent>
              <TabsContent value="HTML">
                {/* <Code style="default" /> */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div
          className={cn("bg-card p-6 border rounded-lg min-h-96", className)}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
