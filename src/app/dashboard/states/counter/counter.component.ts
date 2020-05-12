import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { State } from './counter.reducer';

@Component({
    selector: 'ngx-counter',
    templateUrl: 'counter.component.html',

})
export class CounterComponent {
    count$: Observable<State>;

    constructor(private store: Store<{count: State}>) {
        this.count$ = store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}
