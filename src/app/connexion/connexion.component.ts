import { Component, OnInit } from '@angular/core';
import { Form, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit{
public connexionForm!:FormGroup

 constructor(private formBuilder:FormBuilder,private router: Router){}

ngOnInit(): void {
  this.connexionForm = this.formBuilder.group({
    email:[""],
    password :[""]
  })
}
navigateToButtonInscription() {
  this.router.navigate(['/inscription']);
}
navigateToPagePrincipal(){
  this.router.navigate(['/acceuil'])
}
}
