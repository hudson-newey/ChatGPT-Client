"use client";
import ChatInput from "@/components/chat-input";
import ConfigInputs from "@/components/config";
import ChatHistory from "@/components/chat-history";
import { ChatMessageModel } from "@/models/chat-message";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { submitApiQuery } from "@/services/openai";
import { useState } from "react";

const initialMessages: ChatMessageModel[] = [
  new ChatMessageModel("assistant", "Hello, how can I help you?"),
];

export default function ChatPage() {
  const [chatMessages, setChatMessages] = useState<ChatMessageModel[]>(initialMessages);

  async function addNewChatMessage(message: string): Promise<void> {
    const modelResponse: ChatCompletionMessage = await submitApiQuery(
      message,
      chatMessages
    );

    const newUserMessage = new ChatMessageModel("user", message);
    const modelResponseMessage = new ChatMessageModel(
      modelResponse.role,
      modelResponse.content ?? "An error occured"
    );

    setChatMessages([
      ...chatMessages,
      newUserMessage,
      modelResponseMessage
    ]);
  }

  return (
    <div className="bg-gray-900 text-gray-50 h-screen">
      <ConfigInputs />

      <div className="flex justify-center">
        <ChatHistory chatMessages={chatMessages} />
      </div>

      <div className="fixed bottom-20 flex items-center justify-center w-full">
          <ChatInput submitCallback={addNewChatMessage} />
      </div>
    </div>
  );
}
