import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import MetaBlogLogo from "../icons/MetaBlogLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[25px] max-w-screen-xl items-center">
      <div className="flex gap-[249px]">
        <div className="w-[289px] font-normal text-base gap-1 flex flex-col">
          <p className="font-semibold text-base text-black mb-2"> About </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p> Email : info@jstemplate.net</p>
          <p> Phone : 880 123 456 789 </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={"/"}>
            <button> Home </button>
          </Link>
          <p> Blog </p>
          <Link href={"/contactUs"}>
            <button> Contact </button>
          </Link>
        </div>
        <div className="flex gap-[26.67px]">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="flex justify-between w-full py-5 mt-[25px]">
        <div className="flex gap-2.5">
          <MetaBlogLogo />
          <div className="flex flex-col gap-[2px]">
            <div className="flex">
              <p className="font-normal text-xl">Meta</p>
              <p className="font-extrabold text-xl"> Blog </p>
            </div>
            <p> © All Rights Reserved. </p>
          </div>
        </div>
        <div className="flex gap-8">
          <p className="flex items-center"> Terms of Use</p>
          <p className="flex items-center"> Privacy Policy </p>
          <p className="flex items-center">Cookie Policy </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
