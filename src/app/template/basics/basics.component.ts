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

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid &&
           this.myForm?.controls.product?.touched;
  }

  // validPrice() {
  //    console.log(this.myForm);
  // }

  validPrice(): boolean {
    //console.log(this.myForm);
    return this.myForm?.controls.price?.touched &&
           this.myForm?.controls.price?.value < 0;

 }

  //save( myForm: NgForm ) {
    save(  ) {
    console.log( this.myForm );
  }

}
