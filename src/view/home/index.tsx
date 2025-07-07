import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Testi from "@/components/testi";
import FandQ from "@/components/fandq";
import Footer from "@/components/footer";

export default function HomeView() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Testi />
      <FandQ />
      <Footer />
    </div>
  );
}
