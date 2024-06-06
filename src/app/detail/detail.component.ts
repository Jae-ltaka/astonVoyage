import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DestinationService } from '../service/get-destination-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  card:any;
  id!: any;
  pays!:any;
    public BACK_URL=environment
  
  
  constructor (public cardService:CardService,
              private route:ActivatedRoute,
              private router:Router,
              private destination:DestinationService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      

console.log('Test ID:', this.id);
    });

    const destinationId = this.route.snapshot.params['id'];
    this.destination.getDestinationById(destinationId).subscribe(
      (data:any) => {
        this.pays = data

      },
      (error:any) => { 
        console.log(error)
      }
    )
  }

  getImageUrl(filename: string): string {
    console.log(filename)
    return this.BACK_URL.apiURL+ "/destination/download/"+filename;
    
  }
  

   //naviguer vers la page connexion 
   navigate(isConnected:any): void {
     if(isConnected) {
      this.router.navigate(["reservation/"+this.id]);
     }else {
      localStorage.setItem('redirect', 'detail/'+this.id);
      this.router.navigate(['/connexion']);
     }
  }
  goToReservation(){
    this.router.navigateByUrl('reservations')
  }
}
  
