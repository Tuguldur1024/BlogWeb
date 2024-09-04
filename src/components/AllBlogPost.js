import useSWR from "swr";
import NewsCard from "./NewsCard";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://dev.to/api/articles";

const AllBlogPost = () => {
  const { data, error, loading } = useSWR(url, fetcher);
  const [newsNumber, setNewsNumber] = useState(9);
  if (error) {
    return <p> ...error </p>;
  }
  if (!data) {
    return <p> ...loading </p>;
  }
  const loadMore = () => {
    setNewsNumber((n) => n + 3);
  };
  const posts = [...data].slice(0, newsNumber);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap mx-auto justify-around">
        {posts.map((oneArticle) => {
          return (
            <NewsCard
              key={oneArticle.id}
              imageUrl={oneArticle.social_image}
              category={oneArticle.type_of}
              date={oneArticle.readable_publish_date}
              title={oneArticle.title}
            />
          );
        })}
      </div>
      <button
        onClick={loadMore}
        className="border border-[#696A75 30%] px-5 py-3 w-fit rounded-md font-medium text-base text-[#696A75;]"
      >
        Load More
      </button>
    </div>
  );
};
export default AllBlogPost;
