import { HeroReadMe } from "@/components/landing/hero-readme";
import { HeroTitle } from "@/components/landing/hero-title";
import { LineFieldBackground } from "@/components/landing/line-field-bg";
import { SignatureMark } from "@/components/landing/signature-mark";

export default async function HomePage() {
  return (
    <div id="hero" className="relative pt-[45px] lg:pt-0">
      <div className="text-foreground relative" data-v="1">
        <div className="flex flex-col">
          {/* Left side — Hero title */}
          <div className="border-foreground/6 bg-background relative z-10 w-full px-5 sm:px-6">
            <LineFieldBackground />
            <HeroTitle />
            <div className="absolute right-5 bottom-4 left-5 z-3 hidden lg:right-3 lg:left-7 lg:block">
              <SignatureMark compact />
            </div>
          </div>

          {/* Right side — Sign in */}
          <div className="relative z-0 w-full overflow-x-hidden">
            <div className="flex items-start justify-center">
              <HeroReadMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
