import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { HttpClient } from '@angular/common/http';
import { from, tap, map } from "rxjs";
import { User } from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  activeChat!: Chat;

  constructor(
    private fireStore: AngularFirestore,
    private httpClient: HttpClient,
  ) { }

  getChats(): Observable<Chat[]> {
    return this.fireStore.collection<Chat>('chats').valueChanges({ idField: 'id' });
  }

  get chats$(): Observable<Chat[]> {
    return this.getChats();
  }

  saveChat(currUser: User, opponent: User): void {
    this.fireStore.collection('chats').add({
      participants: [ currUser, opponent ],
      messages: []
    });
  }

  getChatById(id: string): Observable<Chat> {
    return this.fireStore.collection<Chat>('chats').doc(id).valueChanges({ idField: 'id' }).pipe(
      map(chat => chat!)
    );
  }

  activateChat(chatId: string): Observable<Chat> {
    return this.getChatById(chatId).pipe(
      tap(chat => {
        this.activeChat = chat;
      })
    );
  }

  sendMessage(messageText: string, sender: User): Observable<void> {
    const currentDate = new Date();
    const message = { text: messageText, sender: sender, dateOfSending: currentDate.toString() };
    return from(this.fireStore.collection<Chat>('chats').doc(this.activeChat.id).update({
      ...this.activeChat, messages: [...this.activeChat.messages, message]
    }));
  }
}
