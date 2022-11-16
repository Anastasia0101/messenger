import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOnlyGuard } from './modules/shared/guards/auth-only.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users-list/users.module').then(m => m.UsersModule),
    canActivate: [AuthOnlyGuard]
  },
  {
    path: 'chats',
    loadChildren: () => import('./modules/messenger/messenger.module').then(m => m.MessengerModule),
    canActivate: [AuthOnlyGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
