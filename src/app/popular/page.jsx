"use client";
import { useState, useEffect } from "react";
import { Pagination } from "@/components/utilities/Pagination";
import { Header } from "@/components/utilities/Header";
import AnimeList from "@/components/AnimeList";
import { apiLibraries } from '@/libraries/apiLibs'

const Page = () => {
  const [page, setPage] = useState(1);
  const [popularAnime, setPopularAnime] = useState([]);
  const btnNext = [];
  const btnPrev = [];

  const getPopular = async () => {
    const anime = await apiLibraries('top/anime',`page${page}`)
    setPopularAnime(anime);
  };

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  
  const jumpNextPage = () => {
    let next = page;
    next = Number(next);
    for (let i = 0; i < 3; i++) {
      next = next + 3;
      btnNext.push(
        <button
          className='lg:px-8 sm:px-2 border-2 border-main-shadow shadow-lg rounded-lg mx-1 px-4 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150'
          onClick={(e) => {setPage((prev) => (prev = Number(e.target.innerHTML))),scrollTop()}}
          key={i}
        >
          {next}
        </button>
      );
    }
  };
  const jumpPrevPage = () => {
    let next = page;
    next = Number(next);
    if (page > 1) {
      for (let i = 1; page > i; i++) {
        if (i > 3) return;
        btnPrev.push(
          <button 
          className="lg:px-8 sm:px-2 border-2 border-main-shadow shadow-lg rounded-lg mx-1 px-4 bg-main-accent text-main-shadow drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150" 
          onClick={(e) => {setPage((prev) => (prev = e.target.innerHTML)), scrollTop()}}
          key={i}
          >
            {page - i}
          </button>
        );
      }
      return;
    }
  };
  useEffect(() => {
    getPopular();
  }, [page]);

  jumpNextPage();
  jumpPrevPage();
  
  return (
    <section>
      <Header title={"MOST POPULAR ANIME"} page={`#${page}`} />
      <AnimeList api={popularAnime} />
      <Pagination
        page={page}
        totalPage={popularAnime.pagination?.last_visible_page}
        setPage={setPage}
        btnNext={btnNext}
        btnPrev={btnPrev}
        scrollTop={scrollTop}
      />
    </section>
  );
};
export default Page;
