export interface IChatMessage {
    role: string;
    text: string;
}

export class ChatMessageModel implements IChatMessage {
    public role: string;
    public text: string;
    public id: number = 1;

    public constructor(role: string, text: string) {
        this.role = role;
        this.text = text;
    }
}