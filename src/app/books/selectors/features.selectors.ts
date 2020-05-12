import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectBooksState = createFeatureSelector<State>(FeatureKey);
