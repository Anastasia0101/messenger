import { NgModule } from '@angular/core';
import { AuthOnlyGuard } from './guards/auth-only.guard';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthOnlyGuard
  ],
})
export class SharedModule { }
