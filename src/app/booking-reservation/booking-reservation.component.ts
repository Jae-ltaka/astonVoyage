import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookinService } from '../service/booking';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cardExpirationValidator } from './card-validator';

@Component({
  selector: 'app-booking-reservation',
  templateUrl: './booking-reservation.component.html',
  styleUrls: ['./booking-reservation.component.scss']
})
export class BookingReservationComponent implements OnInit{
  id!:string |null
  iddest!:string |null
  hasError!: boolean;
  bookingForm!: FormGroup;

  constructor(private router:Router,private bookingService:BookinService,private formBuilder: FormBuilder){}
ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.iddest=localStorage.getItem('iddest')
    this.bookingForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z-]+$')]],
      lastname: [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z-]+$')]],
      number: [null, [Validators.required, Validators.minLength(16)]],
      cryptogram: [null, [Validators.required, Validators.minLength(3)]],
      expirationDate: [null, [Validators.required, cardExpirationValidator]],
    })
}


booking(){
  // Appel Fake vers moyen de paiement
  this.bookingService.postBooking({ userId:this.id,destinationId:this.iddest})
  .subscribe(
    res=>{
      this.hasError=false
      this.router.navigate(['/valider']);
      
    },
    error=>{
      this.hasError=true
    }
    
  )
}

}
