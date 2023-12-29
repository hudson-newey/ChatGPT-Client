"use client";
import ChatMessage from "@/components/chat-message";
import { ChatMessageModel } from "@/models/chat-message";

interface ChatHistoryProps {
    chatMessages: ChatMessageModel[];
}

export default function ChatHistory(props: ChatHistoryProps) {
    const chatMessages: ChatMessageModel[] = props.chatMessages;

    return (
        <div className="absolute w-3/5 h-4/5 overflow-scroll">
            {chatMessages.map((message: ChatMessageModel, i: number) => (
                <ChatMessage
                    key={i}
                    role={message.role}
                    content={message.content}
                />
            ))}
        </div>
    );
}
