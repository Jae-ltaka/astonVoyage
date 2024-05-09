import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-reservation',
  templateUrl: './booking-reservation.component.html',
  styleUrls: ['./booking-reservation.component.scss']
})
export class BookingReservationComponent implements OnInit{
  constructor(private router:Router){}
ngOnInit(): void {
    
}
valider(){
  this.router.navigate(['/valider']);
}
}
