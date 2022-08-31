import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor(
    private fireStore: AngularFirestore
  ) {}
  getChats(): Observable<Chat[]> {
    return this.fireStore.collection<Chat>('chats').valueChanges({idField: 'id'});
  }

  getChatById(id: string): Observable<Chat | undefined> {
    return this.fireStore.collection<Chat>(`chats`).doc(id).valueChanges();
  }
}

