import Footer from "@/components/footer";
import DataTeam from "./components/datateam";
import Navbar from "@/components/navbar";
import AboutUsHero from "./components/aboutushero";

export default function TeamView() {
  return (
    <div className="">
      <Navbar />
      <AboutUsHero />
      <DataTeam />
      <Footer />
    </div>
  );
}
