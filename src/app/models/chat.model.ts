import { Member } from "./member.model";

export interface Chat {
  id: number;
  currentUser: Member;
  opponent: Member;
  messages: string[];
}
