import TrendingNews from "./TrendingNews";

const Trending = () => {
  return (
    <div className="flex flex-col pb-3 gap-[30px] px-5">
      <p className="font-bold text-2xl text-zinc-900"> Trending </p>
      <div>
        <TrendingNews
          // imageUrl={"/images/Background.png"}
          category="Technology"
          title="The Impact of Technology on the Workplace: How Technology is Changing"
        />
      </div>
    </div>
  );
};

export default Trending;
