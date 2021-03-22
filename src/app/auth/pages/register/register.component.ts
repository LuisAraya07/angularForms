import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  
  // tslint:disable-next-line: member-ordering
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.lastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)] , [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  },

  // Agregamos funciones
  {
    validators: [this.vs.sameInput('password', 'password2')]
  });


  get emailErrorMsg(): string{
      const errors = this.myForm.get('email')?.errors;
      if (errors?.required){
        return 'Email es obligatorio';
      }else
      if (errors?.pattern){
        return 'No es formato email';
      }else
      if (errors?.emailTomado){
        return 'Email ya fue tomado';
      }
      return '';
  }



  constructor( private fb: FormBuilder,
                private vs: ValidatorService,
                private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Luis Araya',
      email: 'luis@gmail.com',
      username: 'kaper',
      password: '123456',
      password2: '123456'
    });
  }


  notValid( input: string ){
      return this.myForm.get(input)?.invalid && this.myForm.get(input)?.touched;

  }

  // emailRequired(){
  //   return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  // }

  // emailFormat(){
  //   return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  // }

  // emailTakeIt(){
  //   return this.myForm.get('email')?.errors?.emailTomado && this.myForm.get('email')?.touched;
  // }



  submitForm(){
    console.log(this.myForm.value);
    // tslint:disable-next-line: no-unused-expression
    this.myForm.markAllAsTouched;
  }

}
