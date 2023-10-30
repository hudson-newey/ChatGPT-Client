import { environment } from "@/environment";
import { ChatMessageModel } from "@/models/chat-message";
import store from "@/store/redux-store";
import OpenAI from "openai";
import { ChatCompletion, ChatCompletionMessage } from "openai/resources/index.mjs";

function apiKey(): string {
    const envKey: string | undefined = environment.openAiApiKey;
    return envKey ?? store.getState().config.apiKey;
}

export async function submitApiQuery(query: string, chatHistory: ChatMessageModel[] = []): Promise<ChatCompletionMessage> {
    const openAi = new OpenAI({
        apiKey: apiKey(),
        dangerouslyAllowBrowser: true,
    });

    const chatCompletion: ChatCompletion = await openAi.chat.completions.create(
        {
            model: environment.openAiModel as any,
            messages: [
                ...chatHistory,
                { role: "user", content: query }
            ],
        }
    );

    return chatCompletion.choices[0].message;
}
