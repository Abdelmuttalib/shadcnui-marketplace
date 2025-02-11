import Link from "next/link";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Typography, typographyVariants } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to manage state and side effects in your functional components. Discover the benefits of using Hooks.",
    date: "2023-06-15",
    author: "Jane Doe",
    category: "React",
    imageUrl: "/placeholder.svg",
    slug: "getting-started-with-react-hooks",
  },
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is shaping the future of web development and what it means for developers.",
    date: "2023-06-10",
    author: "John Smith",
    category: "AI",
    imageUrl: "/placeholder.svg",
    slug: "future-of-ai-in-web-development",
  },
  {
    title: "Mastering CSS Grid Layout and Flexbox",
    excerpt:
      "Dive deep into CSS Grid and learn how to create complex layouts with ease. Flexbox is also covered.",
    date: "2023-06-05",
    author: "Emily Johnson",
    category: "CSS",
    imageUrl: "/placeholder.svg",
    slug: "mastering-css-grid-layout",
  },
  {
    title: "Building a Custom React Hook for State Management",
    excerpt:
      "Discover how to create a custom React hook to manage state and side effects in your functional components.",
    date: "2023-05-30",
    author: "David Lee",
    category: "React",
    imageUrl: "/placeholder.svg",
    slug: "building-a-custom-react-hook",
  },
];

export default function BlogSection() {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Typography as="h2" variant="3xl/semibold" className="mb-8">
            Latest Blog Posts
          </Typography>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  imageUrl,
  slug,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg">
      <Link href={`#`}>
        <div className="relative h-48 w-full bg-accent">
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          /> */}
          <div className="flex h-full w-full items-center justify-center">
            <div className="rounded-md border-2 p-6 text-muted-foreground">
              <ImageIcon />
            </div>
          </div>
        </div>
        <div className="p-6">
          <Badge className="mb-2">{category}</Badge>
          <Typography as="h3" variant="xl/semibold" className="mb-2">
            {title}
          </Typography>
          <Typography
            as="p"
            variant="base/normal"
            className="mb-4 text-muted-foreground"
          >
            {excerpt}
          </Typography>
          <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
            <div className="inline-flex items-center gap-2">
              <Avatar className="size-7">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${author}.png`}
                  alt={author}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Typography
                as="span"
                variant="sm/normal"
                className="text-muted-foreground"
              >
                {author}
              </Typography>
            </div>
            <time
              dateTime={date}
              className={cn(
                typographyVariants({
                  variant: "xs/normal",
                  className: "text-muted-foreground",
                })
              )}
            >
              {formatDate(date)}
            </time>
          </div>
        </div>
      </Link>
    </Card>
  );
}
