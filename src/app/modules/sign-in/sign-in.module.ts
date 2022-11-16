import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInFormComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
})
export class SignInModule { }
