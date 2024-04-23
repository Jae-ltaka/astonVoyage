import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
              private router:Router ){}

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
  }
   //naviguer vers la page reservation
  reservation(){
    this.router.navigate(["booking-reservation"]);
  }
  deconnexion(): void {
    localStorage.removeItem('accessToken')
    this.isConnected = false;
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
  }
   //naviguer vers la page connexion 
  connexion(): void {
    localStorage.setItem('redirect', 'http://localhost:4200/connexion');
    this.router.navigate(['/connexion']);
  }
  detail():void{
    localStorage.setItem('redirect','http://localhost:4200/detail/661500730bf8408e0e72351e');
    this.router.navigate(['/connexion']);
  }
}
  
