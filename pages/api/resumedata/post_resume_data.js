import prisma from "@/lib/prisma";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
export default async function (req, res) {
    if (req.method === "POST") {
        try {
            const { userId } = getAuth(req);
            if (!userId) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            const { resumeData } = req.body;
            const user = await clerkClient().users.getUser(userId);
            const data = await prisma.resumeData.create({
                data: {
                    resume_id: resumeData?.resume_id,
                    user_id: userId,
                    basic_details: {
                        create: resumeData?.basic_details
                    },
                    work_details: {
                        create: [...resumeData?.work_details]
                    },
                    education_details: {
                        create: [...resumeData?.education_details]
                    },
                    skills_details: [...resumeData?.skills_details],
                    project_details: {
                        create: [...resumeData?.project_details]
                    },
                    other_details: {
                        create: [...resumeData?.other_details]
                    }

                }
            })

            return res.status(200).json({ resumeData: data });

        } catch (e) {

            console.log({e});
            return res.status(400).json({error:"Something Went wrong"})

        }



    }
}