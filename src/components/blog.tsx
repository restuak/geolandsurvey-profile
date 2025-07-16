import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface BlogProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Blog = ({
  tagline = "Latest Updates",
  heading = "Blog",
  description = "Discover the latest trends, tips, and best practices in modern geospasial surveying",
  buttonText = "View all articles",
  buttonUrl = "/blog",
  posts = [
    {
      id: "post-1",
      title: "Example Title Post Blog 1",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "/blog/post1",
      image: "/gl-full.png",
    },
    {
      id: "post-2",
      title: "Example Title Post Blog 2",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "/blog/post2",
      image: "/gl-full.png",
    },
    {
      id: "post-3",
      title: "Example Title Post Blog 3",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "/blog/post3",
      image: "/gl-full.png",
    },
  ],
}: BlogProps) => {
  return (
    <section className="py-10 min-md:py-25 min-md:pt-10 pb-0">
      <div className="container p-10 mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-md min-md:text-xl">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl min-md:text-4xl text-[#0C566D] font-bold text-pretty md:mb-4  lg:mb-6 lg:max-w-3xl uppercase">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button
            variant="link"
            className="w-full sm:w-auto text-md min-md:text-xl"
            asChild
          >
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
