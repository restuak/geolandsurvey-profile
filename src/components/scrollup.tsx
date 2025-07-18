"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollUp() {
  const [tombolScrollUp, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 3000) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    tombolScrollUp && (
      <button
        onClick={ScrollUp}
        className="fixed bottom-6 right-6 z-50 p-3  rounded-full bg-[#992b39] border-2 border-amber-50 shadow-lg text-3xl text-neutral-50 hover:bg-zinc-100 transition duration-300 animate-bounce"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    )
  );
}
