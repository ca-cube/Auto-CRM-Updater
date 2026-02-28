import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { content, type } = body;

    // In a real app, we would send this to Gemini/OpenAI
    // Here we simulate the logic:

    let stageChange = "Unchanged";
    let confidence = 0.85;
    let explanation = "No clear signals detected.";

    if (content.toLowerCase().includes("pricing") || content.toLowerCase().includes("discount")) {
        stageChange = "Negotiation";
        explanation = "Explicit mention of pricing terms and discounts indicates deal is in negotiation phase.";
        confidence = 0.94;
    } else if (content.toLowerCase().includes("demo") || content.toLowerCase().includes("show me")) {
        stageChange = "Discovery/Demo";
        explanation = "Request for a product demonstration identifies movement towards technical evaluation.";
        confidence = 0.88;
    } else if (content.toLowerCase().includes("signed") || content.toLowerCase().includes("contract")) {
        stageChange = "Closing";
        explanation = "Legal and contractual discussions indicate final closing steps.";
        confidence = 0.98;
    }

    return NextResponse.json({
        stageChange,
        confidence,
        explanation,
        timestamp: new Date().toISOString()
    });
}
