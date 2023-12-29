import { ChatMessageModel } from "@/models/chat-message";

interface ChatInputProps {
  submitCallback: (value: string) => void;
}

export default function ChatInput(props: ChatInputProps): JSX.Element {
  function submitQuery(): void {
    const userInputElement = document.getElementById("chat-input") as HTMLInputElement;

    const userQuery: string = userInputElement.value;
    props.submitCallback(userQuery);

    userInputElement.value = "";
  }

  return (
    <div className="w-full flex justify-center">
      <input
        id="chat-input"
        type="text"
        className="text-gray-50 bg-gray-700 p-3 text-lg rounded rounded-r-none border-r-0 border border-gray-600 w-1/3"
        placeholder="Ask a question..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submitQuery();
          }
        }}
      />
      
      <button
        type="submit"
        className="text-gray-50 bg-gray-700 p-3 text-lg rounded rounded-l-none border border-gray-600 hover:border-gray-300"
        onClick={submitQuery}
      >
        Go
      </button>
    </div>
  );
}
