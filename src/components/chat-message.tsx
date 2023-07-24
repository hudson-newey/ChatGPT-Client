import { ChatMessageModel, IChatMessage } from "@/models/chat-message";

export default function ChatMessage(props: IChatMessage) {
  const message: ChatMessageModel = new ChatMessageModel(
    props.role,
    props.text
  );

  if (message.role) {
    return (
      <div className="bg-gray-700 border border-gray-500 rounded p-4 m-4">
        <div className="text-gray-50 font-bold">{message.role}</div>
        <div className="text-gray-50">{message.text}</div>
      </div>
    );
  }
}
