import { AnimeList } from "@/components/AnimeList";
import { Header } from "@/components/AnimeList/Header";
import {apiLibraries} from '@/libraries/apiLibs'
import { getNestedAnimeData } from "@/libraries/apiLibs";
import { reproduce } from "@/libraries/apiLibs";

export const Page = async () => {
  const topAnime = await apiLibraries('top/anime', 'limit=8')
  
  let recommendedAnime = await getNestedAnimeData(`recommendations/anime`, "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  return (
    <>
    <section>
      <Header
        title={"Top Anime"}
        linkHref={"/popular"}
        linkTitle={"See More"}
      />
      <AnimeList api={topAnime} />
    </section>
    <section>
      <Header
        title={"Recommended Anime"}
        linkHref={"/recommended"}
        linkTitle={"See More"}
      />
      <AnimeList api={recommendedAnime} />
    </section>
    </>
  );
};
export default Page;
