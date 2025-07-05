import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Testi from "@/components/testi";

export default function HomeView() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Testi />
      <Footer />
    </div>
  );
}
