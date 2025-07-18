"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RegisterForm from "./regisform";
import { UserPlus } from "lucide-react";
export function RegisterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-ghost btn-circle hover:bg-[#992b39]">
          <UserPlus className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <RegisterForm />
    </Dialog>
  );
}
