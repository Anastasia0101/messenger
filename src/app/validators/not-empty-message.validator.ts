import { AbstractControl, Validator, NG_VALIDATORS, ValidatorFn, ValidationErrors } from '@angular/forms';

export function checkMessageNotEmptyValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    return control.value.trim().length > 0 ? null : { messageNotEmpty: false };
  }
}
