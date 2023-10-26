import {NextResponse} from "next/server";
import prisma from "@/app/src/utils/connect";
import {getAuthSession} from "@/app/src/utils/auth";

//GET THE COMMENTS OF A POST
export const GET = async (req)=> {
    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get("postSlug");
try {

        const comments = await prisma.comment.findMany({
           where: {
               ...(postSlug && {postSlug}),
           },
            include: {user: true},
        });


        return new NextResponse(JSON.stringify(comments, {status: 200}))

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}, {status: 500}))
    }
}

//CREATE A COMMENT
export const POST = async (req)=> {
    const session = getAuthSession();
    const postSlug = searchParams.get("postSlug");
    try {

        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug}),
            },
            include: {user: true},
        });


        return new NextResponse(JSON.stringify(comments, {status: 200}))

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}, {status: 500}))
    }
}