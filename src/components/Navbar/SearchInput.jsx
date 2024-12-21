"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const searchAnime = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == '') return;

    // method 1 - if statement
    if (event.type === "click" || event.key === "Enter") {
      router.push(`/search/${keyword}`);
    }
    //  method 2 - logic operator
    // (event.key === "Enter" && router.push(`/search/${keyword}`)) ||
    //   (event.type === "click" && router.push(`/search/${keyword}`));
  };

  return (
    <div className="h-1/2 p-3 flex justify-center items-center w-36 relative md:w-auto lg:w-auto sm:w-auto xl:w-80 2xl:w-96">
      <input
        type="text"
        placeholder="search ..."
        className="text-black rounded-lg h-8 p-2 w-36 md:w-auto lg:w-auto sm:w-full xl:w-full 2xl:w-full"
        ref={searchRef}
        onKeyUp={searchAnime}
      />
      <button className=" absolute md:top-2 sm:top-2 right-5" onClick={searchAnime}>
        <MagnifyingGlass />
      </button>
    </div>
  );
};
export default SearchInput;
