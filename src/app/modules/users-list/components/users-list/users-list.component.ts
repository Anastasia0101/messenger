import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  signOut(): void {
    this.router.navigate(['/sign-in']);
    this.authService.signOut();
  }
}
