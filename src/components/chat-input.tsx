"use client";

import { ChatMessageModel } from "@/models/chat-message";
import { submitApiQuery } from "@/services/openai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

interface ChatInputProps {
    submitCallback: (value: any) => any;
    currentMessages: ChatMessageModel[];
}

export default function ChatInput(props: ChatInputProps): JSX.Element {
  async function submitQuery(): Promise<void> {
      const userInputElement = document.getElementById("chat-input") as HTMLInputElement;
    
      const userQuery: string = userInputElement.value;
    
      // clear the chat input box
      userInputElement.value = "";

      // get the current chat messages
      const currentMessages: ChatMessageModel[] = props.currentMessages;

      const newMessages: ChatMessageModel[] = [
        ...currentMessages,
        new ChatMessageModel("user", userQuery),
      ];

      // add the user's message to the chat
      props.submitCallback(newMessages);

      const modelResponse: ChatCompletionMessage = await submitApiQuery(
        userQuery,
        currentMessages
      );

      // add the model's response to the chat
      props.submitCallback([
        ...newMessages,
        new ChatMessageModel(modelResponse.role, modelResponse.content ?? "An error occured."),
      ]);
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
