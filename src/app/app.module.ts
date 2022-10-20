import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsPageComponent } from './views/chats-page/chats-page.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatsService } from './services/chats.service';
import { MessengerComponent } from './components/messenger/messenger.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatsListItemComponent } from './components/chats-list-item/chats-list-item.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesListItemComponent } from './components/messages-list-item/messages-list-item.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { UsersService } from './services/users.service';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatNotSelectedComponent } from './components/chat-not-selected/chat-not-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsPageComponent,
    ChatsListComponent,
    MessengerComponent,
    SidebarComponent,
    ChatsListItemComponent,
    ChatComponent,
    MessageFormComponent,
    MessagesListComponent,
    MessagesListItemComponent,
    ChatHeaderComponent,
    ChatNotSelectedComponent,
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
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    ChatsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
