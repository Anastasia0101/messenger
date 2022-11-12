import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../../sign-up/services/auth.servce";

@Injectable()
export class AuthOnlyGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigate(['sign-up']);
      return false;
    }
    return true;
  }
}

