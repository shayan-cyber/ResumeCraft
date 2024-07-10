import prisma from "@/lib/prisma";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
export default async function (req, res) {
    if (req.method === "GET") {
        const { query } = req;
        console.log({ query });
        const id = query?.id ? query?.id : null
        if (id) {
            try {
                const { userId } = getAuth(req);
                if (!userId) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const user = await clerkClient().users.getUser(userId);
                const resumeData = await prisma.resumeData.findFirst({
                    where: {
                        id:id
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
                console.log({e});
                return res.status(400).json({ error: "Something Went Wrong" });
            }
        }else{

            try {
                const { userId } = getAuth(req);
                if (!userId) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const user = await clerkClient().users.getUser(userId);
                const resumeData = await prisma.resumeData.findMany({
                    where: {
                        user_id: userId,
                        // resume_id:parseInt(resumeID)
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
                console.log({e});
                return res.status(400).json({ error: "Something Went Wrong" });
            }

        }

    } else {
        return res.status(400).json({ error: "Wrong request" })
    }
}