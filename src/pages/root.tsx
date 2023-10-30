import ChatHistory from "@/components/chat-history";
import ChatInput from "@/components/chat-input";
import ConfigInputs from "@/components/config";

export default function RootPage() {
  return (
    <div className="bg-gray-900 text-gray-50 h-screen">
      <ConfigInputs />

      <div className="flex items-center justify-center">
        <div className="w-3/5">
          <ChatHistory />
        </div>
      </div>

      <div className="fixed bottom-20 flex items-center justify-center w-full">
          <ChatInput />
      </div>
    </div>
  );
}
