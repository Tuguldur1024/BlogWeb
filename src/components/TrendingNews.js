const TrendingNews = (props) => {
  const { category, title, image } = props;
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`px-7 pb-7 w-full flex items-end h-[320px] `}
    >
      <div>
        <button className="py-1 px-2.5 rounded-md bg-blue-600 font-medium text-xs text-white mb-4">
          {category}
        </button>
        <p className="font-semibold text-lg text-white">{title}</p>
      </div>
    </div>
  );
};
export default TrendingNews;
