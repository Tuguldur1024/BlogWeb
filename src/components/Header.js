import SearchBar from "../icons/SearchBar";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  // const goToPage = () => {
  //   navigate("/contactUs");
  // };

  return (
    <div className="flex flex-start gap-[120px] py-8">
      <img src="/images/MetaBlog.png" alt="MetaBlog logo" />
      <div className="flex gap-5 items-center w-full justify-between">
        <div className="justify-center items-center flex gap-10">
          <p>Home</p>
          <p>Blog</p>
          <button
            // onClick={goToPage}
            className="text-left bg-transparent border-none p-0 m-0 cursor-pointer"
          >
            Contact
          </button>
        </div>
        <div className="flex gap-3 pt-2 pr-2 pb-2 pl-4 items-center rounded-md bg-zinc-100">
          <input
            placeholder="Search"
            className="bg-zinc-100 font-normal text-sm"
          />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
