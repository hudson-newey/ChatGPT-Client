/* Change the name of this file to "environment.ts" */

interface Environment {
    // if you set development to "true", you do not need an api key
    // however, the client will return fake data
    readonly development: boolean;
    readonly openAiApiKey: string;
    readonly openAiModel: string;
};

export const environment: Environment = {
    development: true,
    openAiApiKey: "your-api-key",
    openAiModel: "gpt-3.5-turbo",
} as const;
