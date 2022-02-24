import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)] ],

  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  fieldIsValid(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log( this.myForm.value );
  }

}
