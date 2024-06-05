import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
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
  currentUrl: string = ''
  @Input() path!:string
  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private userService:UserServices) {
  }
  ngOnInit(): void {
    this.isConnected = localStorage.getItem('accessToken')
    this.nom = localStorage.getItem('nom')
    this.prenom = localStorage.getItem('prenom')
    this.activatedRoute.url
    .pipe(
      filter((url)=> url[0].path !== 'connexion')
    )
    .subscribe((urlSegment)=> {
      this.currentUrl = urlSegment.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.path + '/'
        },
        '',
      );
    })
  }

  deconnexion(): void {
    // on appel le back puis on vide le localstorage pour ne plus avoir d'info sur l'utilisateur a se deconnecter
    // (suppression du token primordial)
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
    console.log(this.currentUrl)
    localStorage.setItem('redirect', this.currentUrl);
    this.router.navigate(['/connexion']);
  }

  goTo(){
    if(this.path){
      this.router.navigateByUrl(this.path)
    }else{
      
    this.router.navigateByUrl('reservations')
  }
}

}

