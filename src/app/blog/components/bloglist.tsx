"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import SkeletonBlog from "./skeletonbloglist";

interface Post {
  title: string;
  summary: string;
  author: string;
  time: string;
  images: string;
  label: string;
  slug: string;
}

export default function BlogList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://giftedstar-us.backendless.app/api/data/blog?sortBy=time%20asc"
        );
        setPosts(res.data);
      } catch (err) {
        console.error("Terjadi Galat:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-10 pt-0 min-md:py-25 bg-neutral-50 min-h-screen">
      <div className="container p-10 pt-0 flex flex-col gap-16 justify-center items-center mx-auto">
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {!loading && posts.length === 0 && (
            <p className="text-muted-foreground">Belum ada postingan blog.</p>
          )}
          {loading ? (
            <>
              <SkeletonBlog />
            </>
          ) : (
            posts.map((post) => (
              <Card
                key={post.slug}
                className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
              >
                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                  <div className="sm:col-span-5">
                    <div className="mb-4 md:mb-6">
                      <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                        {post.label}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                      <a
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-4 text-muted-foreground md:mt-5">
                      {post.summary}
                    </p>
                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                      <span className="text-muted-foreground">
                        {post.author}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {new Date(post.time).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center space-x-2 md:mt-8">
                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-semibold hover:underline md:text-base"
                      >
                        <span>Read more</span>
                        <ArrowRight className="ml-2 size-4 transition-transform" />
                      </a>
                    </div>
                  </div>
                  <div className="order-first sm:order-last sm:col-span-5">
                    <a href={`/blog/${post.slug}`} className="block">
                      <div className="rounded-lg border border-border overflow-hidden">
                        <img
                          key={post.slug}
                          src={post.images}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-auto object-cover will-change-transform [backface-visibility:hidden]"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
