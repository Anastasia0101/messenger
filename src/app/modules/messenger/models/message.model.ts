import { User } from "../../../models/user.model";

export interface Message {
  text: string;
  dateOfSending: string;
  sender: User;
}
