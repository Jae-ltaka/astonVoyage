import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    
    const isValidLength = control.value.length >= 8;
    const isValidContent = /^[A-Za-z0-9]+$/.test(control.value);

    return isValidLength && isValidContent ? null : {
      invalidPassword: true,
      requiredLength: 8,
      errorMessage: 'Le mot de passe doit contenir uniquement des lettres et des chiffres et être au moins de 8 caractères.'
    };
  };
}

export function passwordMatchValidator(form: FormGroup): { [s: string]: boolean } | null {
    return form.get('mdp')?.value === form.get('mdpConfirmation')?.value
           ? null : { 'passwordMismatch': true };
  }
