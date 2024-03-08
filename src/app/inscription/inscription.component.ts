import { Component } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  public connexionForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: [""],
      password: [""],
      nom:[""],
      prenom:[""]
    })
  }
}
