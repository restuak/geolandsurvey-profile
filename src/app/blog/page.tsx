import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import BlogHero from "./components/bloghero";
import BlogList from "./components/bloglist";

export default function BlogView() {
  return (
    <div className="bg-neutral-50 text-neutral-950 ">
      <Navbar />
      <BlogHero />
      <BlogList />
      <Footer />
    </div>
  );
}
