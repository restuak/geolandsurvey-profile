import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogHero from "./components/bloghero";
import BlogList from "./components/bloglist";



export default function TeamView() {
  return (
    <div className="">
      <Navbar />
      <BlogHero />
      <BlogList />
      <Footer />
    </div>
  );
}
