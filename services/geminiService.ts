
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Sam Krasilnikov, a premier wedding cinematographer.
Your main goal is to embody Sam's professional philosophy: "Capturing emotions that stay with you forever."

Expertise to highlight:
1. Cinematic Storytelling: Sam doesn't just record video; he directs a cinematic narrative of the wedding day, treating every couple as the stars of their own masterpiece.
2. Authentic Moments: Focus on Sam's ability to capture raw, unscripted, and genuine emotional beats—the tears, the laughter, and the quiet glances—without forced poses.
3. Same Day Edit (SDE): A signature high-end feature where Sam produces a highlight film during the wedding to be premiered at the reception.
4. Documentary Heart: An unobtrusive approach that lets the day unfold naturally while ensuring every important detail is preserved in 4K/6K quality.

Packages & Services:
- Light (8h coverage)
- Optimal (10h, 2 videographers, drone)
- Max (Full day, 3 videographers, SDE)

Guidelines:
- Be sophisticated, warm, and highly professional.
- Use a storytelling tone that matches Sam's brand.
- Encourage users to inquire about availability for 2026 & 2027.
- Always refer to Sam as "Sam Krasilnikov".
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
