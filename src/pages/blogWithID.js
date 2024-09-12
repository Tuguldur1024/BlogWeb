import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const blogWithID = (props) => {
  const { blog } = props;
  const router = useRouter();
  console.log(blog);

  const handleChange = () => {
    router.push({
      query: {
        id: "150589",
      },
    });
  };

  return (
    <div className="flex flex-col mx-auto">
      <div> {blog.id} </div>
      <button onClick={handleChange}> change </button>
    </div>
  );
};
export default blogWithID;

export const getServerSideProps = async (context) => {
  const id = context.query;

  try {
    const data = await fetch(`https://dev.to/api/articles?id=${id}`);
    const response = await data.json();

    return {
      props: {
        blog: response,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
