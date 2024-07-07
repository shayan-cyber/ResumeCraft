import prisma from "@/lib/prisma";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
export default async function (req, res) {
    if (req.method === "GET") {
        try {
            const { userId } = getAuth(req);
            if (!userId) {
                return res.status(401).json({ error: "Unauthorized" });
            }

            const user = await clerkClient().users.getUser(userId);
            const resumeData = await prisma.resumeData.findFirst({
                where: {
                    user_id: userId
                },
                include: {
                    basic_details: true,
                    work_details: true,
                    education_details: true,
                    project_details: true
                }
            })

            return res.status(200).json({ resumeData: resumeData });
        } catch (e) {
            return res.status(400).json({ error: "Something Went Wrong" });
        }
    }else{
        return res.status(400).json({error:"Wrong request"})
    }
}