import Link from "next/link";
import Image from "next/image";

export const CollectionsAnime = ({ collection }) => {
  console.info(collection);
  return (
    <>
      <div className="grid grid-cols-4 gap-8" >
        {collection.map((anime, i) => {
          return (
            <div className="border-4 border-main-accent rounded-lg shadow-lg overflow-hidden" key={i}>
              <Link href="/" className="">
                <Image
                  src={anime.anime_image}
                  width={350}
                  height={350}
                  priority
                  alt="tidak ada"
                  className="w-full h-96"
                />
              </Link>
              <div className="font-bold flex justify-center items-center sm:text-xs md:text-sm text-base p-4 bg-main-background h-auto text-center border-t-4 border-main-accent">
                <h3 className="text-lg font-bold text-main-secondary">
                  {anime.anime_title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionsAnime;
