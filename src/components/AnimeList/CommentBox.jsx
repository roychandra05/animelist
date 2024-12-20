import prisma from "@/libraries/prisma";

export const CommentBox = async ({ anime_mal_id }) => {
  const response = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-main-secondary">Comments :</h1>
      {response.map((anime, i) => {
        return (
          <div
            key={i}
            className="w-full bg-main-secondary border-4 border-main-accent my-2 rounded-r-xl rounded-bl-xl p-2 drop-shadow-lg"
          >
            <h3 className="font-bold"> 😎 {anime.username}</h3>
            <p>{anime.comment}</p>
          </div>
        );
      })}
    </>
  );
};
export default CommentBox;
