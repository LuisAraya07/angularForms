import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public lastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';



  constructor() { }



  noPuedeSerStrider( control: FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if ( valor === 'strider'){
      //return ERROR
      return {
        noStrider: true
      }
    }
    //Si se returna null es que no hay error
    return null;
  }

  // tslint:disable-next-line: typedef
  sameInput( input1: string, input2: string ){
    // Debemos retornar una funcion
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(input1)?.value;
      const pass2 = formGroup.get(input2)?.value;
      if(pass1 !== pass2){
        formGroup.get(input2)?.setErrors({noIguales: true});
        return {noIguales : true};
      }
      formGroup.get(pass2)?.setErrors(null);
      return null;
    };
  }
}
