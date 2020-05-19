import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectOrdersState = createFeatureSelector<State>(FeatureKey);
