"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  LayoutGrid,
  LogIn,
  Home,
  FileText,
  ShoppingCart,
  Users,
  BarChart,
  Mail,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { blocksRegistry } from "@/config/data";
import BlocksBreadcrumb from "./components/blocks-breadcrumb";

const categories = [
  {
    name: "Blog Sections",
    icon: FileText,
    href: "/blocks/blog",
    image: "/images/blog-preview.jpg",
    featured: true,
  },
  {
    name: "Login & Authentication",
    icon: LogIn,
    href: "/blocks/login",
    image: "/images/login-preview.jpg",
  },
  {
    name: "Hero Sections",
    icon: Home,
    href: "/blocks/hero",
    image: "/images/hero-preview.jpg",
  },
  {
    name: "E-commerce Components",
    icon: ShoppingCart,
    href: "/blocks/ecommerce",
    image: "/images/ecommerce-preview.jpg",
  },
  {
    name: "Team Showcases",
    icon: Users,
    href: "/blocks/team",
    image: "/images/team-preview.jpg",
  },
  {
    name: "Dashboard Layouts",
    icon: BarChart,
    href: "/blocks/dashboard",
    image: "/images/dashboard-preview.jpg",
    new: true,
  },
  {
    name: "Contact Forms",
    icon: Mail,
    href: "/blocks/contact",
    image: "/images/contact-preview.jpg",
  },
  {
    name: "Page Layouts",
    icon: LayoutGrid,
    href: "/blocks/layouts",
    image: "/images/layouts-preview.jpg",
  },
];

{
  /* <div className="absolute inset-0 overflow-hidden">
<div
  className="absolute -top-1/2 -left-1/4 w-2/3 h-2/3 bg-blue-300  rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-80"
  style={{ transform: `translateY(${scrollY * 0.2}px)` }}
></div>
<div
  className="absolute -bottom-1/2 -right-1/4 w-2/3 h-2/3 bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-80"
  style={{ transform: `translateY(${scrollY * -0.2}px)` }}
></div>
</div> */
}

