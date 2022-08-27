import { Injectable } from "@angular/core";
import { Chat } from "../models/chat.model";
import { chats } from '../data/chats';
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";

Injectable({
  providedIn: 'root',
})
export class ChatsService {
  getChats(): Observable<Chat[]> {
    return of(chats);
  }

  getChatById(id: number): Observable<Chat> {
    return of(chats.find(el => el.id == id)!);
  }
}

