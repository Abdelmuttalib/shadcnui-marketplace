import { Search } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/common/page-container";
import { ThemeToggle } from "@/components/common/theme";
import { Typography } from "@/components/ui/typography";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

type ColorVariant =
  | "milktea"
  | "darkermilktea"
  | "redoven"
  | "midbrown"
  | "olivegreen"
  | "brown"
  | "darkbrown";

function getColorVariant(colorVariant: ColorVariant = "milktea") {
  switch (colorVariant) {
    case "milktea":
      return "#E5D8BE";
    case "darkermilktea":
      return "#736C4E";
    case "redoven":
      return "#7A4F41";
    case "midbrown":
      return "#A08967";
    case "olivegreen":
      // #7e8f68d1
      return "#7e8f68d1";
    // return "#7e8f68";
    case "brown":
      return "#342415";
    case "darkbrown":
      return "#1E1E1C";
    default:
      return "#E5D8BE";
  }
}

function HCard({
  colorVariant,
  className,
  containerClassName,
  children,
  ...props
}: {
  colorVariant: ColorVariant;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "h-fit rounded-lg border border-[#85755F] p-2",
        containerClassName
      )}
    >
      <div
        style={{
          backgroundColor: getColorVariant(colorVariant),
        }}
        className={cn("rounded-md p-6 text-[#1E1E1C] opacity-75", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

function HTag({
  colorVariant,
  className,
  ...props
}: {
  colorVariant: ColorVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      style={{
        border: `1px solid ${getColorVariant(colorVariant)}`,
        // borderColor: getColorVariant(colorVariant),
        color: getColorVariant(colorVariant),
      }}
      className={cn(
        "rounded-md border px-2 py-1 text-lg font-medium",
        className
      )}
      {...props}
    >
      {props.children}
    </span>
  );
}

export default function TestPage() {
  return (
    <div className="grid gap-44 p-6">
      <div className="relative">
        <PageContainer size={"xl"} className="relative">
          <nav className="sticky top-0 z-10 flex justify-between space-x-4 rounded-lg border border-[#85755F] p-4 px-8">
            <div className="flex items-center gap-4">
              <h6 className="text-xl tracking-tight">
                {/* د. الأميرة جواهر بنت عبدالمحسن */}
                shadcn marketplace
              </h6>

              {/* <h6 className="text-2xl font-bold">جواهر نجد</h6> */}
            </div>
            <ul className="flex items-center gap-4 py-2">
              {siteConfig.mainNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded-full border border-[#85755F] px-4 py-2 text-sm text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <ThemeToggle />
                {/* <p className="text-[#E5D8BE]/80">English</p>
                <svg
                  className="h-4 w-4 text-[#E5D8BE]/80"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                >
                  <g
                    id="Group_20"
                    data-name="Group 20"
                    transform="translate(-28.12 -28.074)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M41.118-65.525a6.5,6.5,0,0,0-1.935-4.524,6.518,6.518,0,0,0-4.554-1.877,6.512,6.512,0,0,0-5.637,3.25,6.493,6.493,0,0,0,0,6.5,6.512,6.512,0,0,0,5.637,3.25,6.522,6.522,0,0,0,4.533-1.858,6.5,6.5,0,0,0,1.954-4.487.815.815,0,0,0,0-.15.436.436,0,0,0,0-.1Zm-.868.1c-.1.228-.856.561-2.187.8.015-.262.028-.53.028-.8A9.143,9.143,0,0,0,36.7-70.648h0a5.644,5.644,0,0,1,2.572,2.068,5.634,5.634,0,0,1,.972,3.151Zm-5.624,5.616c-1.016,0-2.083-1.473-2.461-3.8a24.029,24.029,0,0,0,2.465.131,24.034,24.034,0,0,0,2.466-.131c-.388,2.34-1.456,3.805-2.468,3.812Zm0-4.545h0a21.633,21.633,0,0,1-2.568-.146c-.026-.311-.041-.624-.041-.935,0-3.363,1.346-5.616,2.605-5.616s2.6,2.264,2.6,5.616c0,.311-.015.624-.041.935a21.6,21.6,0,0,1-2.566.168Zm-2.09-6.3a9.189,9.189,0,0,0-1.39,5.222,7.653,7.653,0,0,0,.028.8c-1.344-.24-2.109-.58-2.187-.8v-.044h0A5.61,5.61,0,0,1,29.97-68.6a5.63,5.63,0,0,1,2.561-2.046ZM29.1-64.322h0a8.425,8.425,0,0,0,2.159.611A7.969,7.969,0,0,0,32.531-60.2a5.645,5.645,0,0,1-3.438-4.115Zm7.623,4.1h0a7.992,7.992,0,0,0,1.259-3.488,8.52,8.52,0,0,0,2.153-.583,5.647,5.647,0,0,1-3.418,4.084Z"
                      transform="translate(0 100)"
                      fill="currentColor"
                    />
                  </g>
                </svg> */}
              </div>
              <div className="block text-[#E5D8BE]/60">|</div>
              <div>
                <Search className="h-6 w-6 text-[#E5D8BE]/80" />
              </div>
            </div>
          </nav>
        </PageContainer>
      </div>
      <div>
        <div className="w-fit">
          <HCard
            colorVariant="milktea"
            className="h-fit w-fit text-[#1E1E1C] opacity-80"
          >
            {/* <div>
                <HTag colorVariant="darkbrown">الأميرة الدكتورة</HTag>
              </div> */}
            <div className="flex h-full max-w-fit flex-col gap-8">
              <Typography
                as="span"
                variant="6xl/bold"
                className="w-fit text-[#342415]"
              >
                Styles
              </Typography>
            </div>
          </HCard>
        </div>
      </div>
    </div>
  );
}