export default function ElegantBlockCategories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const blocksData = Object.keys(blocksRegistry).map((block) => ({
    name: block.replace("-", " "),
    href: `/blocks/${block}`,
    image: `/images/blocks/${block}-preview`,
  }));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const filteredCategories = categories.filter((category) =>
  //   category.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredBlocksData = blocksData.filter((block) =>
    block.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-r from-accent/40 to-background overflow-hidden">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="border-y px-3">
            <BlocksBreadcrumb />
          </div>
          <div className="border-y flex items-center gap-2">
            <Typography
              as={"h1"}
              variant="5xl/semibold"
              className="tracking-tighter capitalize px-3"
            >
              Discover Our Block Collection
            </Typography>
            {/* <Badge>{blocksData?.length} blocks</Badge> */}
          </div>

          <div className="border-y">
            <Typography
              as={"p"}
              variant="lg/normal"
              className="text-muted-foreground max-w-4xl px-3"
            >
              Elevate your projects with our meticulously crafted shadcn/ui
              blocks
            </Typography>
          </div>

          <div className="border-y w-full">
            <div className="max-w-md relative px-3 w-full py-2">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                type="search"
                placeholder="Search block categories..."
                className="pl-8 pr-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-20 overflow-hidden border-y px-3 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlocksData.length > 0 ? (
              filteredBlocksData.map((block, index) => (
                <Link
                  key={block.name}
                  href={block.href}
                  target="_blank"
                  // href={category.href}
                  className="group"
                >
                  <Card
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5`}
                    // className={`overflow-hidden transition-all duration-300 ${
                    //   category.featured ? "md:col-span-2 md:row-span-2" : ""
                    // } hover:shadow-lg hover:shadow-foreground/5`}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          // src={category.image || "/placeholder.svg"}
                          // src={"/images/blocks/blog-preview.jpg"}
                          src={"/images/blocks/blog-sections-dark.png"}
                          // 1919 pixels
                          // 963 pixels
                          // scale down to smaller size
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.name}
                          // layout="fill"
                          // objectFit="cover"
                          className="transition-all duration-300 ml-4 mt-11 rounded-md border group-hover:scale-110 group-hover:rounded-tl-none hidden"
                        />
                        <Image
                          src={`${block.image}-light.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.name}
                          className="transition-all duration-300 ml-4 mt-11 rounded-md border group-hover:scale-110 group-hover:rounded-tl-none block dark:hidden"
                        />
                        <Image
                          src={`${block.image}-dark.png`}
                          width={1919 / 2}
                          height={963 / 2}
                          quality={100}
                          alt={block.name}
                          className="transition-all duration-300 ml-4 mt-11 rounded-md border group-hover:scale-110 group-hover:rounded-tl-none hidden dark:block"
                        />
                        {/* <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-background to-transparent via-background h-20"></div> */}
                        <div className="absolute top-2 left-4 right-4 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold tracking-tight text-foreground capitalize">
                              {block.name}
                            </h3>
                            <Badge className="">
                              4 Blocks
                              {/* 4 Examples */}
                            </Badge>
                          </div>
                          <div className="bg-accent p-1 rounded-md hidden group-hover:block">
                            <ArrowRight className="size-4 text-muted-foreground -rotate-45" />
                          </div>
                          {/* <div className="flex items-center">
                          <category.icon className="size-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">
                            Explore blocks
                          </span>
                        </div> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <p className="w-fit px-3 py-1 text-sm text-muted-foreground bg-accent rounded-md">
                0 blocks found
              </p>
            )}
            {/* {filteredCategories.map((category, index) => (
              <Link key={category.name} href={category.href} className="group">
                <Card
                  className={`overflow-hidden transition-all duration-300 ${
                    category.featured ? "md:col-span-2 md:row-span-2" : ""
                  } hover:shadow-lg hover:shadow-foreground/5`}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={"/images/blocks/blog-sections-dark.png"}
                        width={1919 / 2}
                        height={963 / 2}
                        quality={100}
                        alt={category.name}
                        className="transition-all duration-300 ml-4 mt-11 rounded-md border group-hover:mt-10 group-hover:scale-110 group-hover:rounded-tl-none"
                      />
                      <div className="absolute top-2 left-4 right-4 flex items-center gap-2">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {category.name}
                        </h3>
                        <Badge className="">4 Blocks</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))} */}
          </div>
        </div>
      </div>
      {/* <div className="container px-4 md:px-6 relative">

        <div className="relative"></div>
      </div> */}
    </section>
  );
}

// import { Typography } from "@/components/ui/typography";
// import { blocksRegistry } from "@/config/data";
// import BlocksBreadcrumb from "./components/blocks-breadcrumb";

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function BlocksPage() {
//   const blocksData = Object.keys(blocksRegistry);

//   return (
//     <div>
//       <div className="bg-gradient-to-r from-accent/40 to-background py-20">
//         <div className="space-y-2">
//           <div className="border-y px-3">
//             <div className="-mx-2">
//               <BlocksBreadcrumb />
//             </div>
//           </div>
//           <div className="border-y flex items-center gap-2">
//             <Typography
//               as={"h2"}
//               variant="3xl/semibold"
//               className="tracking-tight capitalize px-3"
//             >
//               Blocks
//             </Typography>
//           </div>

//           <div className="border-y">
//             <Typography
//               as={"p"}
//               variant="md/normal"
//               className="text-muted-foreground max-w-4xl px-3"
//             >
//               Browse through our collection of shadcn ui components blocks. Each
//               block is a standalone component that can be used in your project.
//               Preview the blocks in different styles and see how they look
//               together.
//             </Typography>
//           </div>
//           <nav className="border-y mt-10">
//             <ul className="overflow-hidden p-2 px-3 flex flex-wrap gap-8">
//               {blocksData.map((block) => {
//                 return (
//                   <li
//                     key={block}
//                     className="relative flex items-center gap-2 group"
//                   >
//                     <Link
//                       href={`/blocks/${block}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="absolute inset-0"
//                     >
//                       <span className="sr-only">
//                         view {block}
//                         blocks
//                       </span>
//                     </Link>
//                     <Typography
//                       as="h4"
//                       variant="lg/normal"
//                       className="capitalize tracking-tight"
//                     >
//                       {block.replace("-", " ")}
//                     </Typography>
//                     <ArrowRight className="h-4 w-4 text-muted-foreground/60 -rotate-45 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }
