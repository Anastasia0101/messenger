import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpFormComponent
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ],
})
export class SignUpModule { }
