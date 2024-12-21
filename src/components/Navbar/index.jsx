import Link from "next/link";
import SearchInput from "./SearchInput";
import UserAuth from "./UserAuth";
export const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center border-b-4 border-b-main-accent bg-main-primary">
      <div className="h-1/2 p-3 flex items-center text-3xl font-bold">
        <Link
          href="/"
          className="text-main-shadow transition-all ease-in-out duration-300 text-2xl sm:text-2xl md:text-3xl"
        >
          RC <span className="text-main-secondary italic">Anime</span>
        </Link>
      </div>
      <SearchInput />
      <UserAuth />
    </div>
  );
};
export default Navbar;
