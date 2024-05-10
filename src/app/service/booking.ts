import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../model/booking'; ;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookinService {
    constructor(private http:HttpClient){}
    private BACK_URL = environment.apiURL
    getBooking(): Observable<book[]>{
     const userId=localStorage.getItem('id')
        return this.http.get<book[]>(this.BACK_URL+"/booking/getAllBook/"+userId)
    }
}