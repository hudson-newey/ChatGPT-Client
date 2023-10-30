"use client";
import store from "@/store/redux-store";
import { useState } from "react";

function updateApiKey(changeEvent: React.ChangeEvent<HTMLInputElement>): void {
  if (changeEvent.target === null) return;

  const apiKey: string = changeEvent.target.value;

  store.dispatch({
    type: "updateApiKey",
    payload: apiKey,
  });
}

function updateGptModel(
  changeEvent: React.ChangeEvent<HTMLSelectElement>
): void {
  if (changeEvent.target === null) return;

  const gptModel: string = changeEvent.target.value;
  
  store.dispatch({
    type: "UPDATE_GPT_MODEL",
    payload: gptModel,
  });
}

export default function ConfigInputs(): JSX.Element {
  const [isConfigShown, toggleConfig] = useState(true);

  return (
    <div className="fixed bg-gray-800 w-96 p-3 rounded-r rounded-b m-2">
      <div>
        <a
          className="cursor-pointer select-none"
          onClick={() => toggleConfig(!isConfigShown)}
        >
          <b>
            { isConfigShown ? "Hide Configuration" : "Show Configuration" }
          </b>
        </a>
      </div>

      { isConfigShown &&
      <div>
        <div className="mt-5">
          <label htmlFor="api-key">Api Key</label>
          <input
            type="text"
            name="api-key"
            className="bg-gray-700 p-1 m-1 rounded"
            onChange={updateApiKey}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="model-selector">OpenAI Model</label>
          <select
            name="model-selector"
            className="bg-gray-700 p-1 m-1 rounded"
            onChange={updateGptModel}
            defaultValue="gpt-4"
          >
            <option value="gpt-4">
              GPT 4
            </option>
            <option value="gpt-3.5-turbo">GPT 3.5</option>
            <option value="davinci">GPT 3</option>
          </select>
      </div>
      </div>
      }
    </div>
  );
}
