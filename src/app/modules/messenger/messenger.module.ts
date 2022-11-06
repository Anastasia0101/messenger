import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { MessengerComponent } from './components/messenger/messenger.component';
import { ChatsPageComponent } from './components/chats-page/chats-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatsListItemComponent } from './components/chats-list-item/chats-list-item.component';

import { ChatComponent } from './components/chat/chat.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesListItemComponent } from './components/messages-list-item/messages-list-item.component';
import { ChatNotSelectedComponent } from './components/chat-not-selected/chat-not-selected.component';

import { ChatsService } from './services/chats.service';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
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
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatsPageComponent,
        children: [
          {
            path: ':id',
            component: ChatComponent
          },
          {
            path: '**',
            component: ChatNotSelectedComponent
          }
        ]
      },
    ])
  ],
  providers: [
    ChatsService,
  ],
})
export class MessengerModule { }
