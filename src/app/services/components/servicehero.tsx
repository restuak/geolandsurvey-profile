export default function ServiceHero() {
  return (
    <main className="">
      <div
        className="hero min-h-[35vh]"
        style={{
          backgroundImage: "url('/assets/2.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="mb-0 hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="m-5 text-3xl min-md:text-5xl font-bold">
              OUR SERVICES
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
