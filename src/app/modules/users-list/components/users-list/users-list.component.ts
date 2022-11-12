import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatsService } from 'src/app/modules/messenger/services/chats.service';
import { User } from 'src/app/modules/shared/models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$!: Observable<User[]>;
  constructor(
    private usersService: UsersService,
    private chatService: ChatsService,
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  createChat(userId: string) {
    this.chatService.createChat(userId);
  }
}
