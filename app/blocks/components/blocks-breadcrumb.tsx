"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";

export default function BlocksBreadcrumb() {
  // current path items
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname?.split("/").map((item, index) => {
          // if (index === 0) {
          //   return (
          //     <BreadcrumbItem key={index}>
          //       <BreadcrumbLink href="/">Home</BreadcrumbLink>
          //     </BreadcrumbItem>
          //   );
          // }
          if (index === 1) {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
              </BreadcrumbItem>
            );
          }
          return (
            <>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href={`/blocks/${item}`}
                  className="capitalize"
                  // onClick={() => {
                  //   navigate(`/blocks/${item}`);
                  // }}
                >
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          );
        })}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
