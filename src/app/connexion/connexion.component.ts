import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserServices } from '../service/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public BACK_URL=environment
  public connexionForm!: FormGroup
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router,private http:HttpClient, public userService:UserServices) { }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      mail: ["", [Validators.required]],
      mdp: ["", [Validators.required]]
    })
  }
   //naviguer vers la page inscription
  navigateToButtonInscription() {
    this.router.navigate(['/inscription']);
  }
   //naviguer vers la page connexion 
  navigateToPagePrincipal() {
    if(localStorage.getItem('redirect')){
      
      this.router.navigate([localStorage.getItem('redirect')])
      localStorage.removeItem('redirect')
    }else{
      this.router.navigate(['/acceuil',]);
    }
    
  }

  connexionUser() {
    this.userService.login(this.connexionForm.value).subscribe(
      (succes:any)=> {
        this.navigateToPagePrincipal()
        localStorage.setItem('accessToken', succes.accessToken)
      localStorage.setItem('nom',succes.user.nom)
      localStorage.setItem('prenom',succes.user.prenom)
      localStorage.setItem('mail',succes.user.mail)
      localStorage.setItem('id',succes.user._id)
     


      },
      (error)=> {
        alert('Erreur de connexion')
      }
    )

    
  }

}
