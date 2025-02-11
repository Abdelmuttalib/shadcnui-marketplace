"use client";

import React from "react";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI-driven design to WebAssembly and beyond.",
    date: "2023-06-28",
    readTime: "8 min",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Web Development",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "future-web-development-trends-2023",
  },
  {
    title: "Mastering React Hooks: Advanced Techniques and Best Practices",
    excerpt:
      "Take your React skills to the next level with in-depth exploration of hooks, custom hook creation, and optimization strategies.",
    date: "2023-06-25",
    readTime: "12 min",
    author: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "React",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "mastering-react-hooks-advanced-techniques",
  },
  {
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt:
      "Learn how to design, implement, and deploy robust microservices architectures using Node.js and containerization with Docker.",
    date: "2023-06-22",
    readTime: "15 min",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Backend",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "scalable-microservices-nodejs-docker",
  },
  {
    title: "Optimizing Web Performance: Strategies for Lightning-Fast Websites",
    excerpt:
      "Discover proven techniques to enhance your website's speed and performance, from code optimization to advanced caching strategies.",
    date: "2023-06-19",
    readTime: "10 min",
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Performance",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "optimizing-web-performance-fast-websites",
  },
  {
    title: "Demystifying GraphQL: A Comprehensive Guide for REST Developers",
    excerpt:
      "Bridge the gap between REST and GraphQL with this in-depth guide, covering schema design, resolvers, and real-world implementation strategies.",
    date: "2023-06-16",
    readTime: "14 min",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "APIs",
    imageUrl: "/placeholder.svg?height=400&width=600",
    slug: "demystifying-graphql-guide-for-rest-developers",
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
  const [visiblePosts, setVisiblePosts] = React.useState(3);

  const loadMore = () => {
    setVisiblePosts((prevVisible) =>
      Math.min(prevVisible + 3, blogPosts.length)
    );
  };

  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Typography
            as="h2"
            variant="4xl/bold"
            className="mb-2 tracking-tight"
          >
            Latest from Our Blog
          </Typography>
          <Typography
            as="p"
            variant="xl/normal"
            className="mb-8 text-muted-foreground"
          >
            Stay updated with the newest design and development stories, case
            studies, and insights.
          </Typography>

          <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogCard key={post.slug} {...post} featured={index === 0} />
            ))}
          </div>
          {visiblePosts < blogPosts.length && (
            <div className="text-center">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  imageUrl: string;
  slug: string;
  featured?: boolean;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageUrl,
  slug,
  featured = false,
}: BlogCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg",
        {
          "md:col-span-2": featured,
        }
      )}
    >
      <Link href={`#`} className="flex h-full flex-col">
        <div
          className={cn("relative", {
            "h-64 md:h-96": featured,
            "h-48": !featured,
          })}
        >
          {/* blog image */}
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

          <span className="absolute bottom-4 left-4 rounded-full bg-card px-3 py-1 text-sm font-medium text-foreground">
            {category}
          </span>
        </div>
        <CardContent className="flex flex-1 flex-col justify-between p-6">
          <div>
            <Typography
              as="h3"
              variant={featured ? "3xl/semibold" : "xl/semibold"}
              className="mb-2 font-semibold tracking-tight text-foreground group-hover:underline group-hover:decoration-primary"
            >
              {title}
            </Typography>
            <Typography
              as="p"
              variant={featured ? "lg/normal" : "base/normal"}
              className="text-muted-foreground"
            >
              {excerpt}
            </Typography>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="mb-4 flex items-center">
              <Avatar className="size-8">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${author.name}.png`}
                  alt={author.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <Typography as="p" variant="sm/medium">
                  {author.name}
                </Typography>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <time dateTime={date}>{formatDate(date)}</time>
                  <span className="mx-1">•</span>
                  <Clock className="mr-1 h-3 w-3" />
                  {readTime} read
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden 2xl:flex">
              <Button size="sm" variant="ghost">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
