import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../model/destination';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
    constructor(private http:HttpClient){}
    getDestination(): Observable<Destination[]> {
        return this.http.get<Destination[]>('http://localhost:3000/api/destination/getAllDest')
        
        }
}