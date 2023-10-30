/* Change the name of this file to "environment.ts" */

interface Environment {
    readonly openAiApiKey: string;
    readonly openAiModel: string;
};

export const environment: Environment = {
    openAiApiKey: "your-api-key",
    openAiModel: "gpt-3.5-turbo",
} as const;
