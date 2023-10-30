"use client";

function submitQuery(): void {
    // clear the chat input box
    const chatInput: HTMLInputElement = document.getElementById("chat-input") as HTMLInputElement;
    chatInput.value = "";
}

export default function ChatInput(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
      <input
        id="chat-input"
        type="text"
        className="text-gray-50 bg-gray-700 p-2 rounded rounded-r-none border-r-0 border border-gray-600 w-1/3"
        placeholder="Ask a question..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submitQuery();
          }
        }}
      />
      
      <button
        type="submit"
        className="text-gray-50 bg-gray-700 p-2 rounded rounded-l-none border border-gray-600 hover:border-gray-300"
        onClick={submitQuery}
      >
        Go
      </button>
    </div>
  );
}
