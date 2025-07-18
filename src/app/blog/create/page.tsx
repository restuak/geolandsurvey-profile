import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import CreateBlogPage from "./components/blogcreate";

export default function CreateBlogView() {
  return (
    <div className="bg-neutral-50 ">
      <Navbar />
      <CreateBlogPage />
      <Footer />
    </div>
  );
}
