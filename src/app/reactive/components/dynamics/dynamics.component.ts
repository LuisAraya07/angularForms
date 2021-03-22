import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    // nombre: [valor, validadores sincronos, validaroes async]
    name  : [ '', [Validators.required, Validators.minLength(3)], ],
    favorites: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Sae', Validators.required]
    ], Validators.required)
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);


  get favoritesArr(){
    return this.myForm.get('favorites') as FormArray;
  }



  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  // Si se repite la funcion se puede crear un servicio de validaciones
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

  addFavorite(){
    if(this.newFavorite.invalid){return;}
    //this.favoritesArr.push( new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArr.push( this.formBuilder.control(this.newFavorite.value, Validators.required));

    this.newFavorite.reset();
  }

  deleteFavorite( index: number ): void{
    this.favoritesArr.removeAt(index);
  }

}
