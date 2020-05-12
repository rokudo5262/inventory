import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectStoresState = createFeatureSelector<State>(FeatureKey);
