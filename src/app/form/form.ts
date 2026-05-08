import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFeature } from './form.feature';
import { resetForm, updateFormField } from './form.action';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  form$:Observable<{name:string,email:string}>;
  constructor(private store: Store) {
    this.form$ = this.store.select(formFeature.selectFormState);
  }

  // Other way to inject store using inject function instead of constructor injection
  // private store=inject(Store);
  // form$=this.store.select(formFeature.selectFormState);

  updatedField(field:'name' | 'email',value:string){
    this.store.dispatch(updateFormField({field,value}));
  }

  resetForm(){
    this.store.dispatch(resetForm());
  }
}
