import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-messages-list-item',
  templateUrl: './messages-list-item.component.html',
  styleUrls: ['./messages-list-item.component.scss']
})
export class MessagesListItemComponent {
  @Input() message!: Message;
  @Input() currentUser!: User;
}
