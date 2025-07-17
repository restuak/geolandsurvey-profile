export default function SkeletonBlog() {
  return (
    <section className="container p-10  w-screen h-screen">
      <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12 sm:col-span-12 lg:col-span-10 lg:col-start-2">
        <div className="sm:col-span-5 space-y-4">
          <div className="flex flex-wrap gap-3">
            <div className="h-4 w-16 bg-gray-300 rounded" />
            <div className="h-4 w-12 bg-gray-300 rounded" />
          </div>
          <div className="h-6 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-400 rounded mt-4" />
        </div>

        <div className="sm:col-span-5">
          <div className="aspect-[16/9] w-full bg-gray-300 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
