import SearchBar from "../icons/SearchBar";

const Header = () => {
  return (
    <div className="flex flex-start gap-28 py-8">
      <img src="/images/MetaBlog.png" />
      <div className="flex gap-5 items-center w-full">
        <div className="justify-center items-center flex gap-10">
          <p>Home</p>
          <p> Blog </p>
          <p> Contact</p>
        </div>
        <div className="flex gap-3 pt-2 pr-2 pb-2 pl-4 items-center rounded-md bg-zinc-100	">
          <input
            placeholder="Search"
            className="bg-zinc-100 font-normal text-sm"
          />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
export default Header;
