import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from "../models/user.model";
import { ChatsService } from "./chats.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = {nickname: 'Nastya0101', avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'};
  opponent!: User;
}

