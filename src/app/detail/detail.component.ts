import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  card:any;
  constructor (public cardService:CardService,
              private route:ActivatedRoute,
              private router:Router ){}
  ngOnInit(): void {}
  reservation(){
    this.router.navigate(["reservation"]);
  }
}
  
