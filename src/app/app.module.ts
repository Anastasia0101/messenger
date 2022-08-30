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

@NgModule({
  declarations: [
    AppComponent,
    ChatsPageComponent,
    ChatsListComponent,
    MessengerComponent,
    SidebarComponent,
    ChatsListItemComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ChatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
