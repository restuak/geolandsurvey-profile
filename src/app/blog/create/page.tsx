import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import CreateBlogPage from "./components/blogcreate";

export default function CreateBlogView() {
  return (
    <div className="">
      <Navbar />
      <CreateBlogPage />
      <Footer />
    </div>
  );
}
