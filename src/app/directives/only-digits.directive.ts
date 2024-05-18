import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]'  // Assurez-vous que le sélecteur est unique
})
export class OnlyDigitsDirective {

  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {

    
    // Autoriser seulement backspace, delete, tab, escape, enter
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'];
    if (allowedKeys.includes(event.key)) {
      return; // Laisser ces touches fonctionner normalement
    }

    // Autoriser les touches de navigation: home, end, left, right
    if ((event.key >= '0' && event.key <= '9') || // N'autoriser que les chiffres
        (event.keyCode >= 35 && event.keyCode <= 40)) { // Inclure les touches fléchées et home/end
      return; // Laisser fonctionner ces touches normalement
    }

    // Empêcher l'entrée par défaut si ce n'est pas une touche autorisée
    event.preventDefault();
  }
}
