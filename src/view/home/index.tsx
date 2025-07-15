import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Testi from "@/components/testi";
import FandQ from "@/components/fandq";
import Footer from "@/components/footer";
import ServiceFront from "@/components/servicefront";
import WhyWithUS from "@/components/whywithus";
import Blog from "@/components/blog";
import Client from "@/components/client";

export default function HomeView() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyWithUS />
      <ServiceFront />
      <Blog />
      <Testi />
      <Client />
      <FandQ />
      <Footer />
    </div>
  );
}
