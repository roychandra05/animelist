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
    <div className="h-1/2 p-3 flex items-center relative">
      <input
        type="text"
        placeholder="search ..."
        className="text-black rounded-lg h-8 p-2"
        ref={searchRef}
        onKeyUp={searchAnime}
      />
      <button className=" absolute top-2 right-5" onClick={searchAnime}>
        <MagnifyingGlass />
      </button>
    </div>
  );
};
export default SearchInput;
