import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../../sign-up/services/auth.service";

@Injectable()
export class LoggedOnlyGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}
