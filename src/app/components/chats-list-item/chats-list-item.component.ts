import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats-list-item',
  templateUrl: './chats-list-item.component.html',
  styleUrls: ['./chats-list-item.component.scss']
})
export class ChatsListItemComponent implements OnInit {
  @Input() chat!: Chat;
  
  ngOnInit(): void {

  }
}
