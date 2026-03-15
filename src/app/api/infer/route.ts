import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are an expert CRM Sales Auditor. Your task is to analyze sales signals (emails, call transcripts) and infer the current deal stage.
Stages: Qualification, Discovery, Proposal, Negotiation, Closing, Closed Won, Closed Lost.

Analyze the provided signal and return a JSON object with:
1. stageChange: The inferred stage (must be one of the stages above).
2. confidence: A float between 0 and 1 representing your certainty.
3. explanation: A brief, professional reasoning for this inference (max 2 sentences).
4. intent: A 2-3 word summary of the user's intent.

Example Output:
{
  "stageChange": "Negotiation",
  "confidence": 0.85,
  "explanation": "Buyer asked for pricing flexibility and mentioned budget approval. This indicates they are in final terms discussion.",
  "intent": "Pricing Inquiry"
}
`;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { content, type } = body;

        if (!process.env.GEMINI_API_KEY) {
            // Fallback for demo if no key is provided
            return NextResponse.json({
                stageChange: "Discovery",
                confidence: 0.75,
                explanation: "Please configure GEMINI_API_KEY for real-time analysis. (Fallback active)",
                intent: "General Inquiry",
                timestamp: new Date().toISOString()
            });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `${SYSTEM_PROMPT}\n\nSignal Type: ${type}\nSignal Content: "${content}"`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Clean the response if it contains markdown code blocks
        const cleanedJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        const inference = JSON.parse(cleanedJson);

        return NextResponse.json({
            ...inference,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("Inference Error:", error);
        return NextResponse.json({ error: "Failed to process inference" }, { status: 500 });
    }
}
