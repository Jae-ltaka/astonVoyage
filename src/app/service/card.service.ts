import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  card=[
  { titre: 'République démocratique du Congo', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/50/f9/95/caption.jpg?w=1200&h=-1&s=1' },
  { titre: 'Maroc', imageUrl: 'https://img.ev.mu/images/portfolio/pays/136/1605x1070/854625.jpg' },
  { titre: "Cote d'Ivoire", imageUrl: 'https://th.bing.com/th/id/OIP.nIKndC1O-CCIZ7xIrODhLAHaEK?rs=1&pid=ImgDetMain' },
  {titre:'Brésil',imageUrl:'https://th.bing.com/th/id/OIP._kX5RRNYVNLuRdhYOg9pBQHaFU?rs=1&pid=ImgDetMain'},
  {titre:'Méxique',imageUrl:'https://th.bing.com/th/id/OIP.YZV2v4jiJLNv4C-HTyiRgwHaE8?rs=1&pid=ImgDetMain'},
  {titre:'Hongrie',imageUrl:'https://th.bing.com/th/id/R.7eb5a79776fa4e80e88248800db57592?rik=Zi2mdiPPMds7fA&pid=ImgRaw&r=0'}
  ]

  
}
