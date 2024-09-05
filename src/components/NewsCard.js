import NewsButton from "./NewsButton";
import moment from "moment";

const NewsCard = (props) => {
  const { imageUrl, category, date, title } = props;
  return (
    <div className="flex flex-col gap-4 p-4 w-[392px] mb-5 border border-solid rounded-xl">
      <img src={imageUrl} height={240} width={360} className="rounded-md" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
        {category.map((one)=>{
          return <NewsButton category={one} />
        })}
        </div>
        
        
        <p className="font-semibold text-2xl"> {title} </p>
        <p className="font-normal text-base text-gray-400">
          {" "}
          {moment(date).format("LL")}{" "}
        </p>
      </div>
    </div>
  );
};
export default NewsCard;
