import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../model/booking'; ;


@Injectable({
  providedIn: 'root'
})
export class BookinService {
    constructor(private http:HttpClient){}
    getBooking(): Observable<book[]>{
     const userId=localStorage.getItem('id')
        return this.http.get<book[]>("http://localhost:3000/api/booking/getAllBook/"+userId)
    }
}