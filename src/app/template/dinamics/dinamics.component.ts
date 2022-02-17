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

  person: Person = {
    name: 'Francisco',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'DeathStranding' }
    ]
  }


  save() {
    console.log(this.myForm.controls.person.value);

  //  this.myForm.resetForm({
  //    name: ''
  //  })
  }
  

}
