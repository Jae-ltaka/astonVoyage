import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{
  public connexionForm!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private router:Router,
  ){}
  
ngOnInit(): void {
  
}

paiement(){
  this.router.navigate(["booking-reservation"]);
}
}



