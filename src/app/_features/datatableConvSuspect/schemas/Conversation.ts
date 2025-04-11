import { Message } from "./Message";

export type Conversation = {
  id: string;
  profile: string;
  numberOfMessages: number;
  messages: Message[];
};
