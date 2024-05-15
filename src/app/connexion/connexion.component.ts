import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public BACK_URL=environment
  public connexionForm!: FormGroup
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router,private http:HttpClient) { }

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
    return this.http.post(this.BACK_URL.apiURL+'/user/authenticate',this.connexionForm.value).subscribe(
    (reponse:any)=>{
      localStorage.setItem('accessToken', reponse.accessToken)
      console.log(reponse)
      localStorage.setItem('nom',reponse.user.nom)
      localStorage.setItem('prenom',reponse.user.prenom)
      localStorage.setItem('mail',reponse.user.mail)
      localStorage.setItem('id',reponse.user._id)

      this.navigateToPagePrincipal()
    },
    (error)=>{}
    );
    
  }

}
