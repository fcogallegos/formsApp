import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {


  myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)] ],
    favorites: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  fieldIsValid(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  addFavorite() {
    if( this.newFavorite.invalid ) {
      return;
    }

    // this.favoritesArr.push( new FormControl( this.newFavorite.value, Validators.required ) );
    this.favoritesArr.push( this.fb.control( this.newFavorite.value, Validators.required ) );

    this.newFavorite.reset();
  }

  save() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log( this.myForm.value );
  }

  delete(index: number) {
    this.favoritesArr.removeAt( index );
  }

}
