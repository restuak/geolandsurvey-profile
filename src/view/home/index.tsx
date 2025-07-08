import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Testi from "@/components/testi";
import FandQ from "@/components/fandq";
import Footer from "@/components/footer";
import ServiceFront from "@/components/servicefront";

export default function HomeView() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ServiceFront />
      <Testi />
      <FandQ />
      <Footer />
    </div>
  );
}
