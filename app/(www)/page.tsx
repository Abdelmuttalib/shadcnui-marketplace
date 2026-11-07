import { HeroReadMe } from "@/components/landing/hero-readme";
import { HeroTitle } from "@/components/landing/hero-title";
import { LineFieldBackground } from "@/components/landing/line-field-bg";
import { SignatureMark } from "@/components/landing/signature-mark";
import { getCommunityStats, getContributors } from "@/lib/community-stats";

export default async function HomePage() {
  const contributors = getContributors();
  const communityStats = await getCommunityStats();

  return (
    <div id="hero" className="relative pt-[45px] lg:pt-0">
      <div className="text-foreground relative" data-v="1">
        <div className="flex flex-col lg:flex-row">
          {/* Left side — Hero title */}
          <div className="border-foreground/6 bg-background relative z-10 w-full border-b px-5 sm:px-6 lg:sticky lg:top-0 lg:h-dvh lg:w-[40%] lg:overflow-clip lg:border-r lg:border-b-0 lg:px-7">
            <LineFieldBackground />
            <HeroTitle />
            <div className="absolute right-5 bottom-4 left-5 z-[3] hidden lg:right-3 lg:left-7 lg:block">
              <SignatureMark />
            </div>
          </div>

          {/* Right side — Sign in */}
          <div className="relative z-0 w-full overflow-x-hidden lg:w-[60%]">
            <div className="flex items-start justify-center lg:items-center">
              <HeroReadMe
                contributors={contributors}
                stats={{
                  npmDownloads: communityStats.npmDownloads,
                  npmWeeklyHistory: communityStats.npmWeeklyHistory,
                  githubStars: communityStats.githubStars,
                  contributors: communityStats.contributors,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { PageContainer } from "@/components/common/page-container";
// import { PageExampleSelect } from "@/components/common/page-example-select";
// import { PageSubTitle, PageTitle } from "@/components/common/page-header";
// import { ShowcaseStylePageExamplePreview } from "@/components/common/showcase-style-page-example-preview";
// import { StyleGradientBackgroundColorComponent } from "@/components/common/style-background-color-component";
// import { StyleHeroUI } from "@/components/common/style-hero-ui";
// import { StyleSelect } from "@/components/common/style-select";
// import {
//   ThemePaletteReset,
//   ThemePaletteSelect,
// } from "@/components/common/theme-palette-select";
// import { StyleFontWrapper } from "@/components/style-font-wrapper";
// import { StylePaletteCommand } from "@/components/style-palette-command";
// import { Typography } from "@/components/ui/typography";
// import { StylesPreview } from "@/components/views/home/styles-preview";
// import { cn } from "@/lib/utils";

// export default function Home() {
//   return (
//     <>
//       <div className="flex min-h-screen flex-col">
//         <main>
//           <div
//             className={cn(
//               "relative min-h-screen w-full overflow-x-hidden pb-56"
//             )}
//           >
//             <StyleGradientBackgroundColorComponent className="absolute inset-0 w-full" />

//             <PageContainer>
//               <div className="relative grid w-full grid-cols-1 pt-16 sm:pt-20 xl:pt-28">
//                 <Typography
//                   as={"h1"}
//                   variant="6xl/semibold"
//                   className="z-10 col-start-1 row-start-1 font-[490] tracking-tighter xl:max-w-[36rem]"
//                 >
//                   shadcn ui marketplace
//                 </Typography>

//                 <Typography
//                   as="p"
//                   variant="lg/normal"
//                   className="text-muted-foreground z-10 col-start-1 row-start-2 mt-4 max-w-xl"
//                 >
//                   Discover the best shadcn ui kits and styles for modern web
//                   interfaces.
//                 </Typography>
//                 <div className="z-10 col-start-1 row-start-3 mt-6 flex w-fit flex-col gap-y-4 rounded-lg p-0.5 sm:gap-x-4 sm:gap-y-4">
//                   <StyleSelect />
//                 </div>
//                 {/* pointer-events-none  */}
//                 <StyleFontWrapper className="col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
//                   <StyleHeroUI />
//                 </StyleFontWrapper>
//               </div>
//             </PageContainer>
//           </div>

//           <LandingPageSection
//             sectionId="shadcn-ui-styles"
//             className="flex min-h-screen flex-col gap-8"
//           >
//             <PageContainer>
//               <div className="space-y-4">
//                 <PageTitle as="h2">
//                   <span className="lowercase">shadcn, </span>
//                   <span className="decoration text-foreground decoration-primary lowercase italic underline underline-offset-4">
//                     your way
//                   </span>
//                 </PageTitle>

//                 <Typography
//                   as="p"
//                   variant="lg/normal"
//                   className="text-muted-foreground"
//                 >
//                   Discover the best shadcn ui kits and styles for modern web
//                   interfaces.
//                 </Typography>
//               </div>
//             </PageContainer>
//             <PageContainer>
//               <div>
//                 <div className="flex items-end justify-between gap-4 py-2">
//                   <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//                     <div className="flex w-full flex-col gap-2 md:w-auto">
//                       <h2 className="border-input bg-accent/80 text-muted-foreground w-fit rounded-md border px-1.5 py-0.5 text-sm font-medium">
//                         Choose style
//                       </h2>
//                       <div className="w-full">
//                         <StyleSelect />
//                       </div>
//                     </div>
//                     <div className="flex w-full flex-col gap-2 md:w-auto">
//                       <h2 className="border-input bg-accent/80 text-muted-foreground w-fit rounded-md border px-1.5 py-0.5 text-sm font-medium">
//                         Choose example
//                       </h2>
//                       <PageExampleSelect />
//                     </div>
//                     <div className="flex w-full flex-col gap-2 md:w-auto">
//                       <div className="inline-flex justify-between">
//                         <div>
//                           <h2 className="border-input bg-accent/80 text-muted-foreground w-fit rounded-md border px-1.5 py-0.5 text-sm font-medium">
//                             Choose palette
//                           </h2>
//                         </div>
//                         <div>
//                           <ThemePaletteReset />
//                         </div>
//                       </div>
//                       <ThemePaletteSelect />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </PageContainer>
//             <PageContainer>
//               <div>
//                 <StylePaletteCommand />
//               </div>
//             </PageContainer>

//             <div className="relative flex h-full min-h-screen gap-8 py-2">
//               <PageContainer size="xl" className="relative">
//                 <ShowcaseStylePageExamplePreview />
//               </PageContainer>
//             </div>
//           </LandingPageSection>

//           <LandingPageSection sectionId="styles">
//             <div>
//               <div className="grid grid-cols-1 gap-12">
//                 <PageContainer>
//                   <div className="space-y-2">
//                     <PageTitle as={"h2"} className="">
//                       shadcn styles,
//                       <br /> inspired by popular design systems
//                     </PageTitle>
//                     <PageSubTitle className="max-w-2xl">
//                       <span className="text-muted-foreground">
//                         Discover custom shadcn styles and ui kits, inspired by
//                         popular design systems. Easily download all custom
//                         styled{" "}
//                         <span className="bg-accent rounded p-1 font-mono text-sm">
//                           /ui/*
//                         </span>{" "}
//                         components directly into your project.
//                       </span>
//                     </PageSubTitle>
//                   </div>
//                 </PageContainer>
//                 <PageContainer size={"full"}>
//                   <div className="grid grid-cols-1 md:grid-cols-2">
//                     <StylesPreview />
//                   </div>
//                 </PageContainer>
//               </div>
//             </div>
//           </LandingPageSection>
//         </main>
//       </div>
//     </>
//   );
// }

// function LandingPageSection({
//   sectionId,
//   children,
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"div"> & {
//   className?: string;
//   sectionId: string;
// }) {
//   return (
//     <section
//       id={sectionId}
//       className={cn("relative py-20 md:py-32", className)}
//     >
//       {children}
//     </section>
//   );
// }
