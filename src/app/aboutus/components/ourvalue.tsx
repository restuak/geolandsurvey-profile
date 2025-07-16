import { Timer, Zap, ZoomIn } from "lucide-react";

export default function OurValue() {
  return (
    <section className="py-32 pb-0 pt-0">
      <div>
        <h2 className="text-[#0C566D] text-3xl min-md:text-4xl p-3  min-md:pt-15 pb-0 font-bold justify-center items-center text-center">
          LITTLE BIT ABOUT US
        </h2>
      </div>

      <div className="hero-content p-10 w-[70%] min-md:w-screen flex flex-col mx-auto md:flex-row items-center gap-6 md:gap-10 px-4 md:px-20">
        <img src="/2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold text-center">
            Geoland Survey Lab!
          </h1>
          <p className="py-10 pt-3 pb-0  text-lg min-md:text-2xl mb-4 text-black justify-center-safe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-[#0C566D] text-3xl min-md:text-4xl p-3  pb-0 font-bold justify-center items-center text-center">
          OUR VALUES
        </h2>
      </div>
      <div className="container p-10 pt-0 flex mx-auto">
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Performance</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
