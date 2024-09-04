import Button from "./Button";
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import useSWR from "swr";
import moment from "moment";

const url = "https://dev.to/api/articles?top=2";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Slider = () => {
  const { data, error, loading } = useSWR(url, fetcher);
  const [index, setIndex] = useState(0);
  if (error) {
    return <p> ...error </p>;
  }
  if (!data) {
    return <p> ...loading </p>;
  }
  if (!data) return null;

  const posts = [...data]?.slice(0, 4);
  const mypost = posts[index];

  const increment = () =>{
    if(index<3){
      setIndex(n=>n+1)
    }
    else{
      setIndex(0)
    }
  }
  const decrament = () =>{
    if(index>0)
      {
        setIndex(n=>n-1)
      }
    else{
      setIndex(3)
    }
  }
  return (
    <div className="max-w-screen-xl relative">
      <img src={mypost.cover_image} className="bg-cover w-full h-[600px]" />
      <div className="absolute flex flex-col gap-6 p-10 bottom-12 left-2.5 bg-white rounded-xl w-1/2">
        <div className="flex flex-col gap-4 justify-start">
          <Button text="Technology" />
          <p className="font-semibold	text-4xl">
            {mypost.title}
          </p>
        </div>
        <p className="text-gray-400	"> {moment(mypost.published_at).format('LL')} </p>
      </div>
      <div className="flex items-end w-full justify-end gap-[9px]">
        <div onClick={decrament} className="h-10 w-10 border border-solid flex items-center justify-center rounded-lg">
          <SlArrowLeft />
        </div>
        <div onClick={increment} className="h-10 w-10 border border-solid flex items-center justify-center rounded-lg">
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
