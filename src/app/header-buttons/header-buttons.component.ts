import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../service/user.service';


@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent implements OnInit{
  isConnected:any;
  nom!:string |null
  prenom!:string|null
  @Input() path!:string
  constructor(public router: Router,
    private userService:UserServices) {
  }
  ngOnInit(): void {
    this.isConnected = localStorage.getItem('accessToken')
    this.nom = localStorage.getItem('nom')
    this.prenom = localStorage.getItem('prenom')
  }

  deconnexion(): void {
    this.userService.logout().subscribe(
      (succes:any) => {
        this.isConnected = false;
    localStorage.removeItem('accessToken')
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
    localStorage.removeItem('id')
    localStorage.removeItem('mail')
    this.router.navigate(['/acceuil']);

      },
      (err) => {
        console.log(err)
      }
    )
    
  }
  
  //naviguer vers la page connexion + stockage de  l'url dans le localStorage
  connexion(): void {
    localStorage.setItem('redirect', 'http://localhost:4200/connexion');
    this.router.navigate(['/connexion']);
  }

  goTo(){
    console.log(this.path)
    if(this.path){
      this.router.navigateByUrl(this.path)
    }else{
      
    this.router.navigateByUrl('reservations')
  }
}

}

