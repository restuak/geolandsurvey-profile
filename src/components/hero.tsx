import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Hero() {
  return (
    <main id="hero ">
      <div className="hero h-screen relative overflow-hidden">
        <Image
          src="/assets/7.avif"
          alt="Hero background"
          fill
          priority
          className="object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="hero-content z-20 text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex justify-center items-center mb-4">
              <Image
                alt="Logo Geoland"
                src="/assets/gl.png"
                width={120}
                height={120}
                priority
                fetchPriority="high"
              />
            </div>
            <h1 className="mb-5 text-4xl min-md:text-5xl font-bold">
              GEOLAND SURVEY
            </h1>
            <p className="mb-5">Let's talk about geospatial with fun</p>
            <button
              className="btn btn-primary bg-[#992b39] border-[#0C566D]"
              aria-label="View our service section"
            >
              <a href="/#service">OUR SERVICE</a>
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="z-50 absolute bottom-[-35px] min-lg:bottom-[-65px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-4 w-[300px] min-lg:w-[900px] flex justify-between text-center">
          <div>
            <p className="text-sm min-lg:text-2xl text-gray-500">Clients</p>
            <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
              87
            </p>
            <p className="text-xs min-lg:text-xl text-gray-500">Since 2022</p>
          </div>
          <div>
            <p className="text-sm min-lg:text-2xl text-gray-500">Projects</p>
            <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
              396
            </p>
            <p className="text-xs min-lg:text-xl text-gray-500">
              ✓ Finish 391 (98%)
            </p>
          </div>
          <div>
            <p className="text-sm min-lg:text-2xl text-gray-500">Order</p>
            <p className="text-2xl min-lg:text-5xl p-1 min-lg:p-5 font-bold text-black">
              1396
            </p>
            <p className="text-xs min-lg:text-xl text-gray-500">Since 2022</p>
          </div>
        </div>
      </section>
    </main>
  );
}
