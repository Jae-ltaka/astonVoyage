import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../service/card.service';
import { UserServices } from '../service/user.service';

import { BookinService } from '../service/booking';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit{
  isConnected: any;
  
  book:any = []
  
  constructor(public router: Router,
    public card: CardService,
    public reponse: UserServices,
        private bookingService:BookinService){}
    ngOnInit(): void {
      const userId=localStorage.getItem('id')
      this.isConnected = localStorage.getItem('accessToken')
     

      this.bookingService.getBooking(userId).subscribe(
        (res)=>{
          console.log(res)
          this.book=res
        }
      )
    }

  
   //naviguer vers la page acceuil
  goToAcceuil(): void {
    this.router.navigateByUrl('acceuil')
  }

}
