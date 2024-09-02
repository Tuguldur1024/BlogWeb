import useSWR from "swr";
import NewsCard from "./NewsCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://dev.to/api/articles";

const AllBlogPost = () => {
  const { data, error, loading } = useSWR(url, fetcher);

  if (error) {
    return <p> ...error </p>;
  }
  if (!data) {
    return <p> ...loading </p>;
  }
  console.log(data);
  return (
    <div className="flex flex-wrap mx-auto justify-around">
      {data.map((oneArticle) => {
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
  );
};
export default AllBlogPost;
