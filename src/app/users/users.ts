import { userFeature } from './user.feature';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { loadUsers } from './user.actions';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users$!:Observable<any>; // Observable to hold users data

  constructor(private store:Store) {
    this.users$ = this.store.select(userFeature.selectUserState);
  }

  load(){
    this.store.dispatch(loadUsers());
  }
}
