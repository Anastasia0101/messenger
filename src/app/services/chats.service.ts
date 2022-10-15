import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { HttpClient } from '@angular/common/http';
import { delay, switchMap, from, tap, map, timer, timeout } from "rxjs";
import { User } from "../models/user.model";
import { JokeAnswer } from "../models/joke-answer.model";

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

  saveChat(): void{
    const currentDate = new Date();
    this.fireStore.collection('chats').add({
      currentUser: this.activeChat.currentUser,
      opponent: { nickname: 'Katya202', avatar: this.activeChat.opponent.avatar },
      messages: [{ text: 'Hola!', sender: this.activeChat.currentUser, dateOfSending: currentDate.toString() }]
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

  getJokeAnswer(): void {
    this.httpClient.get<JokeAnswer>('https://api.chucknorris.io/jokes/random').pipe(
      map(res => res.value),
      delay(5000),
      switchMap(answer => (
        this.sendMessage(answer, this.activeChat.opponent)
      ))
    ).subscribe();
  }
}
