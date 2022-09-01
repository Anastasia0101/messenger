import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  @Input() messages?: Message[];
  currentUser!: User;
  opponent!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.opponent = this.userService.opponent;
  }
}
