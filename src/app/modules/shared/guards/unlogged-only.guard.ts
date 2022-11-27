import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../../sign-up/services/auth.service";

@Injectable()
export class UnLoggedOnlyGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isUserAuthenticated()) {
      this.router.navigate(['users']);
      return false;
    }
    return true;
  }
}
