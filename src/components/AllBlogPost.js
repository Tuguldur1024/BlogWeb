import useSWR from "swr";
import NewsCard from "./NewsCard";
import { useState } from "react";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlogPost = () => {
  const [categoryName, setCategoryName] = useState("all");
  const [numberofcategory, setNumberOfCategory] = useState(5);
  const url = `https://dev.to/api/articles?tag=${categoryName}`;
  const categoryUrl = `https://dev.to/api/tags?per_page=${numberofcategory}`;

  const { data: categories = [], isLoading: tagsLoading } = useSWR(
    categoryUrl,
    fetcher
  );
  const { data: blogs = [], error, isLoading } = useSWR(url, fetcher);
  const [newsNumber, setNewsNumber] = useState(9);
  const [isclosed, setIsClosed] = useState(true);

  if (isLoading && tagsLoading) return <p> ...loading </p>;

  if (error) {
    return <p> ...error </p>;
  }
  let posts = blogs.slice(0, newsNumber);
  const loadMore = () => {
    setNewsNumber((n) => n + 6);
  };

  const viewAll = () => {
    setNumberOfCategory(50);
    setIsClosed(!isclosed);
  };
  const closeAll = () => {
    setNumberOfCategory(5);
    setIsClosed(!isclosed);
  };
  const filter = (categoryName) => {
    setCategoryName(categoryName);
  };
  return (
    <>
      <div className="flex flex-col gap-8 justify-start px-5 mb-8">
        <p className="font-bold text-2xl text-zinc-900"> All Blog Post </p>
        <div className="flex justify-between font-bold text-xs text-slate-600">
          <div className="flex gap-5 flex-wrap">
            <button onClick={() => filter("all")}>all</button>
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className="hover:border hover:border-solid hover:border-rose-500"
                  onClick={() => filter(category.name)}
                >
                  {" "}
                  {category.name}{" "}
                </button>
              );
            })}
          </div>
          {isclosed && <button onClick={viewAll}> View All </button>}
        </div>
        {!isclosed && <button onClick={closeAll}> Close All </button>}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap mx-auto justify-around">
          {posts.map((oneArticle) => {
            return (
              <Link key={oneArticle.id} href={`blog/${oneArticle.id}`}>
                <NewsCard
                  imageUrl={oneArticle.social_image}
                  category={oneArticle.tag_list}
                  date={oneArticle.readable_publish_date}
                  title={oneArticle.title}
                />
              </Link>
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
    </>
  );
};
export default AllBlogPost;
