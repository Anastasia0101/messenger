import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatNotSelectedComponent } from './components/chat-not-selected/chat-not-selected.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsPageComponent } from './views/chats-page/chats-page.component';

const routes: Routes = [
  {
    path: 'chats',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
