import { Injectable } from "@angular/core";
import {  CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthenticateCanActivate implements CanActivate {
  constructor(public router: Router,) {}

  canActivate() {
   const access= localStorage.getItem('accessToken')
   if(access) {
    return true
   } else {
    this.router.navigateByUrl('acceuil');
    return false
   }
    
  }
}