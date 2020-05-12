import { createFeatureSelector } from '@ngrx/store';
import { FeatureKey, State } from '../reducers';

export const selectCustomersState = createFeatureSelector<State>(FeatureKey);
