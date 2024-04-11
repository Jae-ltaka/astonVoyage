import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../service/card.service';
import { UserServices } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { DestinationService } from '../service/destination-service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  isConnected: any;
  nom!: string | null
  prenom!: string | null
  constructor(public router: Router,
    public card: CardService,
    public reponse: UserServices,
    private http: HttpClient,
    private destination: DestinationService){}
    ngOnInit(): void {
      this.isConnected = localStorage.getItem('accessToken')
      this.nom = localStorage.getItem('nom')
      this.prenom = localStorage.getItem('prenom')
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
  goToAcceuil(){
    this.router.navigateByUrl('acceuil')
  }
}
