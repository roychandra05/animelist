import prisma from "@/libraries/prisma";

export async function POST (request) {
    const { anime_mal_id, user_email, comment, username, anime_title } = await request.json()
    const data = { anime_mal_id, user_email, comment, username, anime_title }

    const createComment = await prisma.comment.create({data})
    if(!createComment) return Response.json({status : 500, isCreate: false})
        else return Response.json({status : 200, isCreate:true})
}