import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/modules/messenger/models/chat.model';

@Component({
  selector: 'app-chats-list-item',
  templateUrl: './chats-list-item.component.html',
  styleUrls: ['./chats-list-item.component.scss']
})
export class ChatsListItemComponent {
  @Input() chat!: Chat;
}
