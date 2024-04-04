import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { UserServices } from '../service/user.service';


@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.scss']
})
export class PagePrincipalComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  cards;
  isConnected:any;
  nom!:string |null
  prenom!:string|null
  ngOnInit(): void {
      this.isConnected = localStorage.getItem('accessToken') 
   this.nom= localStorage.getItem('nom')
   this.prenom=localStorage.getItem('prenom')
  }


  constructor(public router: Router, public card: CardService,public reponse:UserServices) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.cards = this.card.card
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
