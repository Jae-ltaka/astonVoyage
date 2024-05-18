import { AbstractControl, ValidationErrors } from '@angular/forms';
export function cardExpirationValidator(control: AbstractControl): ValidationErrors | null {
    if(control && control.value){
    const currentDate = new Date();
    const expDate = new Date(control.value)
    if (expDate <= currentDate) {
      return { 'expired': true };
    }
    return null;
    }
    return null;
  }