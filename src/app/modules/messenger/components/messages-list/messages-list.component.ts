import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../models/message.model';
import { User } from 'src/app/modules/shared/models/user.model';
import { ChatsService } from 'src/app/modules/messenger/services/chats.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, AfterViewChecked {
  @Input() messages?: Message[];
  @ViewChild('messagesList') messagesListEl!: ElementRef;
  currentUser!: User;

  constructor(private chatsService: ChatsService) {}

  ngOnInit(): void {
    this.currentUser = this.chatsService.activeChat.currentUser;
  }

  ngAfterViewChecked(): void {
    this.messagesListEl.nativeElement.scrollTop = this.messagesListEl.nativeElement.scrollHeight;
  }
}
