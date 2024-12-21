import React from "react";
import prisma from "@/libraries/prisma";
import authSession from "@/libraries/authSession";
import Link from "next/link";
import Header from "@/components/DashBoard/Header";

export const Page = async () => {
  const user = await authSession();
  const response = await prisma.comment.findMany({
    where: {
      username: user.name,
    },
  });
  console.info(response);

  return (
    <section> 
    <Header title={"Collection"} />
      <h1 className="text-2xl font-bold text-main-secondary  px-4">
        Your Comments :
      </h1>
      <div className="p-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {response.map((anime, i) => {
          return (
            <Link href={`/anime/${anime.id}`}
              key={i} 
              className="w-full overflow-auto bg-main-secondary border-4 border-main-accent my-2 rounded-r-xl rounded-bl-xl p-2 drop-shadow-lg"
            >
              <p className="font-light italic mb-2">-{anime.anime_title}</p>
              <p className="">{anime.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Page;
