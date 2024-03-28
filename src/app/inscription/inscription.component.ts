import { Component } from '@angular/core';
import { Form, FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent {
  public connexionForm!: FormGroup
  constructor(private formBuilder: FormBuilder , private router: Router) { }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      password: [""],
      nom:[""],
      prenom:[""]
      
    })
   
  }
  navigateToConnexion() {
    this.router.navigate(['/connexion']);
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

