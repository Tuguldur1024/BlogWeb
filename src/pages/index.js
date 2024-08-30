import Header from "../components/Header";
import Slider from "../components/Slider";
import Trending from "../components/Trending";
import AllBlogPost from "../components/AllBlogPost";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-25 flex-col">
      <div className="mb-25 px-5">
        <Header />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <AllBlogPost />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
