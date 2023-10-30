type Role = "function" | "system" | "user" | "assistant";

export interface IChatMessage {
    role: Role;
    content: string;
}

export class ChatMessageModel implements IChatMessage {
    public role: Role;
    public content: string;

    public constructor(role: Role, content: string) {
        this.role = role;
        this.content = content;
    }
}
