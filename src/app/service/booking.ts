import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../model/booking'; ;


@Injectable({
  providedIn: 'root'
})
export class BookinService {
    constructor(private http:HttpClient){}
    private BACK_URL = 'http://localhost:3000/api/booking';

    getBooking(): Observable<book[]>{
     const userId=localStorage.getItem('id')
        return this.http.get<book[]>(this.BACK_URL+'/getAllBook/'+userId)
    }

      // tu doit recup id de la destinition choisi par l'user
    postBooking(booking: any){
      
      return this.http.post<book[]>(this.BACK_URL+'/myBook', booking)
    }


}