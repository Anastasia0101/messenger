import { User } from "../../shared/models/user.model";
import { Message } from "./message.model";

export interface Chat {
  id: string;
  participants: User[];
  messages: Message[];
  collocutor: User;
}
