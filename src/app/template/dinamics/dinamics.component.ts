import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    name: 'test'
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm.controls.person.value);

    this.myForm.resetForm({
      name: ''
    })
  }
  

}
