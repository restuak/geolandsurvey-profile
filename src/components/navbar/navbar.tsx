"use client";
import { LoginModal } from "./login/login";
import { RegisterModal } from "./regis/regis";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
export default function Navbar() {
  const { isLogin, clearAuth } = useAuthStore((state) => state);
  return (
    <div className="navbar bg-[#0C566D] shadow-sm fixed w-full backdrop-blur-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <Button className="btn btn-ghost btn-circle bg-[#992b39]">
            <Menu />
          </Button>
          <ul
            tabIndex={0}
            className="text-white menu menu-sm dropdown-content bg-[#992b39] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/services">OUR SERVICES</Link>
            </li>
            <li>
              <Link href="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/#contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          className="btn btn-ghost text-xl text-white hover:bg-[#992b39] hover:border-[#992b39]"
          href="/"
        >
          GEOLAND SURVEY
        </a>
      </div>
      <div className="navbar-end text-white ">
        {isLogin ? (
          <div className="flex flex-row gap-3 align-middle">
            <button
              className="p-1 btn btn-ghost btn-circle hover:bg-[#992b39] bg-[#992b39] text-neutral-950 font-extrabold hover:text-neutral-100 "
              onClick={clearAuth}
            >
              OUT
            </button>
          </div>
        ) : (
          <div className="flex flex-row gap-3 align-middle">
            <LoginModal />
            <RegisterModal />
          </div>
        )}
      </div>
    </div>
  );
}
