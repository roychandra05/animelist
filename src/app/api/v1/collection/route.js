import prisma from "@/libraries/prisma";
export async function POST (request) {
  const { anime_mal_id, user_email } = await request.json();
  const data = { anime_mal_id, user_email };

  const createCollection = await prisma.collection.create({ data });
  if (!createCollection) return Response.json({ status: 500, isCreate: false });
  else return Response.json({ status: 200, isCreate: true });
}
