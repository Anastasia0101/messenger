import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersService } from './services/users.service';

import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListComponent
      }
    ])
  ],
  providers: [
    UsersService
  ],
})
export class UsersModule { }
