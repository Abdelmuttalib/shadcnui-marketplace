"use client";

import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageBreadcrumb() {
  const pathname = usePathname();

  console.log("pathname", pathname);
  // /styles

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname?.split("/").map((item, index) => {
          if (index === 0) {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href="/"
                  className="inline-flex items-center gap-2"
                >
                  <HomeIcon className="size-3.5" />
                  <span>Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          }

          if (index === pathname?.split("/").length - 1) {
            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">{item}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            );
          }

          return (
            <>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={`/${item}`} className="capitalize">
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
