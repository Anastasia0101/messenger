import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  @Input() messages?: Message[];
  currentUser!: User;
  opponent!: User;

  constructor(private chatsService: ChatsService) {}

  ngOnInit(): void {
    this.currentUser = this.chatsService.activeChat.currentUser;
    this.opponent = this.chatsService.activeChat.opponent;
  }
}
