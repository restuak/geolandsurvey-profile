"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./loginform";
import { LogIn } from "lucide-react";


export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Login"
          className="btn btn-ghost btn-circle hover:bg-[#992b39]"
        >
          <LogIn className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <LoginForm />
    </Dialog>
  );
}
