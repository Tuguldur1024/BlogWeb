const TrendingNews = (props) => {
  const [category, title] = props;
  return (
    <div className={`px-7 pb-7`}>
      <img src={"/images/Background.png"} className="w-full h-full" />
      <div>
        <button className="py-1 px-2.5 rounded-md bg-blue-600 font-medium text-xs text-white">
          {category}
        </button>
        <p className="font-semibold text-lg text-white"> {title} </p>
      </div>
    </div>
  );
};
export default TrendingNews;
