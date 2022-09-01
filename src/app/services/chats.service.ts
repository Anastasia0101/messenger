import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { Observable } from "rxjs/internal/Observable";
import { AngularFirestore, DocumentReference } from "@angular/fire/compat/firestore";
import { HttpClient } from '@angular/common/http';
import { delay, switchMap, from, tap, map } from "rxjs";
import { User } from "../models/user.model";
import { Message } from "../models/message.model";
import { UserService } from "./users.service";

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  activeChat?: Chat;
  opponent!: User;
  currDate = new Date();
  chats$!: Observable<Chat[]>;

  constructor(
    private fireStore: AngularFirestore,
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  getChats(): Observable<Chat[]> {
    this.chats$ = this.fireStore.collection<Chat>('chats').valueChanges({idField: 'id'});
    return this.chats$;
  }

  getChatById(id: string): Observable<Chat | undefined> {
    return this.fireStore.collection<Chat>('chats').doc(id).valueChanges({idField: 'id'});
  }

  activateChat(chatId: string): Observable<Chat | undefined> {
    return this.getChatById(chatId).pipe(
      tap(chat => {
        this.activeChat = chat;
        this.userService.opponent = chat!.opponent;
      })
    )
  }

  sendMessage(chat: Chat, message: Message): void {
    this.fireStore.collection<Chat>('chats').doc(chat.id).update({...chat, messages: [...chat.messages, message]});
  }

  // getJokeAnswer(): void {
  //   this.httpClient.get<JokeAnswer>('https://api.chucknorris.io/jokes/random')
  //   .pipe(
  //     switchMap((answer) => {
  //       return this.sendMessage({ text: answer.value, sender: this.opponent, dateOfSending: currDate })
  //     }));
  // }
}

