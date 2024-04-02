import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class UserServices{
    user={
        prenom:"",
        nom:"",
        email:"",
        password:"",
    }
  
  }