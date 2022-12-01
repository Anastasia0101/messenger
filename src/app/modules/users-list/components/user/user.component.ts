import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ChatsService } from 'src/app/modules/messenger/services/chats.service';
import { User } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: User;

  constructor(
    private chatsService: ChatsService,
    private router: Router
  ) { }

  createChat(userId: string): void {
    this.chatsService.createChat(userId).subscribe({
      next: (chatId) => this.router.navigate([`chats/${chatId}`]),
    });
  }
}
