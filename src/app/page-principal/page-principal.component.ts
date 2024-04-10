import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.scss']
})
export class PagePrincipalComponent implements OnInit{
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  cards;
  route: any;
  params: any;


  constructor(public router: Router,
            public cardService:CardService,
            private routere: ActivatedRoute ){
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.cards = this.cardService.card
   
   
  }
  ngOnInit(): void {
  }
  navigateToButtondetail(_id:any) {
    // this.router.navigate(['/detail']);
    this.router.navigateByUrl(`detail/${_id}`);
  }
 
  }



