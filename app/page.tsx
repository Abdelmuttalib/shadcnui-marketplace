import Container from "@/components/container";
import {
  ExamplesNav,
  LandingPageLayout,
  ShowcaseIFrame,
  StyleExamplesProvider,
} from "@/components/draft";
import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="space-y-40 flex-grow h-full">
          <StyleExamplesProvider />
        </main>
        <footer className="pt-8 pb-6 border-t border-border">
          <Container className="relative">
            <div className="relative text-center">
              <h3 className="text-foreground-secondary to-black h-fit">
                shadcn ui styles, beyond Default and New York
              </h3>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}
