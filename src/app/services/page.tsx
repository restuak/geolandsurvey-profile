import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceHero from "./components/servicehero";
import ServiceOne from "./components/serviceone";
import ServiceTwo from "./components/servicetwo";
import ServiceThree from "./components/servicethree";

export default function ServiceView() {
  return (
    <div className="">
      <Navbar />
      <ServiceHero />
      <ServiceTwo />
      <ServiceThree />
      <ServiceOne />
      <Footer />
    </div>
  );
}
