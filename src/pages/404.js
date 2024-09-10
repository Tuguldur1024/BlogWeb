import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const A404Page = () => {
  return (
    <div className=" flex flex-col max-w-screen-xl mx-auto">
      <div className="mb-[100px] px-5">
        <Header />
      </div>
      <div className="flex gap-[117px] mx-auto mb-9 items-center">
        <p className="font-normal text-7xl text-center">404</p>
        <div className="flex flex-col gap-5 w-[375px]">
          <p className="font-semibold text-2xl"> Page Not Found</p>
          <p className="font-normal text-lg text-[#696A75]">
            We are sorry, This page is unknown or does not exist the page you
            are looking for.
          </p>
          <Link href={"/"}>
            <button className="px-4 py-2.5 bg-[#4B6BFB] text-white rounded-md">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-neutral-100 py-16 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default A404Page;
