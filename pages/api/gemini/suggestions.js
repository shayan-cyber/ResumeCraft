// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { giveSuggestions } from "@/gemini";
export default async function handler(req, res) {
  console.log("hello");
  if(req.method === "POST"){
    const {resumeDescription, title} = req.body;
    console.log("hello");
    const rsp = await giveSuggestions(resumeDescription, title);
    res.status(200).json({ name: "John Doe", text:rsp });

  }
  
}
