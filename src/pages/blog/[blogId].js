import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import moment from "moment";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Page() {
  const router = useRouter();
  const id = router.query.blogId;
  const url = `https://dev.to/api/articles/${id}`;

  const { data: blog = {}, error, isLoading } = useSWR(url, fetcher);
  if (error) {
    return <div> ...error </div>;
  }
  if (isLoading) {
    return <div> ...isLoading </div>;
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mb-[100px] px-5">
        <Header />
      </div>
      <div className="mx-auto flex flex-col gap-8 mb-20 w-[800px]">
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-[#181A2A] text-4xl">{blog.title}</p>
          <div className="text-sm text-[#696A75] font-normal flex gap-2">
            <img
              src={`${blog.profile_image}`}
              className="w-7 h-7 rounded-full"
              alt="Image"
            />
            <p className="font-medium mr-6">{blog.user.name}</p>
            <p> {moment(blog.published_at).format("LL")} </p>
          </div>
        </div>
        <img src={`${blog.social_image}`} />
        <div>{parse(blog.body_html)}</div>
      </div>
      <div className="w-full bg-neutral-100 py-16 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
