import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Person {
  name: string;
  favorites: Favorite [];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})


export class DinamicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  newPlay: string = '';

  person: Person = {
    name: 'Francisco',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'DeathStranding' }
    ]
  }


  save() {
    //console.log(this.myForm.controls.person.value);
    console.log('Form posted');

  //  this.myForm.resetForm({
  //    name: ''
  //  })
  }

  addPlay() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newPlay
    }

    this.person.favorites.push({ ...newFavorite });
    this.newPlay = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }
  

}
