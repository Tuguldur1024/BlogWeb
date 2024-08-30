import Button from "./Button";
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Slider = () => {
  return (
    <div className="max-w-screen-xl relative">
      <img src="/images/Victoria.jpg" className="bg-cover w-full" />
      <div className="absolute flex flex-col gap-6 p-10 bottom-12 left-2.5 bg-white rounded-xl w-1/2">
        <div className="flex flex-col gap-4 justify-start">
          <Button text="Technology" />
          <p className="font-semibold	text-4xl">
            Grid system for better Design User Interface
          </p>
        </div>
        <p className="text-gray-400	"> August 20, 2022</p>
      </div>
      <div className="flex items-end w-full justify-end gap-[9px]">
        <div className="h-10 w-10 border border-solid flex items-center justify-center rounded-lg">
          <SlArrowLeft />
        </div>
        <div className="h-10 w-10 border border-solid flex items-center justify-center rounded-lg">
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
