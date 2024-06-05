import { Component, SimpleChanges, Output } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() data:any
@Input() isRecap:boolean = false

@Output() dataEvent =  new EventEmitter()

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log(changes)
  
}

action (){
  this.dataEvent.emit()
} 

}
