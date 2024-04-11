import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card=[
  { _id:243, titre: 'République démocratique du Congo', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/50/f9/95/caption.jpg?w=1200&h=-1&s=1' ,phrase: "Bienvenue en RDC",description:"Voici un pays avec un très beau décor naturel"},
  { _id:29,titre: 'Maroc', imageUrl: 'https://img.ev.mu/images/portfolio/pays/136/1605x1070/854625.jpg',phrase: "Bienvenue au Maroc", description:"Voici un pays parfait pour l'été" },
  { _id:39, titre: "Cote d'Ivoire", imageUrl: 'https://th.bing.com/th/id/OIP.nIKndC1O-CCIZ7xIrODhLAHaEK?rs=1&pid=ImgDetMain', phrase:"Bienvenue en Côte D'ivoire", description:"Voici un beau d'Afrique de l'ouest" },
  { _id:93, titre:'Brésil',imageUrl:'https://th.bing.com/th/id/OIP._kX5RRNYVNLuRdhYOg9pBQHaFU?rs=1&pid=ImgDetMain', phrase:"Bienvenue au Bresil", description:"Voici un beau pays d'amérique latine"},
  { _id:987, titre:'Méxique',imageUrl:'https://th.bing.com/th/id/OIP.YZV2v4jiJLNv4C-HTyiRgwHaE8?rs=1&pid=ImgDetMain',phrase:"Bienvenue au Mexique",description:"Voici un beau pays d'amérique centrale"},
  { _id:879, titre:'Hongrie',imageUrl:'https://th.bing.com/th/id/R.7eb5a79776fa4e80e88248800db57592?rik=Zi2mdiPPMds7fA&pid=ImgRaw&r=0', phrase:"Bienevenue en Hongrie",description:"Voici un beau pays d'europe de l'est"}
  ]  
}
