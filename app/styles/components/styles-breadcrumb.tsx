"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";

export function StylesBreadcrumb() {
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
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
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
