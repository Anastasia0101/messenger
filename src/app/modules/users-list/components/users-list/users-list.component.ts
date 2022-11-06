import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
