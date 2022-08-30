import { Member } from "./member.model";
import { Message } from "./message.model";

export interface Chat {
  id: number;
  currentUser: Member;
  opponent: Member;
  messages: Message[];
}
