import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // A check for the developer to ensure the API key is set.
  // This will not be shown to the user in production.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateJournalPrompt = async (userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a creative assistant for travelers. Based on the following description of a place or feeling, generate a short, inspiring, and thought-provoking journaling prompt (one sentence) to help the user capture their memories. The prompt should be evocative and open-ended.

User input: "${userInput}"

Journaling Prompt:`,
    });
    
    const text = response.text.trim();
    // Remove any markdown like quotes if they exist
    return text.replace(/^"|"$/g, '');

  } catch (error) {
    console.error("Error generating journal prompt:", error);
    throw new Error("Failed to generate prompt from Gemini API.");
  }
};
