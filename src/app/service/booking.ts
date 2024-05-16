import { Destination } from './../model/destination';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { book } from '../model/booking'; ;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookinService {
    constructor(private http:HttpClient){}
    private BACK_URL = environment.apiURL
    getBooking(userId:string | null): Observable<any>{
        return this.http.get(this.BACK_URL+"/booking/getAllBook/"+userId)
    }

    // tu doit recup id de la destinition choisi par l'user
    postBooking(booking: any){
      return this.http.post<book[]>(this.BACK_URL+'/booking/myBook', booking)
    }
}