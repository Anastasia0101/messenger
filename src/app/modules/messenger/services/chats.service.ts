import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from, tap, map } from "rxjs";
import { User } from "../../shared/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  activeChat!: Chat;

  constructor(
    private fireStore: AngularFirestore,
  ) { }

  getChats(): Observable<Chat[]> {
    const userRef = this.fireStore.collection('users').doc('ompCzENiYB1cKgU1AnC9').ref;
    return this.fireStore.collection<Chat>('chats', ref => ref.where('participants', 'array-contains', userRef))
      .valueChanges();
  }

  createChat(collocutorId: string): void {
    this.fireStore.collection('chats').add({
      participants: [
        this.fireStore.firestore.doc('users/ompCzENiYB1cKgU1AnC9'),
        this.fireStore.doc('users/' + collocutorId).ref
      ],
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
