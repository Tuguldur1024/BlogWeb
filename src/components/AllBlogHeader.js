const AllBlogHeader = () => {
  return (
    <div className="flex flex-col gap-8 justify-start px-5">
      <p className="font-bold text-2xl text-zinc-900"> All Blog Post </p>
      <div className="flex justify-between font-bold text-xs text-slate-600">
        <div className="flex gap-5 ">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <p> View All </p>
      </div>
    </div>
  );
};

export default AllBlogHeader;
