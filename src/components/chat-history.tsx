import { ChatMessageModel } from "@/models/chat-message";
import ChatMessage from "./chat-message";

export default function ChatHistory() {
    const messages: ChatMessageModel[] = [
        new ChatMessageModel("User", "How tall is the empire state building"),
        new ChatMessageModel("Assistant", "Something something ft"),
    ];
    
    return (
        <div>
            {messages.map((message: ChatMessageModel) => (
                <ChatMessage
                    key={message.id}
                    role={message.role}
                    text={message.text}
                />
            ))}
        </div>
    );
}
