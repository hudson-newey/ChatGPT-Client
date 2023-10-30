"use client";
import ChatInput from "@/components/chat-input";
import ChatMessage from "@/components/chat-message";
import ConfigInputs from "@/components/config";
import { ChatMessageModel } from "@/models/chat-message";
import { useState } from "react";

const fakeMessages: ChatMessageModel[] = [
  new ChatMessageModel("assistant", "Hello, how can I help you?"),
];

export default function ChatPage() {
  const [chatMessages, setChatMessages] = useState<ChatMessageModel[]>(fakeMessages);

  return (
    <div className="bg-gray-900 text-gray-50 h-screen">
      <ConfigInputs />

      <div className="flex items-center justify-center overflow-scroll">
        <div className="w-3/5">
            {chatMessages.map((message: ChatMessageModel, i: number) => (
                <ChatMessage
                    key={i}
                    role={message.role}
                    content={message.content}
                />
            ))}
        </div>
      </div>

      <div className="fixed bottom-20 flex items-center justify-center w-full">
          <ChatInput submitCallback={setChatMessages} currentMessages={chatMessages} />
      </div>
    </div>
  );
}
