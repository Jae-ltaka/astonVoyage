import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../model/destination';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
    constructor(private http:HttpClient){}
  private BACK_URL = 'http://localhost:3000/api/destination';

  getDestination(): Observable<Destination[]> {
  return this.http.get<Destination[]>(this.BACK_URL+'/getAllDest')
  }


  getDestinationById(id:string):any {
    return this.http.get(this.BACK_URL+'/getDest/'+id)
  }
}
