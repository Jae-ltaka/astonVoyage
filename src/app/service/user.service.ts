import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserServices{
    public BACK_URL=environment

    user={
        prenom:"",
        nom:"",
        email:"",
        password:"",
    }

    constructor(private http:HttpClient){}
    
    login(connexionValue:any) {
      return this.http.post(this.BACK_URL.apiURL+'/user/authenticate',connexionValue)

    }

    logout() {
      return this.http.post(this.BACK_URL.apiURL+'/user/logoutUser',{})

    }
  
  }