import useSWR from "swr";
import NewsCard from "./newsCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://dev.to/api/articles";

const AllBlogPost = () => {
  const { data, error, loading } = useSWR(url, fetcher);

  if (error) {
    return <p> ...error </p>;
  }
  if (loading) {
    return <p> ...loading </p>;
  }
  return (
    <div>
      {data.map((oneArticle) => {
        return <NewsCard imageUrl={} category={} date={} article={} />;
      })}
    </div>
  );
};
export default AllBlogPost;
