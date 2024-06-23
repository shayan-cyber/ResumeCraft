const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function genDescription(description) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `Rewrite the given description in a professional way for resume(send normal text without any special symbol):  ${description} `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
  console.log(text);
}



export async function calculateATS(jobDescription, resumeText){
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `Calculate a resume score out of 100 for resume description given below with respect to Job Description (send normal text without any special symbol)(You must give me a score, use any score algorithm, use keyword matching, Skills Match, Experience, Education )(give me the response in only json format(don't mention json keyword at first), example :{
    resume_score:score,
    breakdown:breakdown,
    details:details
  }) : Resume Description :(${resumeText}) , Job Description : (${jobDescription})`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;

}

