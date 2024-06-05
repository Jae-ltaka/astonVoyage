import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationService } from '../service/get-destination-service';
import { ActivatedRoute } from '@angular/router';
import { BookinService } from '../service/booking';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
  pays!:any;
  id!:any
  isConnected:any;
  nom!:string |null
  prenom!:string|null
  mail!:string|null
  idDest!:any
  
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public destination:DestinationService,
    public booking:BookinService
  ){}
  
ngOnInit(): void {
  this.isConnected = localStorage.getItem('accessToken') 
    this.nom= localStorage.getItem('nom')
    this.prenom=localStorage.getItem('prenom')
    this.mail=localStorage.getItem('mail')


  this.route.params.subscribe(params => {
      this.id = params['id'];

      this.destination.getDestinationById(this.id).subscribe(
      (data:any) => {
        this.pays = data
        console.log(this.pays)

      },
      (error:any) => { 
        console.log(error)
      }
    )
    });
  }

paiement(){
  localStorage.setItem('iddest',this.id)

  this.router.navigate(['/booking-reservation']);


}
}
