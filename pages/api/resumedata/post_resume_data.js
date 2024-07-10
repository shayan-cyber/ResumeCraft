import prisma from "@/lib/prisma";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
export default async function (req, res) {
    if (req.method === "POST") {
        const { query } = req;
        console.log({ query });
        const id = query?.id ? query?.id : null
        console.log({ id });
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { resumeData } = req.body;
        console.log({ resumeData });

        const user = await clerkClient().users.getUser(userId);
        if (id != undefined && id != null) {


            try {

                let data = await prisma.resumeData.findUnique({
                    where: {
                        id: id
                    }
                })
                // console.log({data});


                if (data) {

                    data = await prisma.resumeData.update({
                        where: {
                            id: data[0]?.id
                        },
                        data: {
                            basic_details: {
                                delete: true,
                                create: resumeData?.basic_details
                            },
                            work_details: {
                                deleteMany: [{ resume_data_id: data[0]?.id }],
                                create: resumeData?.work_details
                            },
                            education_details: {
                                deleteMany: [{ resume_data_id: data[0]?.id }],
                                create: resumeData?.education_details
                            },
                            skills_details: resumeData?.skills_details,
                            project_details: {
                                deleteMany: [{ resume_data_id: data[0]?.id }],
                                create: resumeData?.project_details
                            },
                            other_details: resumeData?.other_details ? resumeData?.other_details : []

                        }
                    })
                    // console.log({ data });
                }



                return res.status(200).json({ resumeData: data });

            } catch (e) {

                console.log({ e });
                return res.status(400).json({ error: "Something Went wrong" })

            }

        } else {


            try {
                let data = await prisma.resumeData.create({
                    data: {
                        resume_id: resumeData?.resume_id,
                        user_id: userId,
                        basic_details: {
                            create: resumeData?.basic_details
                        },
                        work_details: {
                            create: resumeData?.work_details
                        },
                        education_details: {
                            create: resumeData?.education_details
                        },
                        skills_details: resumeData?.skills_details,
                        project_details: {
                            create: resumeData?.project_details
                        },
                        other_details: resumeData?.other_details ? resumeData?.other_details : []

                    }
                })

                return res.status(200).json({ resumeData: data });

            } catch (e) {
                console.log({ e });
                return res.status(400).json({ error: "Something Went wrong" })

            }

        }




    } else {
        return res.status(400).json({ error: "Wrong request" })
    }
}