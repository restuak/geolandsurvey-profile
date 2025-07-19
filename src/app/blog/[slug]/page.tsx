"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { formatPlainTextToHTML } from "@/lib/utils";

interface Blog {
  title: string;
  slug: string;
  time?: string;
  author?: string;
  images?: string;
  content?: string;
}

export default function BlogPage() {
  const { slug } = useParams() as { slug: string };
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const encodedSlug = encodeURIComponent(`slug='${slug}'`);

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://giftedstar-us.backendless.app/api/data/blog?where=${encodedSlug}`
        );
        const data: Blog[] = await res.json();


        const blogWithFallback = data[0]
          ? {
              ...data[0],
              images: data[0].images?.trim() ? data[0].images : "/assets/gl-full.png",
            }
          : null;

        setBlog(blogWithFallback);
      } catch (e) {
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  const formattedDate = blog?.time
    ? new Date(blog.time).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Tanggal tidak tersedia";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Sorry, You Can Read Other Article
          </h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => router.push("/blog")}
          >
            Back to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 md:px-8 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/3 space-y-6">
            <button
              onClick={() => router.push("/blog")}
              className="text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Blog List
            </button>

            <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">{blog.author || "Anonim"}</p>
                <p className="text-sm text-muted-foreground">{formattedDate}</p>
              </div>
            </div>
          </aside>

          <article className="lg:w-2/3 space-y-8 text-base leading-relaxed sm:text-lg lg:text-xl">
            <img
              key={blog.slug}
              src={blog.images}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/gl-full.png";
              }}
              alt={blog.title}
              loading="lazy"
              className="w-full h-auto object-cover will-change-transform [backface-visibility:hidden]"
            />
            <div
              className="p-6"
              dangerouslySetInnerHTML={{
                __html: formatPlainTextToHTML(
                  blog.content || "<p>I'm Sorry, Please Back</p>"
                ),
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
