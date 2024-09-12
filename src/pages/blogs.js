import { useRouter } from "next/router";

export const BlogsPage = (props) => {
  const { articles } = props;
  const router = useRouter();

  const handleChangeTag = () => {
    router.push({
      query: {
        tag: "discuss",
      },
    });
  };

  return (
    <div className="flex flex-col">
      {articles[0].title}
      <button onClick={handleChangeTag} className="py-2 px-4 bg-blue-400">
        change tag
      </button>
    </div>
  );
};

export default BlogsPage;

export const getServerSideProps = async (context) => {
  const { tag } = context.query;
  console.log(tag);
  try {
    const response = await fetch(`https://dev.to/api/articles?tag=${tag}`);
    const data = await response.json();

    return {
      props: {
        articles: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
