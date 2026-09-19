import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, systemPrompt, model = "llama-3.3-70b-versatile", max_tokens = 500, temperature = 0.7 } = await req.json();

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY environment variable not configured" }, { status: 500 });
    }

    const messages = [];
    if (systemPrompt) {
      messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const startTime = Date.now();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        max_tokens: max_tokens,
        temperature: temperature,
      }),
    });

    const endTime = Date.now();
    const latencyMs = endTime - startTime;

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error:", errorText);
      return NextResponse.json({ error: "Failed to fetch from Groq API", detail: errorText }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response received";
    const usage = data.usage || { total_tokens: 0 };
    const tokensPerSec = usage.completion_tokens ? Math.round((usage.completion_tokens / (latencyMs / 1000))) : 0;

    return NextResponse.json({
      reply,
      latencyMs,
      tokensPerSec,
      modelUsed: data.model || model,
      usage,
    });
  } catch (err: any) {
    console.error("Internal Groq Route Error:", err);
    return NextResponse.json({ error: "Internal Server Error", detail: err.message }, { status: 500 });
  }
}
