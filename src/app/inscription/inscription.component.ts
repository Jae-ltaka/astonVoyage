import { Component } from '@angular/core';
import { Form, FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{UserServices} from '../service/user.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent {
  public connexionForm!: FormGroup
  constructor(private formBuilder: FormBuilder , private router: Router,public user:UserServices,private http: HttpClient) { }
  hide = true;
  
  
  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      
      nom:new FormControl('',[Validators.required]),
      prenom:new FormControl('',[Validators.required]),
      mdp:new FormControl('',[Validators.required]),
      mail : new FormControl('', [Validators.required, Validators.email]),
      
      
    })
    
   
  }
  navigateToConnexion() {
    this.router.navigate(['/connexion']);
    console.log(this.connexionForm.value,'sa foctionne');
  }
  getErrorMessage() {
    if (this.formBuilder.control('required')) {
      return 'entrez les valeurs';
    }

    return this.formBuilder.control('mail') ? 'Not a valid email' : '';
  }
  postUsers() {
    return this.http.post('http://localhost:3000/api/user',this.connexionForm.value).subscribe(
    (reponse)=>{
      this.navigateToConnexion()
    },
    (error)=>{}
    );
  }
  
}

