import ChatInput from "@/components/chat-input";
import ChatMessage from "@/components/chat-message";
import ConfigInputs from "@/components/config";
import { ChatMessageModel } from "@/models/chat-message";

export default function RootPage() {
  const messages: ChatMessageModel[] = [
    new ChatMessageModel("User", "How tall is the empire state building"),
    new ChatMessageModel("Assistant", "Something something ft"),
  ];

  return (
    <div className="bg-gray-900 text-gray-50 h-screen">
      <ConfigInputs />

      <div className="flex items-center justify-center">
        <div className="w-1/2">
          {messages.map((message: ChatMessageModel) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              text={message.text}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ChatInput />
      </div>
    </div>
  );
}
