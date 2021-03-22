import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DynamicsComponent } from './components/dynamics/dynamics.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicsComponent, DynamicsComponent, SwitchesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
