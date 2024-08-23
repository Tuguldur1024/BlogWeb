import Header from "../components/Header";
import Slider from "../components/Slider";
import Trending from "../components/Trending";
import AllBlogPost from "../components/AllBlogPost";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="my-8">
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
