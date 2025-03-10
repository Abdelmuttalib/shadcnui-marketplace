import { DocsLayout } from "@/components/layout/docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { ComponentCode } from "@/components/views/docs/component-code";
import { RegistryIndex } from "@/registry";
import { cn } from "@/utils/cn";

import { ComponentPreviewCode } from "./components/component-preview-code";

function DocsSection({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 pb-4")}>
      <div className="space-y-2">
        <Typography as="h2" variant="lg/medium" className="tracking-tight">
          {/* Landing Pages */}
          {title}
        </Typography>
        <Typography
          as="p"
          variant="md/normal"
          className="max-w-4xl text-muted-foreground"
        >
          {children}
        </Typography>
      </div>
    </section>
  );
}

const docsComponents = Object.keys(RegistryIndex["carbon"]);

export default function Docs() {
  return (
    <DocsLayout>
      <Typography as="h1" variant="3xl/medium">
        Introduction
      </Typography>
      <DocsSection title="Introduction" id="introduction">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </DocsSection>
      <DocsSection title="Installation" id="installation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </DocsSection>
      <DocsSection title="Components" id="components">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </DocsSection>
      <DocsSection title="Guides" id="guides">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </DocsSection>
      <div className="mt-10">
        {docsComponents.map((component) => (
          <ComponentPreviewCode
            key={component}
            id={component}
            title={component.replace("-", " ")}
            description={RegistryIndex["carbon"][component].description}
            component={component}
          >
            <ComponentCode
              style="carbon"
              component={component}
              fileName={component}
            />
          </ComponentPreviewCode>
        ))}

        <ComponentPreviewCode
          id="button"
          title="Button"
          description="button description"
          component="button"
        >
          <ComponentCode style="carbon" component="button" fileName="button" />
        </ComponentPreviewCode>

        <ComponentPreviewCode
          id="badge"
          title="Badge"
          description="badge description"
          component="badge"
        >
          <ComponentCode style="carbon" component="badge" fileName="badge" />
        </ComponentPreviewCode>

        <ComponentPreviewCode
          id="alert"
          title="Alert"
          description="alert description"
          component="alert"
        >
          <ComponentCode style="carbon" component="alert" fileName="alert" />
        </ComponentPreviewCode>

        <ComponentPreviewCode
          id="alert-dialog"
          title="Alert Dialog"
          description="alert dialog description"
          component="alert-dialog"
        >
          <ComponentCode
            style="carbon"
            component="alert-dialog"
            fileName="alert-dialog"
          />
        </ComponentPreviewCode>

        {/* <ComponentPreviewCode
          id="checkbox"
          title="Checkbox"
          description="button description"
        >
          <ComponentCode style="carbon" component="button" fileName="button" />
        </ComponentPreviewCode>

        <ComponentPreviewCode
          id="tabs"
          title="Tabs"
          description="button description"
        >
          <ComponentCode style="carbon" component="tabs" fileName="tabs" />
        </ComponentPreviewCode> */}

        {/* <ComponentCode style="carbon" component="button" fileName="button" /> */}
      </div>
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
      className={cn("flex min-h-[39rem] flex-col gap-4 pb-16 pt-20")}
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
              <TabsList className="grid w-56 w-full grid-cols-2">
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
          className={cn("min-h-96 rounded-lg border bg-card p-6", className)}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
