"use client";

import React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "The Essence of Minimalist Design in Modern Web Development",
    date: "2023-07-15",
    category: "Design",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "essence-minimalist-design-modern-web-development",
  },
  {
    title: "Functional Programming Paradigms in JavaScript",
    date: "2023-07-12",
    category: "JavaScript",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "functional-programming-paradigms-javascript",
  },
  {
    title: "The Role of Typography in User Experience Design",
    date: "2023-07-09",
    category: "UX Design",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "role-typography-user-experience-design",
  },
  {
    title: "Exploring the Potential of WebGPU for High-Performance Graphics",
    date: "2023-07-06",
    category: "Web Graphics",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "exploring-potential-webgpu-high-performance-graphics",
  },
  {
    title: "Building Scalable APIs with GraphQL and Node.js",
    date: "2023-07-03",
    category: "Backend",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "building-scalable-apis-graphql-nodejs",
  },
  {
    title: "The Essence of Minimalist Design in Modern Web Development",
    date: "2023-07-15",
    category: "Design",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "essence-minimalist-design-modern-web-development",
  },
];

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function BlogSectionPage() {
  return (
    <main>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Typography
              as="h2"
              variant="3xl/normal"
              className="mb-4 tracking-tight"
            >
              Latest Articles
            </Typography>
            <div className="mx-auto h-1 w-24 bg-primary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export function BlogCard({
  title,
  date,
  category,
  imageUrl,
  slug,
}: BlogCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-accent">
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          /> */}
        </div>
        <CardContent className="space-y-4 p-6">
          <Badge>{category}</Badge>
          <Typography as="h3" variant="xl/semibold" className="tracking-tight">
            {title}
          </Typography>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={date}>{formatDate(date)}</time>
            <div className="flex items-center text-primary">
              <Typography
                as="span"
                variant="sm/medium"
                className="mr-2 text-inherit"
              >
                Read
              </Typography>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
