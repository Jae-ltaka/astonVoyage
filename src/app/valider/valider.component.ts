import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-valider',
  templateUrl: './valider.component.html',
  styleUrls: ['./valider.component.scss']
})
export class ValiderComponent implements OnInit{
Router!:any

 
constructor(
  private route:ActivatedRoute,
  private router:Router,
){}
ngOnInit(): void {
    
}
accueil(){
  this.router.navigate(['acceuil']);
}
}