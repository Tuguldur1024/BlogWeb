import useSWR from "swr";
import NewsCard from "./NewsCard";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


const AllBlogPost = () => {
  const [categoryName, setCategoryName] = useState("all")
  const[numberofcategory, setNumberOfCategory] = useState(5)
  const url = `https://dev.to/api/articles?tag=${categoryName}`;
  const categoryUrl = `https://dev.to/api/tags?per_page=${numberofcategory}`;

  const{data: categories=[], isLoading:tagsLoading} = useSWR(categoryUrl, fetcher);
  const { data:blogs =[], error, isLoading } = useSWR(url, fetcher);
  const [newsNumber, setNewsNumber] = useState(9);
  const[isclosed, setIsClosed] = useState(true)

  if(isLoading && tagsLoading) return <p> ...loading </p>
  
  if (error) {
    return <p> ...error </p>;
  }
  let posts = blogs.slice(0,newsNumber)
  console.log(blogs)
  console.log(url)
  const loadMore = () => {
    setNewsNumber((n) => n + 6);
  };

  const viewAll = () =>{
    setNumberOfCategory(50)
    setIsClosed(!isclosed)
  }
  const closeAll = () =>{
    setNumberOfCategory(5)
    setIsClosed(!isclosed)
  }
  const filter  =  (categoryName) =>{
    setCategoryName(categoryName)
  }
  return (
    <>
    <div className="flex flex-col gap-8 justify-start px-5 mb-8">
      <p className="font-bold text-2xl text-zinc-900"> All Blog Post </p>
      <div className="flex justify-between font-bold text-xs text-slate-600">
        <div className="flex gap-5 flex-wrap">
          <p onClick={() => filter("all")}>all</p>
          {categories.map((category)=>{
            return <p onClick={()=>filter(category.name)}> {category.name} </p>
          })}
        </div>
        {isclosed && <p onClick={viewAll}> View All </p>}
        
        
      </div>
      {!isclosed &&  <p onClick={closeAll}> Close All </p>}
    </div>
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap mx-auto justify-around">
        {posts.map((oneArticle) => {
          return (
            <NewsCard
              key={oneArticle.id}
              imageUrl={oneArticle.social_image}
              category={oneArticle.tag_list}
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
    </>
    
  );
};
export default AllBlogPost;
