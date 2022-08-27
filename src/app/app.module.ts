import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsPageComponent } from './views/chats-page/chats-page.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatsService } from './services/chats.service';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsPageComponent,
    ChatsListComponent,
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
