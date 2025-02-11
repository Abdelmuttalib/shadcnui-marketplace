"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

const blogPosts = [
  {
    title: "The Future of Web Development: AI-Assisted Coding",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we write code and build web applications.",
    date: "2023-07-05",
    readTime: "8 min",
    author: {
      name: "Sophia Chen",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "AI & Development",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "future-web-development-ai-assisted-coding",
  },
  {
    title: "Mastering TypeScript: Advanced Techniques for Large-Scale Apps",
    excerpt:
      "Dive deep into TypeScript's advanced features and learn how to leverage them in complex applications.",
    date: "2023-07-02",
    readTime: "12 min",
    author: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "TypeScript",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "mastering-typescript-advanced-techniques",
  },
  {
    title: "The Rise of Edge Computing in Web Development",
    excerpt:
      "Discover how edge computing is changing the landscape of web development and improving user experiences.",
    date: "2023-06-29",
    readTime: "10 min",
    author: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Web Architecture",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "rise-edge-computing-web-development",
  },
  {
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt:
      "Learn essential techniques and best practices for creating web applications that are truly accessible to all users.",
    date: "2023-06-26",
    readTime: "15 min",
    author: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Accessibility",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "building-accessible-web-applications-guide",
  },
  {
    title:
      "The Power of WebAssembly: Pushing the Boundaries of Web Performance",
    excerpt:
      "Explore how WebAssembly is enabling high-performance applications in the browser and changing what's possible on the web.",
    date: "2023-06-23",
    readTime: "11 min",
    author: {
      name: "Yuki Tanaka",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Web Performance",
    imageUrl: "/placeholder.svg?height=600&width=800",
    slug: "power-webassembly-web-performance",
  },
];

export default function BlogSectionPage() {
  const [visiblePosts, setVisiblePosts] = React.useState(3);

  const loadMore = () => {
    setVisiblePosts((prevVisible) =>
      Math.min(prevVisible + 3, blogPosts.length)
    );
  };

  return (
    <main>
      <section className="bg-background py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Typography
              as="h2"
              variant="5xl/semibold"
              className="mb-8 tracking-tight"
            >
              Insights for the Modern Developer
            </Typography>
            <div className="mx-auto h-1 w-24 bg-primary" />
            <Typography
              as="h2"
              variant="xl/normal"
              className="mx-auto mt-6 max-w-2xl text-muted-foreground"
            >
              Explore the latest trends, techniques, and insights in web
              development and design.
            </Typography>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(0, visiblePosts).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          {visiblePosts < blogPosts.length && (
            <div className="mt-16 text-center">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Articles
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
}: BlogCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full border bg-card px-3 py-1 text-sm font-medium text-foreground">
            {category}
          </span>
        </div>
      </Link>
      <CardContent className="p-6">
        <Link href={`#`} className="absolute inset-0">
          <span className="sr-only">Read More</span>
        </Link>
        <Typography
          as="h3"
          variant="xl/bold"
          className="mb-2 group-hover:underline group-hover:decoration-primary"
        >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="sm/normal"
          className="mb-4 line-clamp-2 text-muted-foreground"
        >
          {excerpt}
        </Typography>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`https://avatar.vercel.sh/${author.name}.png`}
                alt={author.name}
              />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <Typography as="p" variant="md/medium">
                {author.name}
              </Typography>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="mr-1 h-3 w-3" />
                <time dateTime={date}>{formatDate(date)}</time>
                <span className="mx-1">•</span>
                <Clock className="mr-1 h-3 w-3" />
                {readTime} read
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        <Link
          href={`#`}
          className="group inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
