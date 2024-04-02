import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public connexionForm!: FormGroup
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      mail: ["", [Validators.required]],
      mdp: ["", [Validators.required]]
    })
  }
  navigateToButtonInscription() {
    this.router.navigate(['/inscription']);
  }

  navigateToPagePrincipal() {
    this.router.navigate(['/acceuil']);
  }
  connexionUser() {
    return this.http.post('http://localhost:3000/api/user/authenticate',this.connexionForm.value).subscribe(
    (reponse)=>{
      this.navigateToPagePrincipal()
    },
    (error)=>{}
    );
  }

}
