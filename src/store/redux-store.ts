import { environment } from "@/environment";
import { configureStore, createSlice } from "@reduxjs/toolkit";

interface ConfigRedux {
  apiKey: string;
  gptModel: string;
};

const initialState: ConfigRedux = {
    apiKey: loadCachedApiKey(),
    gptModel: "gpt-4",
};

function loadCachedApiKey(): string {
  const envKey: string | undefined = environment.openAiApiKey;

  if (envKey) {
    return envKey;
  }

  return "";
}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        updateApiKey: (state, action) => {
            state.apiKey = action.payload;
        },
        updateGptModel: (state, action) => {
            state.gptModel = action.payload;
        },
    },
});

const store = configureStore({
  reducer: {
    config: configSlice.reducer,
  }
});

export default store;
