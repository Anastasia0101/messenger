import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
  chats$!: Observable<Chat[]>;

  constructor(
    public chatsService: ChatsService
  ) { }

  ngOnInit(): void {
    this.chats$ = this.chatsService.chats$;
  }
}
