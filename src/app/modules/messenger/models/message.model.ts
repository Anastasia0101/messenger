import { User } from "../../shared/models/user.model";

export interface Message {
  text: string;
  dateOfSending: string;
  sender: User;
}
