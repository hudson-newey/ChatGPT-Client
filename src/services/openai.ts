import { environment } from "@/environment";
import { ChatMessageModel } from "@/models/chat-message";
import store from "@/store/redux-store";
import OpenAI from "openai";
import { ChatCompletion, ChatCompletionMessage } from "openai/resources/index.mjs";

const developmentResponse: ChatCompletionMessage = {
    role: "assistant",
    content: "This is a fake response. To enable real reponses, provide a development key in environment.ts"
};

const openAi = new OpenAI({
    apiKey: apiKey(),
    dangerouslyAllowBrowser: true,
});

// because of JS hoisting, we don't need to put this function declaration
// before the openAi object declaration
function apiKey(): string {
    const envKey: string | undefined = environment.openAiApiKey;
    return envKey ?? store.getState().config.apiKey;
}

export async function submitApiQuery(
    query: string,
    chatHistory: ChatMessageModel[] = []
): Promise<ChatCompletionMessage> {
    if (environment.development) {
        return developmentResponse;
    }

    console.log(openAi);

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
