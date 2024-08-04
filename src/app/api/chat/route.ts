import { google } from "@ai-sdk/google"
import { streamText, generateId } from "ai"

export const maxDuration = 60;

export async function POST(req: Request) {
    const { messages } = await req.json()

    const result = await streamText({
        model: google('models/gemini-1.5-flash-latest'),
        messages
    })

    return result.toDataStreamResponse()
}