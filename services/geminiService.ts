import { GoogleGenAI } from "@google/genai";
import { ItineraryDay } from "../types";

const apiKey = process.env.API_KEY || '';

// Safely initialize, but warn if missing.
// We do not throw immediately to allow the UI to render the static itinerary part even if AI fails.
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("API_KEY is not defined in process.env");
}

export const getTravelAssistance = async (
  query: string, 
  currentDayData: ItineraryDay | undefined,
  allItinerary: ItineraryDay[]
): Promise<string> => {
  if (!ai) {
    return "請確認系統環境變數中已設定 API Key 以啟用 AI 導遊功能。";
  }

  try {
    const context = currentDayData 
      ? `目前使用者正在瀏覽第 ${currentDayData.day} 天的行程：${currentDayData.title}。` 
      : "使用者正在瀏覽總覽行程。";

    // Create a summarized string of the itinerary for context
    const itinerarySummary = JSON.stringify(allItinerary.map(d => ({
        day: d.day,
        title: d.title,
        activities: d.activities.map(a => `${a.time} ${a.title} @ ${a.location}`).join(', ')
    })));

    const systemInstruction = `
      你是一位專業、熱情且貼心的私人旅遊導遊。
      你的任務是協助旅客解決關於這個「8天7夜旅遊行程」的問題。
      
      以下是完整的行程表資料：
      ${itinerarySummary}

      當前情境：${context}

      回答原則：
      1. 針對使用者的問題提供具體、實用的建議。
      2. 如果問題關於某個地點，可以補充該地點的歷史小知識或必吃美食。
      3. 回答簡潔有力，適合在手機閱讀。
      4. 保持繁體中文回答。
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "抱歉，我現在無法回答您的問題，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "連線發生錯誤，請稍後再試。";
  }
};
