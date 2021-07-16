import { message } from "./message";

export interface conversation {
    // name: string,
    // time: string,
    latestMessage: string,
    // lastestMessageRead: boolean,
    messages: message[]
}