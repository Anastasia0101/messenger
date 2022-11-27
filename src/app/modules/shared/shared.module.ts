import { NgModule } from '@angular/core';
import { LoggedOnlyGuard } from './guards/logged-only.guard';
import { UnLoggedOnlyGuard } from './guards/unlogged-only.guard';

@NgModule({
  providers: [
    LoggedOnlyGuard,
    UnLoggedOnlyGuard
  ],
})
export class SharedModule { }
