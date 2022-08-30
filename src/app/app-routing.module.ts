import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ChatsListItemComponent } from './components/chats-list-item/chats-list-item.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatsPageComponent } from './views/chats-page/chats-page.component';

const routes: Routes = [
  {
    path: 'chats',
    component: ChatsPageComponent,
    children: [
      {
        path: ':id',
        component: ChatComponent
      }
    ]
  },
  { path: '**', redirectTo: '/chats', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
