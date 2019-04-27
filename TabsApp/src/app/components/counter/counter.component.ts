import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CounterComponentIncrement, CounterComponentDecrement, Reset, selectCount } from '../../store/state-counter';

@Component({
  selector: 'state-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select(selectCount));
  }

  ngOnInit() {}

  increment() {
    selectCount
    this.store.dispatch(CounterComponentIncrement());
  }
 
  decrement() {
    this.store.dispatch(CounterComponentDecrement({newCount: 1}));
  }
 
  reset() {
    this.store.dispatch(Reset());
  }
}
