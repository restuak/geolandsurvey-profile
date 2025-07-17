export default function BlogHero() {
  return (
    <main className="">
      <div
        className="hero min-h-[35vh]"
        style={{
          backgroundImage: "url('/4.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="mb-0 hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="m-5 text-3xl min-md:text-5xl font-bold">
              ABOUT GEOSPASIAL
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
