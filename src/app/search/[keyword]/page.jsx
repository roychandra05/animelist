import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { apiLibraries } from '@/libraries/apiLibs'

export const Page = async ({ params }) => {
  const keyword = await params;
  const animeName = decodeURI(keyword.keyword); //decode is used for hidding a '%' between chars or words
  const searchAnime = await apiLibraries('anime', `q=${animeName}`)
  return (
    <div className="bg-black">
      <section>
        <Header title={`Results for ${animeName} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
