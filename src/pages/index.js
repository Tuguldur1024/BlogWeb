import Header from "../components/Header";
import Slider from "../components/Slider";
import Trending from "../components/Trending";
import AllBlogPost from "../components/AllBlogPost";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AllBlogHeader from "../components/AllBlogHeader";

import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-[69px]">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-25">
        <div className="mb-[100px] px-5">
          <Header />
        </div>
        <div>
          <Slider />
        </div>
        <div>{/* <Trending /> */}</div>
        <div className="flex flex-col gap-8">
          <AllBlogHeader />
          <AllBlogPost />
        </div>
        <div>
          <AboutUs />
        </div>
      </div>
      <div className="w-full bg-neutral-100 py-16 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
