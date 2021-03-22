import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [true, Validators.requiredTrue ]
  });

  person = {
    gender: 'F',
    notifications: true
  };
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      conditions: false});
    // Nos suscribimos a un solo campos del formularios
    this.myForm.get('conditions')?.valueChanges.subscribe( newValue => {
      console.log(newValue);
    })
    // nos suscribimos a todo el formulario para recibir los cambios de una vez  
    this.myForm.valueChanges
      .subscribe( form => {
        delete form.conditions;
        this.person = form;
      });

  }


  save(){
    const formValue = {...this.myForm.value};
    delete formValue.conditions;

    this.person = formValue;
  }

}
