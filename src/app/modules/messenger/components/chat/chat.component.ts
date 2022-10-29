import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Chat } from 'src/app/modules/messenger/models/chat.model';
import { ChatsService } from 'src/app/modules/messenger/services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat$!: Observable<Chat>;

  constructor(
    private route: ActivatedRoute,
    private chatsService: ChatsService
  ) { }

  ngOnInit(): void {
    this.chat$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.chatsService.activateChat(params.get('id')!);
      })
    );
  }
}
