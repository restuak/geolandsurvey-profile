"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SkeletonBlog from "@/app/blog/components/skeletonbloglist";
import Link from "next/link";

interface Post {
  title: string;
  summary: string;
  author: string;
  images: string;
  label?: string[];
  slug: string;
}

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://giftedstar-us.backendless.app/api/data/blog?sortBy=time%20desc"
      )
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Terjadi Galat:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-10 min-md:py-25 min-md:pt-10 pb-0">
      <div className="container p-10 mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-md min-md:text-xl">
            Latest Updates
          </Badge>
          <h2 className="mb-3 text-3xl min-md:text-4xl text-[#0C566D] font-bold text-pretty md:mb-4  lg:mb-6 lg:max-w-3xl uppercase">
            Blog
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Discover the latest trends, tips, and best practices in modern
            geospasial surveying
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {loading ? (
            <SkeletonBlog />
          ) : (
            posts.slice(0, 2).map((post) => (
              <Card
                key={post.slug}
                className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
              >
                <div className="aspect-16/9 w-full">
                  <a
                    href={`/blog/${post.slug}`}
                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                  >
                    <img
                      src={
                        post.images?.trim()
                          ? post.images
                          : "/assets/gl-full.png"
                      }
                      
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </a>
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold hover:underline md:text-xl">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.summary}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-foreground hover:underline"
                  >
                    Read this article about geospatial things
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        <Button
          variant="link"
          className="w-full sm:w-auto text-md min-md:text-xl"
          asChild
        >
          <a href="/blog">
            View all articles
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
