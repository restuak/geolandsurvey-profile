import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stat from "@/app/services/components/stat";

export default function ServiceTwo() {
  return (
    <main>
      <div className="container p-3 pb-0 min-md:p-15 flex flex-wrap mx-auto">
        <Stat />
      </div>
      <section>
        <div className="container pb-25 mx-auto">
          <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2 ">
            <div className="flex flex-col items-center p-10 min-mx:p-16 text-center lg:items-start lg:text-left">
              <p>Profesional</p>
              <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
                Land Survey
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                Accurate measurement and mapping of land positions using tools
                like total stations or GNSS. Commonly used for construction
                planning, land ownership boundaries, or spatial development.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button>
                  <Link href="/#contact">CONTACT US!</Link>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
            <img
              src="/7.jpg"
              alt="GIS"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
