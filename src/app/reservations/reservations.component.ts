import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../service/card.service';
import { UserServices } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { BookinService } from '../service/booking';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  isConnected: any;
  nom!: string | null
  prenom!: string | null
  book!:any
  
  constructor(public router: Router,
    public card: CardService,
    public reponse: UserServices,
    private http: HttpClient,
    private bookingService:BookinService){}
    ngOnInit(): void {
      this.isConnected = localStorage.getItem('accessToken')
      this.nom = localStorage.getItem('nom')
      this.prenom = localStorage.getItem('prenom')
      this.bookingService.getBooking().subscribe(
      
        (res)=>{
          this.book=res
          console.log(res,'ici')
        }
      )
    }
    //fonction deconnexion qui supprime le nom et prenom
  deconnexion(): void {
    localStorage.removeItem('accessToken')
    this.isConnected = false;
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
  }
   //naviguer vers la page connexion + stocker l'url dans le localStorage
  connexion(): void {
    localStorage.setItem('redirect', 'http://localhost:4200/connexion');
    this.router.navigate(['/connexion']);
  }
   //naviguer vers la page acceuil
  goToAcceuil(): void {
    this.router.navigateByUrl('acceuil')
  }

}
