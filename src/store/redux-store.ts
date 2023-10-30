const initialState: ConfigRedux = {
    apiKey: "",
    gptModel: "gpt-4",
};

interface ConfigRedux {
  apiKey: string;
  gptModel: string;
};

interface ReduxReducer {
  type: string;
  payload: ConfigRedux;
};

export const reducer = (state = initialState, action: ReduxReducer) => {
  switch (action.type) {
    case "UPDATE_API_KEY":
      return {
        ...state,
        apiKey: action.payload.apiKey,
      };

    case "UPDATE_GPT_MODEL":
      return {
        ...state,
        gptModel: action.payload.gptModel,
      };

    default:
      return state;
  }
};
