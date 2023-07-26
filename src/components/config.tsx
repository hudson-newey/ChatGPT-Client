"use client";

const initialState = {
  value: 1
};

function configReducer(state = initialState, action: any) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export default function ConfigInputs() {
  function updateApiKey() {}

  function updateGptModel() {}

  return (
    <div className="bg-gray-800 w-96 p-3 rounded-r rounded-b">
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
        >
          <option value="gpt-4">GPT 4</option>
          <option value="gpt-3.5">GPT 3.5</option>
          <option value="gpt-3">GPT 3</option>
        </select>
      </div>
    </div>
  );
}
