// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { calculateATS } from "@/gemini";
export default async function handler(req, res) {
    console.log("hello");
    if (req.method === "POST") {
        const { resumeDescription, jobDescription } = req.body;
        console.log({resumeDescription});
        console.log("hello");
        const rsp = await calculateATS(jobDescription, JSON.stringify(resumeDescription));
        // console.log({rsp});
        res.status(200).json({ name: "John Doe", text: rsp });

    }

}
