import Image from "next/image";
import Link from "next/link";

export const AnimeList = ({ api }) => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 content-center px-3 bg-main-background">
        {api.data?.map((anime, i) => {
          return (
            <Link href={`/anime/${anime.mal_id}`} key={i}>
              <div className="border-4 border-main-secondary text-center h-full rounded-xl overflow-hidden shadow-lg hover:border-main-accent transition-all duration-200 ease">
                <Image
                  src={anime.images.webp.image_url}
                  alt="..."
                  width={350}
                  height={350}
                  priority  
                  className="w-full max-h-96 object-cover "
                />
                <h1 className="font-bold sm:text-xs md:text-sm text-base p-4 bg-main-secondary h-full">
                  {anime.title}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default AnimeList;
