import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { DestinationService } from '../service/get-destination-service';




@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.scss']
})
export class PagePrincipalComponent implements OnInit{
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  cards:any;
  dateDepartFormatee!: string;
  isConnected:any;
  nom!:string |null
  prenom!:string|null
  depart!:any
  retour!:any
  
  ngOnInit(): void {
    this.isConnected = localStorage.getItem('accessToken')
    this.nom = localStorage.getItem('nom')
    this.prenom = localStorage.getItem('prenom')
    this.destination.getDestination().subscribe(
      (res) => {
        this.cards = res
        console.log(res)
      },
      (error) => { }
    )
  }
  constructor(public router: Router,
    public card: CardService,
    public reponse: UserServices,
    private http: HttpClient,
    private destination: DestinationService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.cards = this.card.card
  }
  //naviguer vers la page detail
  navigateToButtondetail(_id:any) {
    // this.router.navigate(['/detail']);
    this.router.navigateByUrl(`detail/${_id}`);
  }
  //fonction deconnexion qui supprime le nom et prenom
  deconnexion(): void {
    localStorage.removeItem('accessToken')
    this.isConnected = false;
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
  }
  
  //naviguer vers la page connexion + stockage de  l'url dans le localStorage
  connexion(): void {
    localStorage.setItem('redirect', 'http://localhost:4200/connexion');
    this.router.navigate(['/connexion']);
  }
  // getDestination(){
  //   return this.http.get('http://localhost:3000/api/destination/getAllDest').subscribe(
  //     (res)=>{
  //       this.cards=res
  //       console.log(res)
  //     },
  //     (error)=>{}
  //   )
  // }
  goToReservation(){
    this.router.navigateByUrl('reservations')
  }
  filterDestination(){
    console.log(this.depart.toISOString(),this.retour)
    this.destination.getDestinationFiltered(this.depart.toISOString(),this.retour.toISOString()).subscribe()
    
  }


}
