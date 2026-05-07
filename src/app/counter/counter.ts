import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { decrement, increment, reset } from '../store/counter.actions';
import { counterFeature } from '../store/counter.feature';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter {
  counter$!: Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(counterFeature.selectCounterState);
  }

  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }

  resetCount() {
    this.store.dispatch(reset());
  }
}
