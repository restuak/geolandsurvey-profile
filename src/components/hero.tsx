"use client"
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert(
        "Mohon maaf selama ada pesan ini, website masih saya developing, Kak  | Blog sectionnya masih saya buat...dll | Terima kasih pengertiannya :)"
      );
    }, 1000);

    return () => clearTimeout(timer); // bersihkan timer saat unmount
  }, []);
  return (
    <main id="hero">
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(../2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <Image
              alt="Logo Geoland"
              src="/gl.png"
              height={150}
              width={150}
              className="container mx-auto w-35 h-35 relative flex justify-center items-center"
            />
            <h1 className="mb-5 text-5xl font-bold">GEOLAND SURVEY</h1>
            <p className="mb-5">
              Let's talk about geospatial and solve your problem together.
            </p>
            <button className="btn btn-primary bg-[#992b39] border-[#0C566D] ">
              <a href="/#service">OUR SERVICE</a>
            </button>
          </div>
        </div>
      </div>
      <section>
        <div className="absolute bottom-[-35px] min-lg:bottom-[-65px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-4 w-[300px] min-lg:w-[900px] flex justify-between text-center">
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
