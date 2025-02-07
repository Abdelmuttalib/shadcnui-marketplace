"use client";

import { DocsLayout } from "@/components/layout/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";

export default function Docs() {
  return (
    <DocsLayout>
      <Typography as="h1" variant="display-sm/medium">
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
      ### What do you mean by not a component library? I mean you do not install
      it as a dependency. It is not available or distributed via npm.
      <br />
      Pick the components you need. Copy and paste the code into your project
      and customize to your needs. The code is yours.
      <br />
      Use this as a reference to build your own component libraries.
    </DocsLayout>
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
            variant="md/regular"
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
          className={cn(
            "bg-overlay-on-surface-background p-6 border rounded-lg min-h-96",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
