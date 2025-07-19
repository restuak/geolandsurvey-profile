import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-32 pt-0 ">
      <div className="container mx-auto p-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mt-4 text-3xl min-md:text-4xl text-[#0C566D] font-bold text-pretty uppercase">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                Halaman ini masih statis, belum bisa digunakan.
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h2 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h2>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  (0295) 34567890
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a
                    href={`mailto:geolandsurvey.id@gmail.com`}
                    className="underline"
                  >
                    geolandsurvey.id@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href="" className="underline">
                    Geoland Survey Lab
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border-[#0C566D] border-2 p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full bg-[#0C566D]">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
