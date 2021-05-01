import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AuthService} from './services/auth.service';
import {Route} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
  canActivate(): boolean{
    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(['/signIn']);
    return false;

  }
  
  
}