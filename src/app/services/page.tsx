import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceHero from "./components/servicehero";
import ServiceOne from "./components/serviceone";

export default function ServiceView() {
  return (
    <div className="">
      <Navbar />
      <ServiceHero />
      <ServiceOne />
      <Footer />
    </div>
  );
}
