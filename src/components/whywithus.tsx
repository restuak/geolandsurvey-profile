"use client";

import { useMediaQuery } from "react-responsive";
import { withUS } from "@/lib/datastatis/whywithus";

export default function WhyWithUS() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const reasonsToShow = isMobile ? withUS.reasons.slice(0, 3) : withUS.reasons;
  return (
    <section className="py-15 pb-10 flex items-center justify-center">
      <div className="container p-12 pt-5 pb-0 min-md:p-20 min-md:pt-7">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl min-md:text-4xl font-bold uppercase text-[#0C566D]">
            {withUS.heading}
          </h2>
        </div>
        <div className="grid gap-15 md:grid-cols-2 lg:grid-cols-3">
          {reasonsToShow.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="flex flex-col">
                <div className="mb-5 mx-auto flex size-16 items-center justify-center rounded-full bg-accent">
                  <Icon className="w-7 h-7 text-neutral-950" />
                </div>
                <h3 className="mb-2 mx-auto text-2xl font-semibold">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-lg text-justify">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
