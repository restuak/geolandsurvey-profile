import Footer from "@/components/footer";
import DataTeam from "./components/datateam";
import Navbar from "@/components/navbar/navbar";
import AboutUsHero from "./components/aboutushero";
import OurValue from "./components/ourvalue";

export default function TeamView() {
  return (
    <div className="bg-neutral-50 text-neutral-950">
      <Navbar />
      <AboutUsHero />
      <OurValue />
      <DataTeam />
      <Footer />
    </div>
  );
}
