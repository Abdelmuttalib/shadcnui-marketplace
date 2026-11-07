import Image from "next/image";
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
