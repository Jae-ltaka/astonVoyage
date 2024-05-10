import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../model/destination';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
    constructor(private http:HttpClient){}
  private BACK_URL = environment.apiURL;

  getDestination(): Observable<Destination[]> {
  return this.http.get<Destination[]>(this.BACK_URL+'/destination/getAllDest')
  }


  getDestinationById(id:string):any {
    return this.http.get(this.BACK_URL+'/destination/getDest/'+id)
  }
  getDestinationFiltered(dateDepart:string):any {
    return this.http.get(this.BACK_URL+'/destination/getAllDestByDate',{params:{dateDepart}})
  }
  
}
