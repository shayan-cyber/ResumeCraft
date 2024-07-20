// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { calculateATS } from "@/gemini";
export default async function handler(req, res) {

    if (req.method === "POST") {
        const { resumeDescription, jobDescription } = req.body;
        const rsp = await calculateATS(jobDescription, JSON.stringify(resumeDescription));
        res.status(200).json({ name: "John Doe", text: rsp });

    }

}
