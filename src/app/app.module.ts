import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

import { MaterialModule } from './modules/shared/material.module';
// import { MessengerModule } from './modules/messenger/messenger.module';
// import { UsersListComponent } from './modules/users-list/components/users-list/users-list.component';
// import { UsersService } from './modules/users-list/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    // UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    // MessengerModule
  ],
  providers: [
    // UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
