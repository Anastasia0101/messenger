import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedOnlyGuard } from './modules/shared/guards/logged-only.guard';
import { UnLoggedOnlyGuard } from './modules/shared/guards/unlogged-only.guard';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users-list/users.module').then(m => m.UsersModule),
    canActivate: [LoggedOnlyGuard]
  },
  {
    path: 'chats',
    loadChildren: () => import('./modules/messenger/messenger.module').then(m => m.MessengerModule),
    canActivate: [LoggedOnlyGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [UnLoggedOnlyGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [UnLoggedOnlyGuard]
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
