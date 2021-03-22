import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   name  : new FormControl('RTX 4080'),
  //   price : new FormControl(0),
  //   stocks: new FormControl(5)
  // });

  // myForm: FormGroup = this.formBuilder.group({
  //   // nombre: [valor, validadores sincronos, validaroes async]
  //   name  : [ '', [Validators.required, Validators.minLength(3)], ],
  //   price : [ 0, [Validators.required, Validators.min(0)]],
  //   stocks: [ 0, [Validators.required, Validators.min(0)]]
  // });

  myForm: FormGroup = this.formBuilder.group({
    // nombre: [valor, validadores sincronos, validaroes async]
    name  : [ '', [Validators.required, Validators.minLength(3)], ],
    price : [ , [Validators.required, Validators.min(0)]],
    stocks: [ , [Validators.required, Validators.min(0)]]
  });


  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(){
    this.myForm.reset({
      name: '4080ti',
      price: 1000,
      stocks: 0
    });
  }

  isValidInput( input: string ){
    return this.myForm.controls[input].errors &&
           this.myForm.controls[input].touched;
  }


  save(){

    if ( this.myForm.invalid ){
      // tslint:disable-next-line: max-line-length
      // Se encarga de marcar todos los campos que no han sido tocados, esto para la validación de cuando puede darle click al botón de guardar le brinque todas las validaciones en cada mensaje
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
