import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatsService } from 'src/app/modules/messenger/services/chats.service';
import { User } from 'src/app/modules/shared/models/user.model';
import { AuthService } from 'src/app/modules/sign-up/services/auth.service';
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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  createChat(userId: string) {
    this.chatService.createChat(userId);
  }

  signOut(): void {
    this.router.navigate(['/sign-in']);
    this.authService.signOut();
  }
}
