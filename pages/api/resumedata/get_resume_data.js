import prisma from "@/lib/prisma";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
export default async function (req, res){
    if(req.method === "GET"){

        const {userId} = getAuth(req);
        if(!userId){
            return res.status(401).json({ error: "Unauthorized" });
        }

        const user = await clerkClient().users.getUser(userId);
        const resumeData = await prisma.resumeData.findFirst({
            where:{
                user_id :userId
            }
        })

        return res.status(200).json({ resumeData: resumeData});


    }
}