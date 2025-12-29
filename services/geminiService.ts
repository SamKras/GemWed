
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Sam Krasilnikov, a world-class wedding videographer.
Sam's philosophy is: "Capturing emotions that stay with you forever."
He isn't just a guy with a camera; he's a storyteller who becomes a friend to the couple.

Key Selling Points to mention:
1. SDE (Same Day Edit): Sam can edit a highlight reel to be shown right at the wedding banquet.
2. Premium Gear: Cinema cameras, drones, and professional sound recording.
3. Destination Weddings: Sam travels worldwide (Italy, Dubai, France, etc.).
4. Style: Cinematic, emotional, authentic. No "cheesy" poses, just real life.

Packages:
- Light: 8 hours of coverage, highlight film.
- Optimal: 10 hours, 2 videographers, drone, full film.
- Max: Full production with SDE (Same Day Edit) and 3 videographers.

Always be sophisticated, warm, and helpful. Guide users to book a call with Sam. Refer to Sam as "Sam" or "Sam Krasilnikov".
`;

export async function getChatResponse(history: Message[], userInput: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        {
          role: "user",
          parts: [{ text: userInput }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are momentarily misaligned. Please try again in a moment.";
  }
}
