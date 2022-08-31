import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat?: Chat;

  constructor(
    private route: ActivatedRoute,
    private chatsService: ChatsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.chatsService.getChatById(params.get('id')!)
      })
    ).subscribe(chat => this.chat = chat);
  }
}
