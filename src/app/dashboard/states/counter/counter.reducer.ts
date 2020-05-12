import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
    counter: number;
}

const initialState: State = {
    counter: 1,
};

export const reducer = createReducer(
    initialState,
    on(increment, (state) => ({
        ...state, counter: state.counter + 1,
    })),
    on(decrement, state => ({ ...state, counter: state.counter - 1 })),
    on(reset, state => ({ ...state, counter: 0 })),
);

export const selectCounterValue = (state: State) => state.counter;
