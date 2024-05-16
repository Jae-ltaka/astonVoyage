import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookinService } from '../service/booking';

@Component({
  selector: 'app-booking-reservation',
  templateUrl: './booking-reservation.component.html',
  styleUrls: ['./booking-reservation.component.scss']
})
export class BookingReservationComponent implements OnInit{
  id!:string |null
  iddest!:string |null
  hasError!: boolean;

  constructor(private router:Router,private booking:BookinService){}
ngOnInit(): void {
    this.id=localStorage.getItem('id')
    this.iddest=localStorage.getItem('iddest')
}
valider(){
 
  this.booking.postBooking({ userId:this.id,destinationId:this.iddest}).subscribe(
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
