"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/useAuthStore";
import axios from "axios";
import { useHasHydrated } from "@/lib/useHasHydrated";

export default function CreateBlogPage() {
  const hasHydrated = useHasHydrated();
  const { isLogin, user } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    content: "",
    summary: "",
    label: "",
    images: "",
  });

  useEffect(() => {
    if (hasHydrated && !isLogin) {
      router.push("/blog");
    }
  }, [hasHydrated, isLogin, user]);

  if (!hasHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!isLogin) return null;

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://giftedstar-us.backendless.app/api/data/blog", {
        ...form,
        time: Date.now(),
      });

      router.push("/blog");
    } catch (err) {
      console.error("Error posting blog:", err);
      alert("Gagal posting blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-25 pb-15 px-5 bg-white">
      <div className="container max-w-3xl mx-auto border-2 border-neutral-950 p-6 rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          CREATE NEW ARTICLE
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title...(Required)"
            value={form.title}
            onChange={handleChange}
            className="input input-bordered w-full bg-white border-2 border-neutral-950 rounded-md p-2"
            required
          />
          <input
            type="text"
            name="slug"
            placeholder="Auto from title"
            value={form.slug}
            readOnly
            className="input input-bordered w-full bg-gray-100 border-2 border-neutral-950 rounded-md p-2"
          />
          <input
            type="text"
            name="author"
            placeholder="Author...(Required)"
            value={form.author}
            onChange={handleChange}
            required
            className="input input-bordered w-full bg-white border-2 border-neutral-950 rounded-md p-2"
          />
          <textarea
            name="summary"
            placeholder="Summary...(Required)"
            value={form.summary}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 w-full bg-white border-2 border-neutral-950 rounded-md p-2"
            required
          />
          <textarea
            name="content"
            placeholder="Content...(Required)"
            value={form.content}
            onChange={handleChange}
            className="textarea textarea-bordered h-60 w-full bg-white border-2 border-neutral-950 rounded-md p-2"
            required
          />
          <input
            type="text"
            name="label"
            placeholder="Label (e: GIS, Surveying, LandSurvey)"
            value={form.label}
            onChange={handleChange}
            className="input input-bordered w-full bg-white border-2 border-neutral-950 rounded-md p-2"
          />
          <input
            type="text"
            name="images"
            placeholder="Input URL images or leave blank...(Optional)"
            value={form.images}
            className="input input-bordered w-full bg-white border-2 border-neutral-950 rounded-md p-2"
          />

          <div className="flex justify-between gap-4 mt-4">
            <button
              type="button"
              onClick={() => router.push("/blog")}
              className="btn bg-gray-300 text-black hover:bg-gray-400 w-1/2"
            >
              Blog List
            </button>

            <button
              type="submit"
              disabled={loading}
              className="btn bg-[#992b39] hover:bg-[#7a1c2e] text-white w-1/2"
            >
              {loading ? "Saving..." : "Posting"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
