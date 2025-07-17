import axios from "axios";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const id = params.id;

  let blog;

  try {
    const res = await axios.get(
      `https://giftedstar-us.backendless.app/api/data/blog?where=slug='${id}'`
    );
    blog = res.data[0];
    if (!blog) return notFound();
  } catch (error) {
    return notFound();
  }

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Info */}
          <aside className="lg:w-1/3 space-y-6">
            <a
              href="/blog"
              className="text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Return to home
            </a>

            <h1 className="text-3xl font-bold leading-tight lg:text-4xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">{blog.author}</p>
                <p className="text-sm text-muted-foreground">
                  {blog.published}
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-2/3 space-y-8">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-xl w-full h-auto object-cover aspect-video"
              />
            )}

            <div
              className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: blog?.content || "<p>No content available.</p>",
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
