import CollectionButton from "@/components/AnimeList/CollectionButton";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import { apiLibraries } from "@/libraries/apiLibs";
import authSession from "@/libraries/authSession";
import Image from "next/image";
import prisma from "@/libraries/prisma";
import { Comment } from "@/components/AnimeList/Comment";
import CommentBox from "@/components/AnimeList/CommentBox";

export const Page = async ({ params }) => {
  const response = await params;
  const id = await response.id;
  const result = await apiLibraries(`anime/${id}`);
  const anime = result.data;
  const user = await authSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: anime.mal_id,
    },
  });
  return (
    <div className="min-w-full max-h-screen">
      <div className="p-3">
        <div className="max-w-96">
          <h1 className="font-bold text-xl text-main-secondary">
            {anime.title}
          </h1>
          {!collection && user && (
            <CollectionButton
              anime_mal_id={anime.mal_id}
              user_email={user?.email}
              anime_image={anime.images.webp.image_url}
              anime_title={anime.title}
            />
          )}
        </div>
        <div className="flex flex-wrap">
          <div className="sm:mr-4 sm:w-64 border-main-accent h-96 w-96 border-4 md:w-72 rounded-xl overflow-hidden my-3 shadow-md">
            <Image
              src={anime.images.webp.image_url}
              width={350}
              height={350}
              priority
              alt={anime.images.jpg.image_url}
              className="w-full h-96"
            />
          </div>
          <div className="text-lg mb-3 sm:text-sm sm:w-80 self-center lg:mx-auto xl:mx-auto md:mx-auto sm:mx-auto w-96 font-semibold md:w-96 md:text-lg text-main-secondary">
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Episode
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.episodes}</span>
            </div>
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Duration
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.duration}</span>
            </div>
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Score
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.score}</span>
            </div>
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Rank
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.rank}</span>
            </div>
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Rating
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.rating}</span>
            </div>
            <div className="flex">
              <p className="w-24 sm:px-1 border-2 border-main-accent bg-main-background rounded-lg my-1 shadow-lg">
                Status
              </p>
              <span className="p-1 px-3 text-md w-72">: {anime.status}</span>
            </div>
          </div>
        </div>
        <div className="flex text-lg">
          <p className="text-main-secondary py-4">
            <span className="font-semibold p-1 px-3 border-2 bg-main-primary rounded-lg border-main-accent">
              Synopsis
            </span>
            : {anime.synopsis}
          </p>
        </div>
        {user && (
          <Comment
            anime_mal_id={anime.mal_id}
            user_email={user?.email}
            username={user.name}
            anime_title={anime.title}
          />
        )}
        <CommentBox anime_mal_id={anime.anime_mal_id} />
      </div>
      <VideoPlayer youtubeId={anime.trailer.youtube_id} />
    </div>
  );
};
export default Page;
