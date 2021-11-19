import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  Observable  } from 'rxjs'
import { AuthService } from './auth.service';
import { SignInComponent } from '../app/sign-in/sign-in.component'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/sign-in']); // go to login page if not authenticated
      return false;
    }
  return true;
  }
}
