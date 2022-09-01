import { User } from "./user.model";

export interface Message {
  text: string;
  dateOfSending: Date;
  sender: User;
}
