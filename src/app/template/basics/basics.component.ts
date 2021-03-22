import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product : '',
    price   : 0,
    stocks  : 10
  }
  constructor() { }

  ngOnInit(): void {
  }


  save(){
    console.log(this.myForm.value);
    this.myForm.resetForm({
      // Para ponerles el valor despues de limpiarlo
      price: 0,
      stocks: 0
    });
  }

  validName(): boolean{
    return this.myForm?.controls.product?.invalid &&
           this.myForm?.controls.product?.touched;
  }

  validPrice(): boolean{
    return this.myForm?.controls.price?.touched &&
           this.myForm?.controls.price?.value < 0;
  }




}
