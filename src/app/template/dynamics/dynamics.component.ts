import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Person {
  name      : string;
  favorites : Favorite[]
}

interface Favorite {
  id   : number;
  name : string;
}




@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {
  @ViewChild('myForm') myForm!: NgForm;

  person: Person = {
    name: 'Luis',
    favorites: [{
      id: 1,
      name: 'Metal Gear'
    },
    {
      id: 2,
      name: 'Death'
    },]
  }

  newGame: string = '';


  save(){
    
  }

  validName(): boolean{
    return this.myForm?.controls.product?.invalid &&
           this.myForm?.controls.product?.touched;
  }


  deleteFavorite( index: number ){
    this.person.favorites.splice(index, 1);
  }

  addFavorite(){
    const newFavorite: Favorite = {
      id : this.person.favorites.length + 1,
      name : this.newGame
    }
    this.person.favorites.push({...newFavorite});
    this.newGame = '';
  }

}
