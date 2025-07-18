import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import ServiceHero from "./components/servicehero";
import ServiceOne from "./components/serviceone";
import ServiceTwo from "./components/servicetwo";
import ServiceThree from "./components/servicethree";

export default function ServiceView() {
  return (
    <div className="bg-neutral-50 text-neutral-950">
      <Navbar />
      <ServiceHero />
      <ServiceTwo />
      <ServiceThree />
      <ServiceOne />
      <Footer />
    </div>
  );
}
