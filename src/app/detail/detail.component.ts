import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DestinationService } from '../service/destination-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  isConnected:any;
  card:any;
  nom!:string |null
  prenom!:string|null
  id!: any;
  pays!:any;
  
  
  constructor (public cardService:CardService,
              private route:ActivatedRoute,
              private router:Router,
              private destination:DestinationService){}

  ngOnInit(): void {
      this.isConnected = localStorage.getItem('accessToken') 
    this.nom= localStorage.getItem('nom')
    this.prenom=localStorage.getItem('prenom')
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      
     this.pays= this.cardService.card.find((pays)=> {
      console.log(pays)
        return pays._id == this.id
      })
      console.log('Test ID:', this.id);
    });

    const destinationId = this.route.snapshot.params['id'];
    this.destination.getDestinationById(destinationId)
  }

  reservation(){
    this.router.navigate(["reservation"]);
  }
  deconnexion(): void {
    localStorage.removeItem('accessToken')
    this.isConnected = false;
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
  }



  connexion(): void {
    localStorage.setItem('redirect', 'http://localhost:4200/connexion');
    this.router.navigate(['/connexion']);
  }
}
  
