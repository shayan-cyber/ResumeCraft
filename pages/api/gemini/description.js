// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { genDescription } from "@/gemini";
export default async function handler(req, res) {
  console.log("hello");
  if(req.method === "POST"){
    const {promptDescription} = req.body;
    console.log("hello");
    const rsp = await genDescription(promptDescription);
    res.status(200).json({ name: "John Doe", text:rsp });

  }
  
}
