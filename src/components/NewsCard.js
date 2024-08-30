import NewsButton from "./NewsButton";

const NewsCard = () => {
  const { imageUrl, category, date, article } = props;
  return (
    <div className="flex flex-col gap-4 p-4">
      <img src={imageUrl} height={240} width={360} className="rounded-md" />
      <div className="flex flex-col gap-4">
        <NewsButton
          textColor="#4B6BFB"
          category={category}
          isContained={false}
        />
        <p className="font-semibold text-2xl"> {article} </p>
        <p className="font-normal text-base text-gray-400"> {date} </p>
      </div>
    </div>
  );
};
export default NewsCard;
