import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero";
import Testi from "@/components/testi";
import FandQ from "@/components/fandq";
import Footer from "@/components/footer";
import ServiceFront from "@/components/servicefront";
import WhyWithUS from "@/components/whywithus";
import Blog from "@/components/blog";
import Client from "@/components/client";
import Contact from "@/components/contact";

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
      <Contact />
      <Footer />
    </div>
  );
}

