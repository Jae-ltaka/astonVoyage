import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { DestinationService } from '../service/get-destination-service';
import { environment } from 'src/environments/environment';




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
  date_depart!:any
  public BACK_URL=environment
  
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
    private destination: DestinationService,
    private userService:UserServices) {
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
 
  filterDestination(){
    this.destination.getDestinationFiltered(this.date_depart.toISOString()).subscribe(
      (data:any)=>{
        this.cards = data.res
      }
    )
    console.log(this.filterDestination,'ici')
    
    
  }
  getImageUrl(filename: string): string {
    return this.BACK_URL.apiURL+ "/destination/download/"+filename;
  }


}
