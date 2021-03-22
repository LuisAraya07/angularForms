import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



interface MenuItem {
  text  : string;
  route : string;
}



@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent{

  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './template/basics'
    },
    {
      text: 'Dynamics',
      route: './template/dynamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './reactive/basics'
    },
    {
      text: 'Dynamics',
      route: './reactive/dynamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    },
  ];




}
