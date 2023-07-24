import { useState } from "react";

export default function ConfigInputs() {
    const [apiKey, setApiKey] = useState("");
    const [gptModel, setGptModel] = useState("gpt-4");

    function updateApiKey(event: React.ChangeEvent<HTMLInputElement>): void {
        setApiKey(event.target.value);
    }

    function updateGptModel(event: React.ChangeEvent<HTMLSelectElement>): void {
        setGptModel(event.target.value);
    }

    return (
        <div className="bg-gray-800 w-96 p-3 rounded-r rounded-b">
            <div className="mt-5">
                <label htmlFor="api-key">Api Key</label>
                <input type="text" name="api-key" className="bg-gray-700 p-1 m-1 rounded" value={apiKey} onChange={updateApiKey} />
            </div>

            <div className="mt-5">
                <label htmlFor="model-selector">OpenAI Model</label>
                <select name="model-selector" className="bg-gray-700 p-1 m-1 rounded" value={gptModel} onChange={updateGptModel}>
                    <option value="gpt-4">GPT 4</option>
                    <option value="gpt-3.5">GPT 3.5</option>
                    <option value="gpt-3">GPT 3</option>
                </select>
            </div>
        </div>
    );
}
