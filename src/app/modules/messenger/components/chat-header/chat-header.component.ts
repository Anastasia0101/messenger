import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {
  @Input() opponent!: User;
}
