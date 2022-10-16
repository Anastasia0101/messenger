import { User } from "./user.model";

export interface Message {
  text: string;
  dateOfSending: string;
  sender: User;
}
