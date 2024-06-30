const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
const chat = model.startChat({
  generationConfig,
  history: [
  ],
});
export async function genDescription(description) {

  try{

    const prompt = `Description: ${description} , Depending on the work description give me list(more than two options) of summaries (in 3 -4 lines) in array format from which I can choose one,  in JSON Format(a list of strings)`

    const result = await chat.sendMessage(prompt);

    let text = result.response.text();
    text = JSON.parse(text)
    console.log({text});
    return text;

  }catch(e){
    console.log({e});

    return {
      description:"Give Another Description"
    }
  }
  
}



export async function calculateATS(jobDescription, resumeText) {
 

  const prompt = `Calculate a resume score out of 100 for resume description given below with respect to Job Description (You must give me a score, use any score algorithm, use keyword matching, Skills Match, Experience, Education ) example :{
    resume_score:score,
    breakdown:breakdown,
    details:details
  }) : Resume Description :(${resumeText}) , Job Description : (${jobDescription})`

  const result = await chat.sendMessage(prompt);
  console.log(result.response.text());
  const text = JSON.parse(result.response.text());
  return text;

}



export async function giveSuggestions(resumeDescription, title){
  const prompt = `Resume Desccription : ${resumeDescription}, Job Title :${title} , Depending on the resume description give me some suggestions , example :{
    experience : experience description suggestions,(a string)
    project : project description suggestions,(a string)
    skills : suggestions based on skills(a string)
  }`
  const result = await chat.sendMessage(prompt);
  console.log(result.response.text());
  const text = JSON.parse(result.response.text());
  return text;
}

