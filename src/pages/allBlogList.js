import Footer from "../components/Footer";
import Header from "../components/Header";

import { BrowserRouter } from "react-router-dom";

const AllBlogPost = () => {
  return (
    <div className="w-full flex flex-col gap-[69px]">
      <div className="mb-[100px] px-5">
        <Header />
      </div>
      <div className="w-full bg-neutral-100 py-16 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default AllBlogPost;
