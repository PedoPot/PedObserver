import { Message } from "./Message";

export type Conversation = {
  id: string;
  suspect: string;
  numberOfMessages: number;
  messages: Message[];
};
