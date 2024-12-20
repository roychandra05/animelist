import React from "react";
import { Header } from "@/components/DashBoard/Header";
import CollectionsAnime from "@/components/DashBoard";
import prisma from "@/libraries/prisma";
import authSession from "@/libraries/authSession";

export const Page = async () => {
  const user = await authSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  const malId = collection.map(value => value.anime_mal_id)
  return (
    <div>
      <div className="flex flex-col px-4">
        <div className="">
          <Header title={"Collection"} />
        </div>
        <CollectionsAnime collection={malId}/>
      </div>
    </div>
  );
};
export default Page;