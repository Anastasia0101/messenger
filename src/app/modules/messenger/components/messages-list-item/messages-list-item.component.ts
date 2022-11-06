import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { User } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'app-messages-list-item',
  templateUrl: './messages-list-item.component.html',
  styleUrls: ['./messages-list-item.component.scss']
})
export class MessagesListItemComponent {
  @Input() message!: Message;
  @Input() currentUser!: User;
}
