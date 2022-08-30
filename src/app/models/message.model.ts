import { Member } from "./member.model";

export interface Message {
  text: string;
  dateOfSending: Date;
  sender: Member;
}


