import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCES, SKILLS, EDUCATION, PAPERS } from '../constants';

// Initialize Gemini
// NOTE: In a real production app, you should proxy this through a backend to hide the key.
// Since this is a portfolio demo running client-side, we assume the env var is set.
const apiKey = process.env.API_KEY || ''; 
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const chatWithResume = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "Demo Mode: Please configure your API_KEY to enable the AI assistant. (I can't answer for real right now!)";
  }

  const contextData = JSON.stringify({
    profile: PROFILE,
    skills: SKILLS,
    experience: EXPERIENCES,
    education: EDUCATION,
    papers: PAPERS
  });

  const systemInstruction = `
You are an AI assistant on ${PROFILE.name}'s portfolio.
Answer strictly from the JSON resume data below.
Style: concise, readable, direct; <=80 words unless asked for more.
If missing info, say you don't have that and invite contact.
Highlight AI/ML/Data skills when relevant.
Resume JSON:
${contextData}
`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] }, // Priming the context in the first turn for statelessness simplicity or use systemInstruction in config
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: "You are a helpful portfolio assistant.", // Optional if context passed in prompt
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later.";
  }
};