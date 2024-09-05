import useSWR from "swr";
import TrendingNews from "./TrendingNews";
import Link from "next/link";

const url = "https://dev.to/api/articles?state=rising";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const { data, error, loading } = useSWR(url, fetcher);

  if (error) {
    return <p> ...error </p>;
  }
  if (loading) {
    return <p> ...loading </p>;
  }

  if (!data) return null;
  const posts = [...data]?.slice(4, 8);
  return (
    <div className="flex flex-col pb-3 gap-[30px] px-5">
      <p className="font-bold text-2xl text-zinc-900"> Trending </p>
      <div className="flex gap-5">
        {posts?.map((post, index) => {
          return (
            <Link href={`blog/${post.id}`}>
              <TrendingNews
                key={index}
                image={post.cover_image}
                category="Technology"
                title={post.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
