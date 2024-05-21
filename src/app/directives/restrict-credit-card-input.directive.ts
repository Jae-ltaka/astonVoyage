import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRestrictCreditCardInput]'
})
export class RestrictCreditCardInputDirective {
@Input() restrictNumber!:number
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    // Limiter la saisie à 16 chiffres
    if (input.value.length > this.restrictNumber) {
      input.value = input.value.slice(0, this.restrictNumber);
    }
  }
}
