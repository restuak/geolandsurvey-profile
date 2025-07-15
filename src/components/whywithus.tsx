import { withUS } from "@/lib/whywithus";

export default function WhyWithUS() {
  return (
    <section className="py-15 pb-0 flex items-center justify-center">
      <div className="container p-12 pt-5 pb-0 min-lg:p-25 min-lg:pt-7">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl min-md:text-4xl font-bold uppercase text-[#0C566D]">
            {withUS.heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {withUS.reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="flex flex-col">
                <div className="mb-5 mx-auto flex size-16 items-center justify-center rounded-full bg-accent">
                  <Icon className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="mb-2 mx-auto text-xl font-semibold">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-justify">
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
